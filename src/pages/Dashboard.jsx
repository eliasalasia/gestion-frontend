import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import WelcomeMessage from '../components/dashboard/WelcomeMessage';
import UserInfo from '../components/dashboard/UserInfo';
import ActionBtn from '../components/dashboard/ActionBtn';
import { useUser } from '../services/UserContext';

function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>
      
      <div className="relative z-10">
        <DashboardHeader userNombre={user.nombre} />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-8 lg:px-8">
          <WelcomeMessage userNombre={user.nombre} userType={user.tipo} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <UserInfo userNombre={user.nombre} userType={user.tipo} userPiso={user.piso} />
            <ActionBtn userType={user.tipo} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;