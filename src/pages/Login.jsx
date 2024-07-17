import React, { useState } from 'react';
import { Redirect } from 'wouter';
import { useUser } from '../services/UserContext';

function Login() {
  const { login, user } = useUser(); // Asegúrate de tener acceso a user desde useUser

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, contraseña);
      setRedirectToDashboard(true); // Establecer redirectToDashboard en true al iniciar sesión correctamente
    } catch (error) {
      console.error('Login error:', error);
      setError('Error en el inicio de sesión. Por favor, verifica tus credenciales.'); // Manejar errores de inicio de sesión
    }
  };

  // Redirigir a Dashboard si redirectToDashboard es true
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img src="/fondo1.jpg" alt="City Skyline" className="w-full h-full object-cover" />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <img src="/logito.webp" alt="Alto Paz Logo" className="h-20 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Reportes de Incidencias</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold  text-white mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Recordarme
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-white font-bold shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Ingresar
          </button>
        </form>
      </div>

      {/* Pie de página */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-xl hover:text-red-300 transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-300 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-300 transition-colors">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;