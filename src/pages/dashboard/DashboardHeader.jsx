import React, { useState } from 'react';

function DashboardHeader() {
  const [tasks, setTasks] = useState([
    { id: 1, estado: 'En progreso', trabajo: 'Solicitar datos sobre aparcamiento', descripcion: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui...', idTarea: 90, asignado: 'Rafael Amargo', creado: '17/06/2015 19:50' },
    // Añadir más tareas aquí según sea necesario
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-gray-900 text-black">
      <header className="bg-sky-900 text-white p-4">
        <h1 className="text-2xl font-bold">Gestión de Incidencias</h1>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <SearchBar />
        <TaskTable tasks={tasks} />
      </main>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="mb-6">
      {/* Aquí va el código de tu barra de búsqueda actual */}
    </div>
  );
}

function TaskTable({ tasks }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Estado</th>
            <th className="p-2 text-left">Trabajo</th>
            <th className="p-2 text-left">Descripción</th>
            <th className="p-2 text-left">ID Tarea</th>
            <th className="p-2 text-left">Asignado</th>
            <th className="p-2 text-left">Creado</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-2">
                <span className={`inline-block w-3 h-3 rounded-full ${
                  task.estado === 'En progreso' ? 'bg-yellow-500' :
                  task.estado === 'Preparado' ? 'bg-blue-500' :
                  task.estado === 'Completado' ? 'bg-green-500' :
                  'bg-red-500'
                } mr-2`}></span>
                {task.estado}
              </td>
              <td className="p-2">{task.trabajo}</td>
              <td className="p-2">{task.descripcion}</td>
              <td className="p-2">{task.idTarea}</td>
              <td className="p-2">{task.asignado}</td>
              <td className="p-2">{task.creado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardHeader;