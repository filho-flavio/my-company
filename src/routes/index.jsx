import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Departments } from "../pages/Departments";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />;
};

export const RoutesApp = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={Signin} />
            <Route path="/signup" element={Signup} />
            <Route path="/departments" element={Departments} />
            {/* Private Route */}
            <Route path="/home" element={<PrivateRoute Item={Home} />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};
