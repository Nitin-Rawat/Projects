// import React from 'react'
// import Orders from './components/Orders/Orders';
// import Login from './components/Login/Login';
// import { Outlet } from "react-router-dom";
// import ThemeToggle from "./components/ThemeToggle/ThemeToggle";


// function App() {
//   const isAuthenticated = localStorage.getItem("auth") === "true";

//   return (
//     <>
//       <ThemeToggle />
//       <Login />
//       {isAuthenticated && <Outlet />}
//       {isAuthenticated && <Orders />}
//     </>
//   );
// }


// export default App


// import * as React from "react";
// import { Outlet, Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const isAuthenticated = localStorage.getItem("auth") === "true";

//   return isAuthenticated ? children : <Navigate to="/" />;
// }

// function App() {
//   return (
//     <RouterProvider router={router}>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="orders"
//           element={
//             <ProtectedRoute>
//               <Orders />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </RouterProvider>
//   );
// }

// export default App;

// +++++++++++++++++++++++++++++++++🫡🫡🫡 Dont Change above code without saving below one 🥲🥲🥲+++++++++++++++++++++++++++++


import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <Outlet />
    </div>
  );
};

export default App;
