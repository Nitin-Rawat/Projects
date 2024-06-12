
import {
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
  Github
  
} from "./Import";



// First Method
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);



// Second method.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
      
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode></React.StrictMode> // Not working
  <RouterProvider router={router} />
);
