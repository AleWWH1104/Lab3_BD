import axios from "./Axios"

export const getVistaRecetas = async () => {
    try {
      const response = await axios.get(`/vista-recetas`);
      return response.data;
    } catch (error) {
      console.error('Error fetching vista de recetas:', error);
      console.error('Mensaje:', error.message);
      console.error('Respuesta:', error.response?.data);
      throw error;
    }
};

export const getAllIngredientes = async () => {
  try {
    const response = await axios.get(`/ingredientes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredientes:', error);
    throw error;
  }
};

export const getAllRecetas = async () => {
  try {
    const response = await axios.get(`/recetas`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching recetas:', error);
    throw error;
  }
};

export const getRecetaPorId = async (id) => {
  try {
    const response = await axios.get(`/recetas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching receta con ID ${id}:`, error);
    throw error;
  }
};

export const crearReceta = async (data) => {
  try {
    return await axios.post(`/recetas`, data);
  } catch (error) {
    console.error('Error creando receta:', error);
    throw error;
  }
};

export const editarReceta = async (id, data) => {
  try {
    const response = await axios.put(`/recetas/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error editando receta con ID ${id}:`, error);
    throw error;
  }
};

export const eliminarReceta = async (id) => {
  try {
    const response = await axios.delete(`/recetas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error eliminando receta con ID ${id}:`, error);
    throw error;
  }
};
