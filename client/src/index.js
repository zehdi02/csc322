import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import BrowseProducts from './pages/BrowseProducts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BuildPC from './pages/BuildPC';
import UserPage from './pages/UserPage';
import ProductDemo from './pages/Products/ProductDemo';
import Checkout from './pages/Checkout';
import Forgot from './pages/Forgot';

import Dashboard from './pages/Dashboard';
import Presets from './pages/Presets';

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
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "forgot",
      element: <Forgot />,
    },
    {
      path: "presets",
      element: <Presets />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
