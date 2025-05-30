import { Link } from 'react-router-dom'
import { useState } from 'react'
import useIngredientes from '../hooks/ingredients'
import { useNavigate } from 'react-router-dom'
import { crearReceta } from '../services/Requests'

export default function CreateRecipePage() {
    const navigate = useNavigate();

    const [ingredientes, setIngredientes] = useState([])
    const {ingredientesSelect} = useIngredientes()
    const [receta, setReceta] = useState({
        nombre: '',
        descripcion: '',
        tiempo_de_preparacion: '',
        instrucciones: '',
        dificultad: 'facil'
    })
    const agregarIngrediente = () => {
        setIngredientes([...ingredientes, { id_ingrediente: '', cantidad: 1 }])
    }

    const actualizarIngrediente = (index, campo, valor) => {
        const copia = [...ingredientes]
        copia[index][campo] = valor
        setIngredientes(copia)
    }

    const eliminarIngrediente = (index) => {
        const copia = [...ingredientes]
        copia.splice(index, 1)
        setIngredientes(copia)
    }

    const handleChange = (e) => {
        setReceta({ ...receta, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const recetaCompleta = {
          ...receta,
          tiempo_de_preparacion: parseInt(receta.tiempo_de_preparacion),
          ingredientes: ingredientes.map(ing => ({
            id_ingrediente: parseInt(ing.id_ingrediente),
            cantidad: parseInt(ing.cantidad)
          }))
        };
        console.log("Datos a enviar:", recetaCompleta);
        try {
          await crearReceta(recetaCompleta);
          alert("Receta creada exitosamente");
          navigate("/");
          
        } catch (error) {
          alert("Error al crear la receta");
          console.error("Error al hacer POST:", error);
        }
    };
      
    
    return (
    <div className='p-[15px] bg-gray-300 flex justify-center min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col lg:w-1/3 w-full'>
            <h1 className="text-xl font-semibold mb-4">Crear receta</h1>
            <label>Nombre:</label>
            <input type="text" name="nombre" required className='border bg-white mb-2' onChange={handleChange}/>

            <label>Descripción:</label>
            <textarea name="descripcion" className='border bg-white  mb-2' onChange={handleChange}></textarea>
            <div className='flex justify-between mb-2'>
                <div className='w-1/2'>
                    <label>Tiempo de preparación (min):</label>
                    <input type="number" name="tiempo_de_preparacion" min="1" required className='border bg-white w-1/2 ' onChange={handleChange}/>
                </div>
                <div className='w-1/2'>
                    <label>Dificultad:</label>
                    <select name="dificultad" required className='border bg-white w-full' onChange={handleChange}>
                        <option value="facil">Fácil</option>
                        <option value="media">Media</option>
                        <option value="dificil">Difícil</option>
                    </select>
                </div>
            </div>
            <label>Instrucciones:</label>
            <textarea name="instrucciones" required className='border bg-white' onChange={handleChange}></textarea>
            
            <h1 className="text-xl font-semibold my-4">Ingredientes</h1>
            {ingredientes.map((ing, index) => (
            <div key={index} className='flex justify-between mb-2'>
                <select 
                required 
                onChange={e => actualizarIngrediente(index, 'id_ingrediente', e.target.value)}
                className='border bg-white w-2/4' 
                value={ing.id_ingrediente}>
                    <option value="">Seleccione ingrediente</option>
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

            <hr/>
            <div className='flex justify-between'>
                <Link to={"/"}>
                    <button className='p-2 bg-gray-400 mt-4 rounded'>Regresar</button>
                </Link>
                <button type="submit" className='p-2 bg-gray-400 mt-4 rounded'>Guardar Receta</button>
            </div>
        </form> 
    </div>
  )
}
