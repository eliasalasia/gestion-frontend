import React from 'react';
import { useRoute } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchIncidenciaById, updateIncidencia } from '../api/fetchIncidencias';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Link } from 'wouter';

const UpdateIncUser = () => {
  const [, params] = useRoute('/actualizar-datos/:id');
  const incidenciaId = params?.id;
  const queryClient = useQueryClient();

  // Fetch incidencia by ID
  const { data: incidencia, error: fetchError, isLoading } = useQuery({
    queryKey: ['incidencia', incidenciaId],
    queryFn: () => fetchIncidenciaById(incidenciaId),
    enabled: Boolean(incidenciaId),
  });

  // Mutation to update incidencia
  const updateMutation = useMutation({
    mutationKey: ['updateIncidencia', incidenciaId],
    mutationFn: (formData) => updateIncidencia(incidenciaId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries(['incidencia', incidenciaId]);
      alert('Incidencia actualizada exitosamente');
    },
    onError: (error) => {
      console.error('Error al actualizar la incidencia:', error);
      alert('Error al actualizar la incidencia');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!incidenciaId) {
      console.error('ID de incidencia no disponible');
      return;
    }

    const formData = new FormData();
    const fileInput = e.target.imagenes;

    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('imagenes', fileInput.files[i]);
    }

    formData.append('asunto', e.target.asunto.value);
    formData.append('descripcion', e.target.descripcion.value);
    formData.append('tipo', e.target.tipo.value);
    formData.append('estado', e.target.estado.value);
    formData.append('ubicacion', e.target.ubicacion.value);

    try {
      await updateMutation.mutateAsync(formData);
    } catch (error) {
      console.error('Error al actualizar la incidencia:', error);
    }
  };

  if (fetchError) return <div>Error al cargar la incidencia</div>;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10">
        <DashboardHeader />

        <main className="max-w-7xl mx-auto py-6 px-8 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <Link href="/ver-incidencias" className="text-white hover:text-gray-300 transition duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" />
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor" />
              </svg>
            </Link>

            <h2 className="text-3xl font-bold mb-4">Actualizar Incidencia</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <input type="text" name="asunto" defaultValue={incidencia?.asunto} className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Descripción</label>
                <textarea name="descripcion" defaultValue={incidencia?.descripcion} className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <input type="text" name="tipo" defaultValue={incidencia?.tipo} className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Estado</label>
                <input type="text" name="estado" defaultValue={incidencia?.estado} className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Ubicación</label>
                <input type="text" name="ubicacion" defaultValue={incidencia?.ubicacion} className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Cargar Imagen</label>
                <input
                  type="file"
                  name="imagenes"
                  multiple
                  className="w-full bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white"
                />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
                Actualizar Incidencia
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpdateIncUser;
