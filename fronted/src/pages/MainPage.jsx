import RecipeCard from "../components/RecipeCard"
import { Link } from 'react-router-dom'

export default function MainPage() {

  return (
    <div className='flex m-[15px] gap-4'>
        <div className="w-1/4 bg-gray-100 p-2 flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4">Todas las Recetas</h1>
            <Link to={"/create"}>
                <button className='p-2 bg-gray-400 mb-4 rounded'>Crear nueva receta +</button>
            </Link>
            <RecipeCard id_receta={1} nombre={"Pollo con crema"}/>
            <RecipeCard id_receta={1} nombre={"Pollo con crema"}/>
            <RecipeCard id_receta={1} nombre={"Pollo con crema"}/>
        </div>
        <div className="w-3/4">
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
                
              </tbody>
            </table>
        </div>
    </div>
  )
}
