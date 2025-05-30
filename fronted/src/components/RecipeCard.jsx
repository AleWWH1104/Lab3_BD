

export default function RecipeCard({id_receta, nombre}) {
  return (
    <div className="rounded p-4 mb-4 shadow-md bg-white w-full">
        <h4 className="mb-2">ID: {id_receta} - {nombre}</h4>
        <div className="flex justify-end gap-4">
            <button className="py-1 px-2 bg-gray-300 rounded">Editar</button>
            <button className="py-1 px-2 bg-gray-300 rounded">Eliminar</button>
        </div>
    </div>
  )
}
