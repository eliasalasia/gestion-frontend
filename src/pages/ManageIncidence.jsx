import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SearchBar from '../components/dashboard/SearchBar';
import TaskTable from '../components/dashboard/TaskTable';
import { Link } from 'wouter';
import axios from 'axios';

function ManageIncidence({ userNombre }) {
  const [incidencias, setIncidencias] = useState([]);
  const [filteredIncidencias, setFilteredIncidencias] = useState([]);
  const [filters, setFilters] = useState({
    estado: '',
    desde: '',
    hasta: '',
    idTarea: '',
    asignado: ''
  });

  useEffect(() => {
    fetchIncidencias();
  }, []);

  const fetchIncidencias = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      console.log('Token being sent:', token); // Para depuración
      const response = await axios.get('http://localhost:3000/api/incidencias', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setIncidencias(response.data);
      setFilteredIncidencias(response.data);
    } catch (error) {
      console.error('Error fetching incidencias:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        // Manejar el error de autenticación (por ejemplo, redirigir al login)
        console.log('Authentication failed. Redirecting to login...');
        // Implementa aquí la lógica para redirigir al usuario al login
      }
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = incidencias;

    if (currentFilters.estado) {
      filtered = filtered.filter(inc => inc.estado.toLowerCase() === currentFilters.estado.toLowerCase());
    }

    if (currentFilters.desde) {
      filtered = filtered.filter(inc => new Date(inc.creado) >= new Date(currentFilters.desde));
    }

    if (currentFilters.hasta) {
      filtered = filtered.filter(inc => new Date(inc.creado) <= new Date(currentFilters.hasta));
    }

    if (currentFilters.idTarea) {
      filtered = filtered.filter(inc => inc.id.toString().includes(currentFilters.idTarea));
    }

    if (currentFilters.asignado) {
      filtered = filtered.filter(inc => inc.nombre_residente.toLowerCase().includes(currentFilters.asignado.toLowerCase()));
    }

    setFilteredIncidencias(filtered);
  };

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
          <SearchBar onFilterChange={handleFilterChange} />
          <TaskTable tasks={filteredIncidencias} />
        </main>
      </div>
    </div>
  );
}

export default ManageIncidence;