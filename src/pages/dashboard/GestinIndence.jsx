import React, { useState } from 'react';
import { Link } from 'wouter';

function GestinIndence() {
  const [tasks, setTasks] = useState([
    { id: 1, estado: 'En progreso', trabajo: 'Solicitar datos sobre aparcamiento', descripcion: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui...', idTarea: 90, asignado: 'Rafael Amargo', creado: '17/06/2015 19:50' },
    // Añadir más tareas aquí según sea necesario
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-gray-900 text-black">
      <header className="bg-sky-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestión de Incidencias</h1>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Volver al Dashboard
          </Link>
        </div>
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
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="mr-2 font-bold">Estado:</label>
          <input type="checkbox" id="enProgreso" className="mr-1" />
          <label htmlFor="enProgreso" className="mr-4">En Progreso</label>
          <input type="checkbox" id="preparado" className="mr-1" />
          <label htmlFor="preparado" className="mr-4">Pendiente</label>
          <input type="checkbox" id="completado" className="mr-1" />
          <label htmlFor="completado" className="mr-4">Resuelto</label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <input type="date" className="border p-2 rounded" placeholder="Desde" />
        <input type="date" className="border p-2 rounded" placeholder="Hasta" />
        <input type="text" className="border p-2 rounded" placeholder="ID Tarea" />
        <input type="text" className="border p-2 rounded" placeholder="Operador" />
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition duration-300">BUSCAR</button>
      </div>
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

export default GestinIndence;