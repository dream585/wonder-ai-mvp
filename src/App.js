import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GuestLayout from "./components/layouts/GuestLayout";
import ClientLayout from "./components/layouts/ClientLayout";
import FreelancerLayout from "./components/layouts/FreelancerLayout";
import LogoLayout from "./components/layouts/LogoLayout";

import Home from "./components/Home";
import JobPosting from "./components/JobPosting";
import JobList from "./components/JobList";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Chat from "./components/Chat";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/">
            <Route path="/" element={<ClientLayout />}>
              <Route path="/job-posting" element={<JobPosting />} />
              <Route path="/job-list" element={<JobList />} />
            </Route>
            <Route path="/" element={<FreelancerLayout />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/" element={<LogoLayout />}>
              <Route path="/chat" element={<Chat />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
