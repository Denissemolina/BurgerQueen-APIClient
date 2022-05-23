import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import AdminDashboard from "./views/Admin/AdminDashboard";
import WaiterDashboard from "./views/Waiter/WaiterDashboard";
import Order from "./views/Waiter/Order";
import PreparingOrder from "./views/Waiter/Preparing";
import ChefDashboard from "./views/Chef/ChefDashboard";
import Employees from "./views/Admin/adminComponents/Employees";
import Products from "./views/Admin/adminComponents/Products";
import Home from "./views/Login/Home";
import Role from "./components/Role";
import { AuthProvider, useAuth } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

const Paths = () => {
  const { user, roles } = useAuth();
  // const elementHome = () => {
  //   if (<Role /> === "Chef") {
  //     return <ChefDashboard></ChefDashboard>;
  //   } else if (<Role /> === "Manager") {
  //     return <AdminDashboard></AdminDashboard>;
  //   } else if (<Role /> === "Waiter/waitress") {
  //     return <WaiterDashboard></WaiterDashboard>;
  //   }
  // };
  console.log(user);
  console.log(roles);
  return (
    <div className="App">
      <p>{user.displayName + " and " + roles}</p>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/waiter-dashboard"
          element={
            <ProtectedRoute>
              <WaiterDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/preparing-order" element={<PreparingOrder />} />
        <Route
          path="/chef-dashboard"
          element={
            <ProtectedRoute>
              <ChefDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Paths;

/// uid: 123d!@Dew123
/// email: nami@
/// rol:  admin
/// constrase;a: admin si
