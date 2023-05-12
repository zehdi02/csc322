import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import BrowseProducts from './pages/BrowseProducts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BuildPC from './pages/BuildPC';
import UserPage from './pages/UserPage';
import ProductDemo from './pages/Products/ProductDemo';

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
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "build-pc",
      element: <BuildPC />,
    },
    {
      path: "product-demo",
      element: <ProductDemo />,
    },
    {
      path: "user-page",
      element: <UserPage />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
