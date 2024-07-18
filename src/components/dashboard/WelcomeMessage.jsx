import React from 'react';

function WelcomeMessage({ userNombre, userType }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl">
      <h2 className="text-3xl font-bold">
        Bienvenido, {userType === 'admin' ? 'Administrador' : 'Residente'} {userNombre}
      </h2>
      <p className="mt-2 text-gray-300">
        Este es tu panel de control personalizado. Aquí podrás {userType === 'admin' ? 'gestionar incidencias y usuarios' : 'reportar y ver tus incidencias'}.
      </p>
    </div>
  );
}

export default WelcomeMessage;