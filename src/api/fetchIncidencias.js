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
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  
    const response = await axiosInstance.put(`/incidencias/${id}`, updatedData, config);
    return response.data;
  };