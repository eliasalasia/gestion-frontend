import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'wouter';

function UpdateIncidence() {
  const { id } = useParams();
  const [incidencia, setIncidencia] = useState(null);
  const [newState, setNewState] = useState('');


  useEffect(() => {
    const fetchIncidencia = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        const response = await axios.get(`http://localhost:3000/api/incidencias/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIncidencia(response.data);
        setNewState(response.data.estado);
      } catch (error) {
        console.error('Error fetching incidencia:', error.response?.data || error.message);
      }
    };

    fetchIncidencia();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      await axios.put(`http://localhost:3000/api/incidencias/${id}`, { estado: newState }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      history.push('/gestion-incidencias'); // Redirige a la página de gestión de incidencias
    } catch (error) {
      console.error('Error updating incidencia:', error.response?.data || error.message);
    }
  };

  if (!incidencia) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Actualizar Incidencia</h1>
      <select
        value={newState}
        onChange={(e) => setNewState(e.target.value)}
      >
        <option value="pendiente">Pendiente</option>
        <option value="en proceso">En Proceso</option>
        <option value="resuelto">Resuelto</option>
        <option value="cancelado">Cancelado</option>
      </select>
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
}

export default UpdateIncidence;
