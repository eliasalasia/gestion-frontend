import React from 'react';
import { Link } from 'wouter';

function Dashboard() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <nav className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-white">Gestión de Incidencias</h1>
              </div>
              <div className="flex items-center">
                <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Cerrar sesión
                </Link>
              </div>
            </div>
          </div>
        </nav>
  
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-300">Incidencias Abiertas</h3>
                  <div className="mt-1 text-4xl font-semibold text-blue-400">42</div>
                </div>
              </div>
  
              <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-300">Incidencias Resueltas</h3>
                  <div className="mt-1 text-4xl font-semibold text-green-400">128</div>
                </div>
              </div>
  
              <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-300">Tiempo Promedio de Resolución</h3>
                  <div className="mt-1 text-4xl font-semibold text-yellow-400">2.5 días</div>
                </div>
              </div>
            </div>
  
            <div className="mt-8 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-300 mb-4">Incidencias Recientes</h3>
                <ul className="divide-y divide-gray-700">
                  <li className="py-4 flex items-center">
                    <span className="h-2 w-2 bg-red-400 rounded-full mr-2"></span>
                    <span>Falla en el servidor principal - #1234</span>
                  </li>
                  <li className="py-4 flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span>Error en la aplicación móvil - #1235</span>
                  </li>
                  <li className="py-4 flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                    <span>Problema de red en la oficina - #1236</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Distribución de Incidencias</h3>
                  <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    {/* Aquí iría un gráfico de distribución */}
                    <p className="text-gray-400">Gráfico de Distribución</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Tendencia de Incidencias</h3>
                  <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    {/* Aquí iría un gráfico de tendencia */}
                    <p className="text-gray-400">Gráfico de Tendencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default Dashboard;