import React, { useState } from "react";
import axios from "../api";
const JobPosting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", { title, description });
      alert("Job posted successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <h2>Post a Job</h2>
      <form onSubmit={handlePostJob}>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};
export default JobPosting;
