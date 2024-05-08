import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import JobReadyProgram from './pages/JobReadyProgram';
import About from './pages/About';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/job-ready-program",
    element: <JobReadyProgram />,
  },
  {
    path: "/about",
    element: <About  />,
  },
  {
    path: "/products",
    element: <Products  />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
