import React, { useState, useEffect } from 'react'; // Asegúrate de importar useState desde React
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SearchBar from '../components/dashboard/SearchBar';
import TaskTable from '../components/dashboard/TaskTable';
import { Link } from 'wouter'; 

function ManageIncidence({ userNombre }) {
  const [tasks, setTasks] = useState([ // Aquí es donde usas useState
    {
      estado: 'En progreso',
      trabajo: 'Reparar equipo',
      descripcion: 'Descripción de la tarea',
      idTarea: '1234',
      asignado: 'Juan Pérez',
      creado: '2023-07-16',
    },
    // Otras tareas...
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10">
        
        <DashboardHeader userNombre={userNombre} />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/dashboard" className="text-white hover:text-gray-300 transition duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
              </svg>
            </Link>
          <SearchBar />
          <TaskTable tasks={tasks} />
          
        </main>
      </div>
    </div>
  );
}

export default ManageIncidence;
