import React, { useState } from 'react';

function SearchBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    estado: '',
    desde: '',
    hasta: '',
    idTarea: '',
    asignado: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFilters(prev => ({ ...prev, estado: checked ? id : '' }));
  };

  const handleSearch = () => {
    onFilterChange(filters);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl mb-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="mr-2 font-bold">Estado:</label>
          <input type="checkbox" id="enProgreso" className="mr-1" onChange={handleCheckboxChange} checked={filters.estado === 'enProgreso'} />
          <label htmlFor="enProgreso" className="mr-4">En Progreso</label>
          <input type="checkbox" id="pendiente" className="mr-1" onChange={handleCheckboxChange} checked={filters.estado === 'pendiente'} />
          <label htmlFor="pendiente" className="mr-4">Pendiente</label>
          <input type="checkbox" id="resuelto" className="mr-1" onChange={handleCheckboxChange} checked={filters.estado === 'resuelto'} />
          <label htmlFor="resuelto" className="mr-4">Resuelto</label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <input type="date" name="desde" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Desde" onChange={handleInputChange} value={filters.desde} />
        <input type="date" name="hasta" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Hasta" onChange={handleInputChange} value={filters.hasta} />
        <input type="text" name="idTarea" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="ID Tarea" onChange={handleInputChange} value={filters.idTarea} />
        <input type="text" name="asignado" className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white" placeholder="Nombre Residente" onChange={handleInputChange} value={filters.asignado} />
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300" onClick={handleSearch}>BUSCAR</button>
      </div>
    </div>
  );
}

export default SearchBar;