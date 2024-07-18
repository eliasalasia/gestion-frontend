import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './services/UserContext.jsx'; // Asegúrate de que la ruta sea correcta
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <UserProvider>
      <App />
    </UserProvider>
  </QueryClientProvider>
  // </React.StrictMode>,
);
