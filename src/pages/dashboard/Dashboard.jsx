import React from 'react';
import { Link } from 'wouter';

function Dashboard({ userName, userType }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-gray-900 text-black">
      <DashboardHeader userName={userName} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <WelcomeMessage userName={userName} userType={userType} />
          <UserInfo userName={userName} userType={userType} />
          <ActionButtons />
          <Statistics />
        </div>
      </main>
    </div>
  );
}

function DashboardHeader({ userName }) {
  return (
    <nav className="bg-sky-900 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-4">Bienvenido, {userName}</span>
            <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function WelcomeMessage({ userName, userType }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Bienvenido, {userType === 'admin' ? 'Administrador' : ''} {userName}
      </h2>
      <p className="text-gray-600 mt-2">
        Este es tu panel de control personalizado. Aquí podrás gestionar tus tareas y ver estadísticas importantes.
      </p>
    </div>
  );
}

function UserInfo({ userName, userType }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Información del Usuario</h3>
      <p><strong>Nombre:</strong> {userName}</p>
      <p><strong>Tipo de Usuario:</strong> {userType === 'admin' ? 'Administrador' : 'Residente'}</p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Link href="/crear-incidencia" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
        Crear Nueva Incidencia
      </Link>
      <Link href="/gestion-incidencias" className="bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
        Gestión de Incidencias
      </Link>
      <Link href="/incidencias" className="bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-medium transition duration-300">
        Ver Incidencias
      </Link>
    </div>
  );
}

function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Incidencias Abiertas" value="42" color="blue" />
      <StatCard title="Incidencias Resueltas" value="128" color="green" />
      <StatCard title="Tiempo Promedio de Resolución" value="2.5 días" color="yellow" />
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`bg-white overflow-hidden shadow-lg rounded-lg border border-${color}-200`}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className={`mt-1 text-3xl font-semibold text-${color}-600`}>{value}</div>
      </div>
    </div>
  );
}

export default Dashboard;