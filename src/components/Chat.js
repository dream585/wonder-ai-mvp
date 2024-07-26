import React, { useState, useRef, useEffect } from "react";
import axios from "../axios/server";

const env = process.env.NODE_ENV || "production";



const Chat = () => {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([]);

  const inputRef = useRef(null);
  const sendMessage = () => {
   
    if (inputRef.current) {
        const message = inputRef.current.value.trim();
        axios.post('/message', {
            from_email: localStorage.getItem('from_email'),
            to_email: localStorage.getItem('to_email'),
            content: message
        }).then((res) => {
          setInput('');
        })
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.post('/messages',{
          from_email: localStorage.getItem('from_email'),
          to_email: localStorage.getItem('to_email')
      });
      let responseMessages = [];
      response.data.forEach( data => {
        responseMessages.push({
          message: data.message,
          from_me: data.from_email === localStorage.getItem('from_email')
        })
      });
      console.log(responseMessages)
      setMessages(responseMessages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 3000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const toEmail = localStorage.getItem('to_email') === null ? 'user1@test.com' : localStorage.getItem('to_email');
  const userRole =
    localStorage.getItem("from_email") === "client@test.com"
      ? "client"
      : "freelancer";
      userRole === 'client' ? localStorage.setItem('to_email', toEmail) : localStorage.setItem('to_email', 'client@test.com');
  return (
    <div className="container card p-3">
      <div className="row" style={{ minHeight: 780 }}>
        <div className="col-md-4 px-3">
          <div className="d-flex gap-2 flex-column">
            {userRole === "client" ? (
              <>
                <div 
                  className={localStorage.getItem('to_email') === 'user1@test.com' ? "d-flex gap-3 bg-primary rounded-3 p-3 text-light" : "d-flex gap-3 p-3"}
                  onClick={() => {localStorage.setItem('to_email', 'user1@test.com')}}
                  >
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar3.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="m-0">user1@test.com</p>
                  </div>
                </div>
                <div 
                  className={localStorage.getItem('to_email') === 'user2@test.com' ? "d-flex gap-3 bg-primary rounded-3 p-3 text-light" : "d-flex gap-3 p-3"}
                  onClick={() => {localStorage.setItem('to_email', 'user2@test.com')}}
                  >
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar1.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="m-0">user2@test.com</p>
                  </div>
                </div>
                <div 
                  className={localStorage.getItem('to_email') === 'user3@test.com' ? "d-flex gap-3 bg-primary rounded-3 p-3 text-light" : "d-flex gap-3 p-3"}
                  onClick={() => {localStorage.setItem('to_email', 'user3@test.com')}}
                  >
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar2.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="m-0">user3@test.com</p>
                  </div>
                </div>
              </>
            ) : (
              <>
              <div 
                  className={localStorage.getItem('to_email') === 'client@test.com' ? "d-flex gap-3 bg-primary rounded-3 p-3 text-light" : "d-flex gap-3 p-3"}
                  onClick={() => {localStorage.setItem('to_email', 'client@test.com')}}
                  >
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar4.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Client Lorem</span>
                    <p className="m-0">client@test.com</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column gap-3 pt-3">
              {
                messages.map(message => {
                  return message.from_me ? (
                    <span className="px-4 py-2 card shadow-lg border-0 w-fit-content rounded-4 align-self-end me-3">
                    {message.message}
                  </span>
                  ):(
                    <span className="px-4 py-2 card shadow-lg border-0 w-fit-content rounded-4 align-self-start me-3">
                      {message.message}
                    </span>
                  )
                })
              }
            </div>
            <div className="d-flex gap-2">
              <input
                className="form-control"
                ref={inputRef}
                type="text"
                placeholder="Please Input Your Message Here!"
                value = {input}
                onChange={e => {setInput(e.target.value)}}
                />
              <button className="btn btn-primary ms-3" onClick={() => sendMessage()}>
                <i className="fa fa-paper-plane"></i> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
