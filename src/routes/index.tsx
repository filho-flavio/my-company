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

const PrivateRoute = ({ element }) => {
  const signed = true;

  return signed ? element : <Navigate to="/signin" />;
};

export const RoutesApp = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* Private Route */}
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};
