import { StrictMode } from 'react'
    // main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    import App from './App.jsx';
    import Home from './components/Home.jsx';
    import About from './components/About.jsx';
    import Contact from './components/Contact.jsx';

    const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
          // Add more routes as needed
        ],
      },
    ]);

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
