import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const JobList = () => {
    const navigate = useNavigate();

    const handleChatRequest = async (toEmail) => {
        localStorage.setItem('to_email', toEmail);
        navigate('/chat');
      };
  return (
    <div className="container">
      <h2>My Jobs</h2>
      <div className="card border-0 shadow-lg mt-4 p-3">
        <div className="card-body">
            <div className="d-flex flex-column">
                <h3>Web Developer</h3>
                <p className="p-2">I want to hire talented web developer who can work on my mvp. You will be able to get a chance a good job. I am look forward to hearing from you.</p>
                <h6>Recommended Freelancers</h6>
            </div>
            <div className="d-flex gap-5">
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar1.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                            <a href="#" onClick={handleChatRequest('user1@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar2.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                            <a href="#" onClick={handleChatRequest('user2@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar3.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                            <a href="#" onClick={handleChatRequest('user3@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="card border-0 shadow-lg mt-4 p-3">
        <div className="card-body">
            <div className="d-flex flex-column">
                <h3>Machine Learning Expert</h3>
                <p className="p-2">I want to hire talented web developer who can work on my mvp. You will be able to get a chance a good job. I am look forward to hearing from you.</p>
                <h6>Recommended Freelancers</h6>
            </div>
            <div className="d-flex gap-5">
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar3.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                            <a href="#" onClick={handleChatRequest('user1@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar1.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                        <a href="#" onClick={handleChatRequest('user2@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
                <div className=" d-flex gap-3">
                    <img width="64" className="rounded-circle" src="images/avatar2.jpg"/>
                    <div className="d-flex flex-column py-1 justify-content-between">
                        <span className="fw-bolder">Freelancer Lorem</span>
                        <div className="d-flex gap-2">
                        <a href="#" onClick={handleChatRequest('user3@happy.com')}>Chat Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
