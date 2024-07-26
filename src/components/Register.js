import React, { useState } from "react";
import axios from "../axios/server";
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      axios.post("/register", { email, password }).then((res) => {
        localStorage.setItem('from_email', res.data.email);
        toast.success('User registered successfully!', {
            position: 'top-right',
            autoClose: 1000,
            onClose: () => {
              if(res.data.email === 'client@test.com'){
                navigate('/job-posting');
              }
              else{
                navigate('/profile');
              }
            }
          });
      }).catch(error => {
        toast.error(error.message, {
            position: 'top-right',
            autoClose: 1000
          });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="auth-container">
      <div className="container pt-6">
        <div className="card shadow-lg border-0 w-50 mx-auto mt-6 p-4">
          <div className="card-body">
            <h2 className="mx-auto text-center">L O G O</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-4 mx-2">
                <a href="/login">Already have account?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2 fw-bolder">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
