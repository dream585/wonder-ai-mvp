import React, { useState } from "react";
import axios from "../axios/server";
import { toast } from 'react-toastify';

const JobPosting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", { title, description }).then((res) => {
        toast.success('Job posted successfully!', {
          position: 'top-right',
          autoClose: 1000,
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
    <div className="container pt-6">
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
