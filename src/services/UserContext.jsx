import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/api/users', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          // Asegúrate de que res.data tenga la estructura correcta
          console.log('User data:', res.data);
          setUser(res.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, contraseña) => {
    try {
      const res = await axios.post('http://localhost:3000/api/users/login', { email, contraseña });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user); // Asegúrate de que res.data.user contiene nombre, tipo, piso, etc.
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/api/users', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          console.log('User data:', res.data);
          setUser(res.data); // Asegúrate de que res.data contiene nombre, tipo, piso, etc.
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };  