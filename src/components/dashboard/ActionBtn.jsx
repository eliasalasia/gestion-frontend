import React from 'react';
import { Link } from 'wouter';

function ActionBtn() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold mb-4">Acciones Rápidas</h3>
      <div className="space-y-4">
        <Link href="/crear-incidencia" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
          Crear Nueva Incidencia
        </Link>
        <Link href="/gestion-incidencias" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
          Gestión de Incidencias
        </Link>
        <Link href="ver-incidencias" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
          Ver Incidencias
        </Link>
      </div>
    </div>
  );
}

export default ActionBtn;
 
