import React, { useEffect, useState } from 'react';
import DashboardHeader from './DashboardHeader';
import { Link } from 'wouter';
import axios from 'axios';
import { useUser } from '../../services/UserContext';

const ViewIncidencias = () => {
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

        console.log('Intentando obtener incidencias...');
        const response = await axios.get('http://localhost:3000/api/incidencias', config);
        console.log('Respuesta recibida:', response);

        if (Array.isArray(response.data)) {
          console.log('Datos de incidencias:', response.data);
          setIncidencias(response.data);
        } else {
          console.log('La respuesta no es un array:', response.data);
          setIncidencias([]);
        }
      } catch (error) {
        console.error('Error completo:', error);
        if (error.response) {
          console.error('Datos de la respuesta de error:', error.response.data);
          console.error('Estado de la respuesta de error:', error.response.status);
          console.error('Cabeceras de la respuesta de error:', error.response.headers);
        }
        setError(`Error al obtener incidencias: ${error.message}`);
      }
    };

    fetchIncidencias();
  }, []);

  if (error) {
    return <div>{error}</div>;
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
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">Lista de Incidencias</h1>
            {incidencias.length === 0 ? (
              <p className="text-gray-600">No hay incidencias para mostrar.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
              {incidencias.map((incidencia) => (
                <li key={incidencia.id} className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg font-medium text-gray-900">Incidencia #{incidencia.id}</h3>
                      <p className="text-sm text-gray-500">Usuario ID: {incidencia.userId}</p>
                      <p className="text-sm text-gray-500">Asunto: {incidencia.asunto}</p>
                      <p className="text-sm text-gray-500">Descripción: {incidencia.descripcion}</p>
                      <p className="text-sm text-gray-500">Tipo: {incidencia.tipo}</p>
                      <p className="text-sm text-gray-500">Estado: {incidencia.estado}</p>
                      <p className="text-sm text-gray-500">Ubicación: {incidencia.ubicacion}</p>
                      <p className="text-sm text-gray-500">Creado: {new Date(incidencia.createdAt).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Actualizado: {new Date(incidencia.updatedAt).toLocaleString()}</p>
                    </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewIncidencias;
