import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import WelcomeMessage from '../components/dashboard/WelcomeMessage';
import UserInfo from '../components/dashboard/UserInfo';
import ActionBtn from '../components/dashboard/ActionBtn';


function Dashboard({ userNombre, userType }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img src="/fondo2.jpg" alt="Dashboard Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10">
        <DashboardHeader userNombre={userNombre} />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <WelcomeMessage userNombre={userNombre} userType={userType} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <UserInfo userNombre={userNombre} userType={userType} />
            <ActionBtn />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
