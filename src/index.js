/*
=========================================================
Name        : index.js for my-ecommerce-app
Assignment  : Assignment 5
Author(s)   : Zaira Ramji and Maryam Alayed
Submission  : April 8, 2024
=========================================================
*/


import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './component/Homepage';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/Productpage",
    element: <Productpage/>
  },
  {
    path: "/LoginPage",
    element: <LoginPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
