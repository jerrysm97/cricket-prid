import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// Creating the router with future flags to eliminate console warnings
const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <App />,
    },
  ],
  {
    future: {
      v7_startTransition: true, // Fixes the startTransition warning
      v7_relativeSplatPath: true, // Fixes the relative splat path warning
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider 
      router={router} 
      future={{ v7_startTransition: true }} 
    />
  </React.StrictMode>
);