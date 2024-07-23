import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Layout from "./components/Layout";

import Home from "./components/Home";
import JobPosting from "./components/JobPosting";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/">
            <Route path="/job-posting" element={<JobPosting />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
