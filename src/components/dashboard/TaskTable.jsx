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
            <th className="p-2 text-left text-black">Ubicación</th>
            <th className="p-2 text-left text-black">Tipo</th>
            <th className="p-2 text-left text-black">Creado</th>
            <th className="p-2 text-left text-black">Actualizado</th>
            <th className="p-2 text-left text-black">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="border-b">
                <td className="p-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${task.estado.toLowerCase() === 'en proceso' ? 'bg-yellow-500' :
                      task.estado.toLowerCase() === 'pendiente' ? 'bg-blue-500' :
                        task.estado.toLowerCase() === 'resuelto' ? 'bg-green-500' :
                          'bg-red-500'
                    } mr-2`}></span>
                  {task.estado}
                </td>
                <td className="p-2 text-black">{task.asunto}</td>
                <td className="p-2 text-black">{task.descripcion}</td>
                <td className="p-2 text-black">{task.ubicacion}</td>
                <td className="p-2 text-black">{task.tipo}</td>
                <td className="p-2 text-black">{new Date(task.createdAt).toLocaleDateString()}</td>
                <td className="p-2 text-black">{new Date(task.updatedAt).toLocaleDateString()}</td>
                <td className="p-2">
                  {task.imagenes && task.imagenes.length > 0 ? (
                    task.imagenes.map((img, index) => (
                      <a key={index} href={`http://localhost:3000/uploads/${img}`} target="_blank" rel="noopener noreferrer">
                        <img src={`http://localhost:3000/uploads/${img}`} alt={`Imagen ${index + 1}`} className="w-16 h-16 object-cover" />
                      </a>
                    ))
                  ) : (
                    'No hay imágenes'
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="p-2 text-center">No se encontraron incidencias</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
