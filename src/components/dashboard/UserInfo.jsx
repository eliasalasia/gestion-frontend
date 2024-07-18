import React from 'react';

function UserInfo({ userNombre, userType, userPiso }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold mb-4">Información del Usuario</h3>
      <p><strong>Nombre:</strong> {userNombre}</p>
      <p><strong>Tipo de Usuario:</strong> {userType === 'admin' ? 'Administrador' : 'Residente'}</p>
      {userType === 'residente' && <p><strong>Piso:</strong> {userPiso}</p>}
    </div>
  );
}

export default UserInfo;