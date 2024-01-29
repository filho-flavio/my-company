import React, { useEffect, useState } from "react";
import "./routes.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet
} from "react-router-dom";
import { Home } from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Departments from "../pages/Departments";
import Statistics from "../pages/Statistics/Statistics";
import Calendar from "../pages/Calendar/Calendar";
import { Users } from "../pages/Users";
import { useAuth } from "../hooks/useAuth";
import { OpenSidebar, Sidebar } from "../components/Sidebar/Sidebar";
import Employees from "../pages/Employees/Employees";

const PrivateRoute = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Navigate to="/signin" />;
};

const RoutesApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

  }, [])

  return (
    <>
      <Router>
        {isOpen ? (
          <Sidebar closeSidebar={toggleSidebar} />
        ) : (
          <OpenSidebar openSidebar={toggleSidebar} />
        )}
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Private Routes */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/departments/employees" element={<Employees />} />
          <Route
            path="/home"
            element={<PrivateRoute Item={Home} />}
          />
          {/* Redirect any unknown route to the home page */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesApp;