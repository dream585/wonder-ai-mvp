import React, { useState } from "react";
import axios from "../api";
const Profile = () => {
  const [profile, setProfile] = useState("");
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
    <div className="container">
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label>Profile:</label>
          <textarea
            className="form-control"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};
export default Profile;
