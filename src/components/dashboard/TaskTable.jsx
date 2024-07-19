import React from 'react';

function TaskTable({ tasks, isAdmin, onUpdateState }) {
  console.log('Is Admin:', isAdmin);

  const handleStateChange = (incidenciaId, newState) => {
    onUpdateState(incidenciaId, newState);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full text-black">
      <thead className="bg-gradient-to-r from-teal-500 via-teal-700 to-teal-800 text-white border-b border-gray-300">
          <tr>
            <th className="p-2 text-left">Estado</th>
            <th className="p-2 text-left">Asunto</th>
            <th className="p-2 text-left">Descripción</th>
            <th className="p-2 text-left">Ubicación</th>
            <th className="p-2 text-left">Tipo</th>
            <th className="p-2 text-left">Creado</th>
            <th className="p-2 text-left">Actualizado</th>
            <th className="p-2 text-left">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="border-b">
                <td className="p-4">
                  {isAdmin ? (
                    <select
                      value={task.estado}
                      onChange={(e) => handleStateChange(task.id, e.target.value)}
                      className="bg-white border rounded"
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en proceso">En Proceso</option>
                      <option value="resuelto">Resuelto</option>
                    </select>
                  ) : (
                    <span className={`inline-block w-3 h-3 rounded-full ${
                      task.estado === 'en proceso' ? 'bg-yellow-500' :
                      task.estado === 'pendiente' ? 'bg-blue-500' :
                      task.estado === 'resuelto' ? 'bg-green-500' : 'bg-red-500'
                    } mr-2 inline-flex`}></span>
                  )}
                  {task.estado}
                </td>
                <td className="p-4">{task.asunto}</td>
                <td className="p-4">{task.descripcion}</td>
                <td className="p-4">{task.ubicacion}</td>
                <td className="p-4">{task.tipo}</td>
                <td className="p-4">{new Date(task.createdAt).toLocaleDateString()}</td>
                <td className="p-4">{new Date(task.updatedAt).toLocaleDateString()}</td>
                <td className="p-2">
                  {task.imagenes && task.imagenes.length > 0 ? (
                    <div className="flex flex-wrap">
                      {task.imagenes.map((img, index) => (
                        <a key={index} href={img} target="_blank" rel="noopener noreferrer" className="block m-1">
                          <img
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            className="w-16 h-16 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
                            onError={(e) => { e.target.onerror = null; }}
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    'No hay imágenes'
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="p-2 text-center">No se encontraron incidencias</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
