import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const env = process.env.NODE_ENV || "production";

let ENDPOINT = "https://wonder-ai-mvp-server.onrender.com";

if (env === "production") {
  ENDPOINT = "https://wonder-ai-mvp-server.onrender.com";
} else {
  ENDPOINT = "http://localhost:4000";
}

const Chat = () => {
  const [messages, setMessages] = useState(['']);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = (input) => {
    if (input.trim()) {
      const socket = socketIOClient(ENDPOINT);
      socket.emit("chat message", input);
      setInput("");
    }
  };

  const userRole =
    localStorage.getItem("from_email") === "client@test.com"
      ? "client"
      : "freelancer";

  return (
    <div className="container card p-3">
      <div class="row" style={{ minHeight: 780 }}>
        <div className="col-md-4 px-3">
          <div className="d-flex gap-2 flex-column">
            {userRole === "client" ? (
              <>
                <div className="d-flex gap-3 bg-primary rounded-3 p-3 text-light">
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar3.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="text-light m-0">user1@happy.com</p>
                  </div>
                </div>
                <div className="d-flex gap-3 p-3">
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar1.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="m-0">user2@happy.com</p>
                  </div>
                </div>
                <div className="d-flex gap-3 p-3">
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar2.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Freelancer Lorem</span>
                    <p className="m-0">user3@happy.com</p>
                  </div>
                </div>
              </>
            ) : (
              <>
              <div className="d-flex gap-3 bg-primary rounded-3 p-3 text-light">
                  <img
                    width="64"
                    className="rounded-circle"
                    src="images/avatar4.jpg"
                  />
                  <div className="d-flex flex-column py-1 justify-content-between">
                    <span className="fw-bolder">Client Lorem</span>
                    <p className="m-0">client@happy.com</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column gap-3 pt-3">
              <span className="px-4 py-2 card shadow-lg border-0 w-fit-content rounded-4 align-self-end me-3">
                Hello
              </span>
            </div>
            <div className="d-flex gap-2">
              <input
                className="form-control"
                type="text"
                placeholder="Please Input Your Message Here!"
                onInput={e => {setInput(e.target.value)}}
              />
              <button className="btn btn-primary ms-3" onClick={sendMessage(input)}>
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
