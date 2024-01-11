import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup () {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !password | !emailConf) {
            setError("All fields must be completed!");
            return;
        } else if (email !== emailConf) {
            setError("E-mails doesn't equals!");
            return;
        }

        const res = signup(email, password);

        if (res) {
            setError(res);
            return;
        }

        alert("User was registered!");
        navigate("/");
    }

    return (
        <>
            <div className="container-signup">
                <div className="content-signup">

                    <div className="box-1-signup">
                        <h1>Sign in</h1>
                        <p>Sign up and start managing your account.</p>
                    </div>

                    <div className="box-2-signup">

                        <Input value={email} type={"email"} textPlaceholder={"E-mail"} onChange={(e) => [setEmail(e.target.value), setError("")]} />

                        <Input value={emailConf} type={"email"} textPlaceholder={"Confirm e-mail"} onChange={(e) => [setEmailConf(e.target.value), setError("")]} />

                        <Input value={password} type={"password"} textPlaceholder={"Create a password"} onChange={(e) => [setPassword(e.target.value), setError("")]} />

                    </div>

                    <div className="box-3-signup">
                        <label htmlFor="">{error}</label>
                        <Button text={"Sign up"} onClick={handleSignup} />
                    </div>

                </div>
            </div>
        </>
    )
}