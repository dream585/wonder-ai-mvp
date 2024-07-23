import React, { useState } from "react";
import axios from "../axios/server";
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("/login", { email, password })
        .then((res) => {
          toast.success('Logged In Successfully', {
            position: 'top-right',
            autoClose: 1000,
            onClose: () => {
              navigate('/profile'); // Redirect to the home page after toast closes
            }
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data, {
            position: 'top-right',
            autoClose: 1000
          });
        });
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 1000
      });
    }
  };
  return (
    <section className="auth-container">
    <div className="container pt-6">
      <div className="card shadow-lg border-0 w-50 mx-auto mt-6 p-4">
        <div className="card-body">
          <h2 className="mx-auto text-center">L O G O</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mt-3">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-4 mx-2">
              <a href="/register">Don't you have account?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-2 w-100 fw-bolder">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Login;
