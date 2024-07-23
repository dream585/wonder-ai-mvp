import React, { useState } from "react";
import axios from "../axios/api";

const Profile = () => {
  const [profile, setProfile] = useState(
    "John Doe is a software engineer with 5 years of experience in web development. He is skilled in JavaScript, React, and Node.js. He has a keen interest in AI and machine learning."
  );
  const [prediction, setPrediction] = useState(null);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/predict", { profile });
      setPrediction(response.data.prediction);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container pt-6">
      <div className="card border-0 shadow-lg p-3">
        <div className="card-body">
          <h2>Update Profile</h2>
          <form onSubmit={handleUpdateProfile}>
            <div className="form-group">
              <label className="form-label fw-bolder">Profile:</label>
              <textarea
                className="form-control"
                rows={10}
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-3 p-2">
              {prediction && <p>Prediction: {prediction}</p>}
            </div>

            <button type="submit" className="btn btn-primary mt-1">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
