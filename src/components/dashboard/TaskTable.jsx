import React from 'react';

function TaskTable({ tasks }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left text-black">Estado</th>
            <th className="p-2 text-left text-black">Asunto</th>
            <th className="p-2 text-left text-black">Descripción</th>
            <th className="p-2 text-left text-black">ID Tarea</th>
            <th className="p-2 text-left text-black">Residente</th>
            <th className="p-2 text-left text-black">Creado</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-2">
                <span className={`inline-block w-3 h-3 rounded-full ${
                  task.estado === 'en Progreso' ? 'bg-yellow-500' :
                  task.estado === 'pendiente' ? 'bg-blue-500' :
                  task.estado === 'resuelto' ? 'bg-green-500' :
                  'bg-red-500'
                } mr-2`}></span>
                {task.estado}
              </td>
              <td className="p-2">{task.asunto}</td>
              <td className="p-2">{task.descripcion}</td>
              <td className="p-2">{task.id}</td>
              <td className="p-2">{task.nombre_residente}</td>
              <td className="p-2">{new Date(task.creado).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;