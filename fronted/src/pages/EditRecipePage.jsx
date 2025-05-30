import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getRecetaPorId, editarReceta } from '../services/Requests';
import useIngredientes from '../hooks/ingredients';

export default function EditRecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ingredientesSelect } = useIngredientes();

  const [receta, setReceta] = useState(null);
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRecetaPorId(id);
        setReceta({
          nombre: data.nombre,
          descripcion: data.descripcion,
          tiempo_de_preparacion: data.tiempo_de_preparacion,
          instrucciones: data.instrucciones,
          dificultad: data.dificultad
        });
        setIngredientes(data.ingredientes); // [{id_ingrediente, cantidad}]
      } catch (error) {
        alert("Error cargando receta");
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setReceta({ ...receta, [e.target.name]: e.target.value });
  };

  const actualizarIngrediente = (index, campo, valor) => {
    const copia = [...ingredientes];
    copia[index][campo] = valor;
    setIngredientes(copia);
  };

  const eliminarIngrediente = (index) => {
    const copia = [...ingredientes];
    copia.splice(index, 1);
    setIngredientes(copia);
  };

  const agregarIngrediente = () => {
    setIngredientes([...ingredientes, { id_ingrediente: '', cantidad: 1 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recetaEditada = {
      ...receta,
      tiempo_de_preparacion: parseInt(receta.tiempo_de_preparacion),
      ingredientes: ingredientes.map((ing) => ({
        id_ingrediente: parseInt(ing.id_ingrediente),
        cantidad: parseInt(ing.cantidad)
      }))
    };

    try {
      await editarReceta(id, recetaEditada);
      alert("Receta actualizada correctamente");
      navigate('/');
    } catch (error) {
      console.error("Error actualizando receta:", error);
      alert("No se pudo actualizar la receta");
    }
  };

  if (!receta) return <p className="p-4">Cargando...</p>;

  return (
    <div className='p-[15px] bg-gray-300 flex justify-center min-h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col lg:w-1/3 w-full'>
        <h1 className="text-xl font-semibold mb-4">Editar receta</h1>

        <label>Nombre:</label>
        <input type="text" name="nombre" value={receta.nombre} required className='border bg-white mb-2' onChange={handleChange} />

        <label>Descripción:</label>
        <textarea name="descripcion" value={receta.descripcion} className='border bg-white mb-2' onChange={handleChange}></textarea>

        <div className='flex justify-between mb-2'>
          <div className='w-1/2'>
            <label>Tiempo de preparación (min):</label>
            <input type="number" name="tiempo_de_preparacion" min="1" value={receta.tiempo_de_preparacion} required className='border bg-white w-1/2' onChange={handleChange} />
          </div>
          <div className='w-1/2'>
            <label>Dificultad:</label>
            <select name="dificultad" value={receta.dificultad} required className='border bg-white w-full' onChange={handleChange}>
              <option value="facil">Fácil</option>
              <option value="media">Media</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>
        </div>

        <label>Instrucciones:</label>
        <textarea name="instrucciones" value={receta.instrucciones} required className='border bg-white' onChange={handleChange}></textarea>

        <h1 className="text-xl font-semibold my-4">Ingredientes</h1>
        {ingredientes.map((ing, index) => (
          <div key={index} className='flex justify-between mb-2'>
            <select
              required
              onChange={e => actualizarIngrediente(index, 'id_ingrediente', e.target.value)}
              className='border bg-white w-2/4'
              value={ing.id_ingrediente}
            >
              <option value="">Selecciona un ingrediente</option>
              {ingredientesSelect.map((ingSelc) => (
                <option key={ingSelc.id_ingrediente} value={ingSelc.id_ingrediente}>
                  {ingSelc.nombre}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder='Cantidad'
              min="1"
              value={ing.cantidad}
              onChange={e => actualizarIngrediente(index, 'cantidad', e.target.value)}
              required
              className='bg-white w-1/4'
            />
            <button type="button" className='px-3 bg-gray-400' onClick={() => eliminarIngrediente(index)}>Eliminar</button>
          </div>
        ))}

        <button type="button" className='bg-gray-400 mb-2 rounded py-1' onClick={agregarIngrediente}>Agregar Ingrediente +</button>

        <hr />
        <div className='flex justify-between'>
          <Link to={"/"}>
            <button type="button" className='p-2 bg-gray-400 mt-4 rounded'>Cancelar</button>
          </Link>
          <button type="submit" className='p-2 bg-gray-400 mt-4 rounded'>Guardar Cambios</button>
        </div>
      </form>
    </div>
  );
}
