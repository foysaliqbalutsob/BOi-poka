import React, { Component } from 'react';

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider, } from "react-router/dom";
import Root from '../Pages/Root/Root';
import Navbar from '../Components/Header/Navbar';
import Error from '../Pages/Root/Error';
import Home from './Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/bookDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
        {
            index:true,
            loader: ()=>fetch('booksData.json'),
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'/bookDetail/:bookId',
          loader: () => fetch('booksData.json'),
          Component:BookDetails

        }
    ]
   
  }
]);