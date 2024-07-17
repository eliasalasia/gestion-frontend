import React, { useEffect, useState } from 'react';
import DashboardHeader from './DashboardHeader';
import { Link } from 'wouter';

const ViewIncidence = ({ userNombre }) => {
  const [incidence, setIncidence] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos de incidencia
    setIncidence({
      id: 1,
      description: 'Incidencia de ejemplo',
    });
  }, []);

  if (!incidence) {
    return <p className="text-center mt-8 text-gray-500 text-xl">Cargando...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10">
        <DashboardHeader userNombre={userNombre} />
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
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">Detalles de la Incidencia</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <p className="font-semibold text-gray-600">ID:</p>
                <p className="text-gray-800">{incidence.id}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-600">Descripción:</p>
                <p className="text-gray-800">{incidence.description}</p>
              </div>
            </div>
            <div className="mt-6">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewIncidence;