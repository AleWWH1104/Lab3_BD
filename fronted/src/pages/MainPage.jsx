import RecipeCard from "../components/RecipeCard"
import { Link } from 'react-router-dom'
import { useVista } from "../hooks/view";
import { useAllRecetas } from "../hooks/recipes";

export default function MainPage() {
    const { vista, reloadVista } = useVista();
    const {recetas, reloadRecetas} = useAllRecetas();

    return (
    <div className='flex m-[15px] gap-4'>
        <div className="w-1/5 bg-gray-100 p-2 flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4">Todas las Recetas</h1>
            <Link to={"/create"}>
                <button className='p-2 bg-gray-400 mb-4 rounded'>Crear nueva receta +</button>
            </Link>
            {recetas.map((receta)=>(
            <RecipeCard 
              key={receta.id_receta}
              id_receta={receta.id_receta}
              nombre={receta.nombre}
              reloadRecetas={reloadRecetas}
              reloadVista={reloadVista}
            />
          ))}
        </div>
        <div className="w-4/5">
            <h2 className="text-xl font-semibold mb-4">Vista de Recetas con Ingredientes</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Id Receta</th>
                    <th className="border p-2">Receta</th>
                    <th className="border p-2">Descripción</th>
                    <th className="border p-2">Tiempo</th>
                    <th className="border p-2">Dificultad</th>
                    <th className="border p-2">Ingrediente</th>
                    <th className="border p-2">Categoria</th>
                    <th className="border p-2">Cantidad</th>
                    <th className="border p-2">Unidad</th>
                </tr>
              </thead>
              <tbody>
                {vista.map((row, index) => (
                <tr key={index}>
                    <td className="border p-2">{row.id_receta}</td>
                    <td className="border p-2">{row.nombre_receta}</td>
                    <td className="border p-2">{row.descripcion}</td>
                    <td className="border p-2">{row.tiempo_de_preparacion}</td>
                    <td className="border p-2">{row.dificultad}</td>
                    <td className="border p-2">{row.ingrediente_nombre}</td>
                    <td className="border p-2">{row.categoria}</td>
                    <td className="border p-2">{row.cantidad}</td>
                    <td className="border p-2">{row.unidad}</td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}
