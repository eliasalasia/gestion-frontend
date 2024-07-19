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
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://localhost:3000/api/users', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(res.data); // Asegúrate de que res.data tenga la estructura correcta
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const login = async (email, contraseña) => {
    try {
      const res = await axios.post('http://localhost:3000/api/users/login', { email, contraseña });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user); // Asegúrate de que res.data.user contiene los datos del usuario
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  };

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
