import axiosInstance from './AxiosInstance';

export const fetchIncidencias = async () => {
  try {
    const response = await axiosInstance.get('/incidencias');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const updateIncidenciaEstado = async (id, newState) => {
    try {
      const response = await axiosInstance.put(`/incidencias/${id}/estado`, { estado: newState });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };


  
  export const fetchIncidenciaById = async (id) => {
    try {
      const response = await axiosInstance.get(`/incidencias/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };
  
  export const updateIncidencia = async (id, updatedData) => {
    if (!id) {
      throw new Error('ID de incidencia no proporcionado');
    }
  
    try {
      const response = await axiosInstance.put(`/incidencias/${id}`, updatedData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };