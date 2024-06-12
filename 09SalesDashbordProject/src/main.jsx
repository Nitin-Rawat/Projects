
// // import App from './App.jsx'
// import './index.css'
// import * as React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import * as ReactDOM from "react-dom/client";
// import Login from './components/Login/Login';
// import Orders from './components/Orders/Orders';
// import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import { DarkMode } from '@chakra-ui/react';
// import Theme from "./components/Theme/Theme";
// import { ColorModeScript } from "@chakra-ui/color-mode";



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="" element={<Login />} />
//       <Route path="Orders" element={<Orders />} />
//       <Route path="Darkmode" element={<DarkMode />} />
//     </>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//  <React.StrictMode>
//     <ChakraProvider theme={Theme}>
//       <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
//       {/* <App /> */}
//     <RouterProvider router={router} />
//     </ChakraProvider>
//   </React.StrictMode>
// );



// +++++++++++++++++++++++++++++++++🫡🫡🫡 Dont Change above code without saving below one 🥲🥲🥲+++++++++++++++++++++++++++++

import './index.css';
import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Theme from "./components/Theme/Theme";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Login />} />
      <Route path="orders" element={<Orders />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <RouterProvider router={router} />
      <ThemeToggle />
    </ChakraProvider>
  </React.StrictMode>
);
