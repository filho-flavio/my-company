import React, { Fragment, useState } from "react";
import "./routes.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
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

const PrivateRoute = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />;
};

export const RoutesApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideba = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>
        <Fragment>
          {isOpen ? (
            <Sidebar closeSidebar={toggleSideba} />
          ) : (
            <OpenSidebar openSidebar={toggleSideba} />
          )}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/users" element={<Users />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* Private Route */}
            <Route exact path="/home" element={<PrivateRoute Item={Home} />} />
            <Route path="*" element={"/"} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};
