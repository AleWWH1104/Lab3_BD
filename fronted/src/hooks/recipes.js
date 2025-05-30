import { getAllRecetas, editarReceta, eliminarReceta } from "../services/Requests";
import { useEffect, useState } from 'react';

export function useAllRecetas() {
    const [recetas, setRecetas] = useState([]);

    const reloadRecetas = () => {
        return getAllRecetas()
          .then(setRecetas)
          .catch((error) => console.error("Error cargando recetas:", error));
    };
    
    useEffect(() => {
        reloadRecetas();
    }, []);
    
    return { recetas, reloadRecetas};
}


export const onEditarReceta = async (id, nuevosDatos) => {
  try {
    const response = await editarReceta(id, nuevosDatos);
    alert("Receta actualizada correctamente");
    return response;
  } catch (error) {
    alert("Error al editar la receta");
    console.error(error);
  }
};

export const onEliminarReceta = async (id, reloadRecetas, reloadVista) => {
  try {
    await eliminarReceta(id);
    alert("Receta eliminada correctamente");
    reloadRecetas();
    reloadVista();
  } catch (error) {
    alert("Error al eliminar la receta");
    console.error(error);
  }
};
