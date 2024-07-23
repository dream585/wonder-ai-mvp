import React, { useState } from "react";
import axios from "../axios/server";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const JobPosting = () => {
  const [title, setTitle] = useState("Web Developer");
  const [description, setDescription] = useState("I want to hire talented web developer who can work on my mvp. You will be able to get a chance a good job. I am look forward to hearing from you.");
 
  const navigate = useNavigate();

  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", { title, description }).then((res) => {
        toast.success('Job posted successfully!', {
          position: 'top-right',
          autoClose: 1000,
          onClose: () => {
            navigate('/job-list')
          }
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: 'top-right',
          autoClose: 1000
        });
      });;
    } catch (error) {
      toast.error(error.response.data, {
        position: 'top-right',
        autoClose: 1000
      });
    }
  };
  return (
    <div className="container">
      <div className="card border-0 shadow-lg mt-6 p-3">
        <div className="card-body">
          <h2>Post a Job</h2>
          <form onSubmit={handlePostJob}>
            <div className="form-group mt-3">
              <label>Job Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Job Description:</label>
              <textarea
                className="form-control"
                rows={10}
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100 fw-bolder">
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default JobPosting;
