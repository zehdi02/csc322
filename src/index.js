import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import BrowseProducts from './pages/BrowseProducts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "browse-products",
      element: <BrowseProducts />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
