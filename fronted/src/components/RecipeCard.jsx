import { onEditarReceta, onEliminarReceta } from "../hooks/recipes"
import { useNavigate } from "react-router-dom";

export default function RecipeCard({id_receta, nombre,reloadRecetas, reloadVista}) {
    const navigate = useNavigate();
    
    return (
    <div className="rounded p-4 mb-4 shadow-md bg-white w-full">
        <h4 className="mb-2">ID: {id_receta} - {nombre}</h4>
        <div className="flex justify-end gap-4">
            <button className="py-1 px-2 bg-gray-300 rounded" onClick={() => navigate(`/edit/${id_receta}`)}>Editar</button>
            <button className="py-1 px-2 bg-gray-300 rounded" onClick={() => onEliminarReceta(id_receta, reloadRecetas, reloadVista)}>Eliminar</button>
        </div>
    </div>
  )
}
