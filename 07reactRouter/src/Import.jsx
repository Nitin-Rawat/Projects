// imports.js
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./index.css";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
// import { githubInfoLoader } from "./components/Github/Github.jsx";

export {
  ReactDOM,
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  App,
  Home,
  About,
  Contact,
  User,
  Github,
};
