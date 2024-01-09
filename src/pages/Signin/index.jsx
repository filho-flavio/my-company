import React, { useState } from "react";
import "./index.css"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

export const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // if there is some error it should appear on display, the state will update it
  const [error, setError] = useState("");

  const handleLogin = () => {
    // check if email and password are not empty
    if (!email | !password) {
      setError("All fields must be completed!");
      return;
    }

    // send request to server with user's data
    const res = signin(email, password);

    if (res) {
      // if it returns something, so print the error
      setError(res);
      return;
    }

    navigate("/home");
  }

  return (
    <>
      <div className="container">
        <div className="content">

          <div className="box-1">
            <h1>Sign in</h1>
            <p>Sign in and start managing your account.</p>
          </div>

          <div className="box-2">

            <Input value={email} type={"email"} textPlaceholder={"Login"} onChange={(e) => [setEmail(e.target.value), setError("")]} />

            <Input value={password} type={"password"} textPlaceholder={"Password"} onChange={(e) => [setPassword(e.target.value), setError("")]} />

          </div>

          <div className="box-3">
            <div className="box-3-1">
              <Link id="signup" to="/signup">
                Sign up?
              </Link>
            </div>
            <div className="box-3-2">
              <a href="#" id="forgot-pasword">Forgot password?</a>
            </div>
          </div>

          <div className="box-4">
            <label htmlFor="">{error}</label>
            <Button text={"Log in"} onClick={handleLogin} />
          </div>

        </div>
      </div>
    </>
  );
};
