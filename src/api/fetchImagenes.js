import axiosInstance from './AxiosInstance.js';

export const subirImagen = async (formData) => {
  try {
    const res = await axiosInstance.post('/incidencias', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error en subirImagen:', error);
    throw error;
  }
};
 