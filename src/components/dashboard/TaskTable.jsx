import React from 'react';

function TaskTable({ tasks }) {
  console.log(tasks);
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
            <tr key={task.idTarea} className="border-b">
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

export default TaskTable;