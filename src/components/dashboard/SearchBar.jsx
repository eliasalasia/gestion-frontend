import React from 'react';

function SearchBar() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl mb-6">
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
        <input type="date" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Desde" />
        <input type="date" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Hasta" />
        <input type="text" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="ID Tarea" />
        <input type="text" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Operador" />
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300">BUSCAR</button>
      </div>
    </div>
  );
}
 
export default SearchBar;
