import React, { useState } from 'react';

function SearchBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    estado: [],
    desde: '',
    hasta: '',
    asignado: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const newFilters = { ...filters };
    if (checked) {
      newFilters.estado = [...newFilters.estado, value];
    } else {
      newFilters.estado = newFilters.estado.filter(estado => estado !== value);
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl mb-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="mr-2 font-bold">Estado:</label>
          <input
            type="checkbox"
            id="pendiente"
            value="pendiente"
            className="mr-1"
            checked={filters.estado.includes('pendiente')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="pendiente" className="mr-4">Pendiente</label>
          <input
            type="checkbox"
            id="enProceso"
            value="en proceso"
            className="mr-1"
            checked={filters.estado.includes('en proceso')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="enProceso" className="mr-4">En Proceso</label>
          <input
            type="checkbox"
            id="resuelto"
            value="resuelto"
            className="mr-1"
            checked={filters.estado.includes('resuelto')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="resuelto" className="mr-4">Resuelto</label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <input
          type="date"
          name="desde"
          className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white"
          placeholder="Desde"
          onChange={handleInputChange}
          value={filters.desde}
        />
        <input
          type="date"
          name="hasta"
          className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white"
          placeholder="Hasta"
          onChange={handleInputChange}
          value={filters.hasta}
        />
        <input
          type="text"
          name="asignado"
          className="bg-white bg-opacity-20 border border-gray-600 p-2 rounded-lg text-white"
          placeholder="ID Asignado"
          onChange={handleInputChange}
          value={filters.asignado}
        />
      </div>
    </div>
  );
}

export default SearchBar;