import React, { useEffect, useState } from 'react';
import DashboardHeader from './DashboardHeader';
import { Link } from 'wouter';
import axios from 'axios';
import { useUser } from '../../services/UserContext';

const ViewIncidencias = ({ userType, userId }) => {
  const { user } = useUser();
  const [incidencias, setIncidencias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidencias = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('http://localhost:3000/api/incidencias', config);

        if (Array.isArray(response.data)) {
          setIncidencias(response.data);
        } else {
          setIncidencias([]);
        }
      } catch (error) {
        if (error.response) {
          console.error('Datos de la respuesta de error:', error.response.data);
          console.error('Estado de la respuesta de error:', error.response.status);
        }
        setError(`Error al obtener incidencias: ${error.message}`);
      }
    };

    fetchIncidencias();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex justify-start mb-6">
            <Link href="/dashboard" className="text-white hover:text-gray-300 transition duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" />
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor" />
              </svg>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">Lista de Incidencias</h1>
            {incidencias.length === 0 ? (
              <p className="text-gray-600">No hay incidencias para mostrar.</p>
            ) : (
              <table className="w-full text-gray-900">
                <thead className="bg-gradient-to-r from-red-500 via-red-700 to-red-800 text-white border-b border-gray-300">
                  <tr>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Asunto</th>
                    <th className="p-2 text-left">Descripción</th>
                    <th className="p-2 text-left">Ubicación</th>
                    <th className="p-2 text-left">Tipo</th>
                    <th className="p-2 text-left">Estado</th>
                    <th className="p-2 text-left">Creado</th>
                    <th className="p-2 text-left">Actualizado</th>
                    <th className="p-2 text-left">Imagenes</th>
                    <th className="p-2 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {incidencias.map((incidencia) => (
                    <tr key={incidencia.id} className="border-b border-gray-200">
                      <td className="p-4">{incidencia.id}</td>
                      <td className="p-4">{incidencia.asunto}</td>
                      <td className="p-4">{incidencia.descripcion}</td>
                      <td className="p-4">{incidencia.ubicacion}</td>
                      <td className="p-4">{incidencia.tipo}</td>
                      <td className="p-4">
                        <span className={`inline-block w-3 h-3 rounded-full ${incidencia.estado === 'en proceso' ? 'bg-yellow-500' :
                            incidencia.estado === 'pendiente' ? 'bg-blue-500' :
                              incidencia.estado === 'resuelto' ? 'bg-green-500' : 'bg-red-500'
                          } mr-2 inline-flex`}></span>
                        {incidencia.estado}
                      </td>
                      <td className="p-4">{new Date(incidencia.createdAt).toLocaleDateString()}</td>
                      <td className="p-4">{new Date(incidencia.updatedAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        {incidencia.imagenes && incidencia.imagenes.map((img, index) => (
                          <img key={index} src={img} alt={`Imagen ${index + 1}`} className="w-12 h-12 object-cover rounded-lg" />
                        ))}
                      </td>
                      <td className="p-4">
                          <Link
                            href={`/actualizar-datos/${userId}`}
                            className="block w-full text-red-500 text-center py-3 rounded-lg font-medium transition duration-300"
                          >
                            Actualizar 
                          </Link>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewIncidencias;
