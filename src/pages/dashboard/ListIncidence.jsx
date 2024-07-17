import React, { useState } from 'react';
import { Link } from 'wouter';

function ListIncidence() {
  const [incidences, setIncidences] = useState([
    { id: 1, titulo: 'Falla en el servidor', estado: 'En progreso', prioridad: 'Alta', fecha: '2024-07-15' },
    { id: 2, titulo: 'Error en la aplicación móvil', estado: 'Pendiente', prioridad: 'Media', fecha: '2024-07-14' },
    { id: 3, titulo: 'Actualización de software', estado: 'Completado', prioridad: 'Baja', fecha: '2024-07-13' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-gray-900 text-black">
      <header className="bg-sky-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ver Incidencias</h1>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Volver al Dashboard
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Título</th>
                <th className="p-2 text-left">Estado</th>
                <th className="p-2 text-left">Prioridad</th>
                <th className="p-2 text-left">Fecha</th>
                <th className="p-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {incidences.map((incidence) => (
                <tr key={incidence.id} className="border-b">
                  <td className="p-2">{incidence.id}</td>
                  <td className="p-2">{incidence.titulo}</td>
                  <td className="p-2">{incidence.estado}</td>
                  <td className="p-2">{incidence.prioridad}</td>
                  <td className="p-2">{incidence.fecha}</td>
                  <td className="p-2">
                    <Link href={`/incidencia/${incidence.id}`} className="text-blue-600 hover:text-blue-800 mr-2">
                      Ver
                    </Link>
                    <Link href={`/editar-incidencia/${incidence.id}`} className="text-green-600 hover:text-green-800">
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ListIncidence;