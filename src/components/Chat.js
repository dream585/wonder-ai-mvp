import React, {useState} from 'react';

const Chat = () => {
    return(
        <div className="container card p-3">
            <div class="row" style={{minHeight: 780}}>
            <div className="col-md-4 px-3">
                <div className="d-flex gap-2 flex-column">
                    <div className=" d-flex gap-3 bg-primary rounded-3 p-3 text-light">
                        <img width="64" className="rounded-circle" src="images/avatar3.jpg"/>
                        <div className="d-flex flex-column py-1 justify-content-between">
                            <span className="fw-bolder">Freelancer Lorem</span>
                            <p className="text-light m-0">You: Hello</p>
                        </div>
                    </div>
                    <div className=" d-flex gap-3 p-3">
                        <img width="64" className="rounded-circle" src="images/avatar1.jpg"/>
                        <div className="d-flex flex-column py-1 justify-content-between">
                            <span className="fw-bolder">Freelancer Lorem</span>
                            <p className="text-muted m-0">You: Hello</p>
                        </div>
                    </div>
                    <div className=" d-flex gap-3 p-3">
                        <img width="64" className="rounded-circle" src="images/avatar2.jpg"/>
                        <div className="d-flex flex-column py-1 justify-content-between">
                            <span className="fw-bolder">Freelancer Lorem</span>
                            <p className="text-muted m-0">You: Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="d-flex flex-column gap-3 pt-3">
                        <span className="px-4 py-2 card shadow-lg border-0 w-fit-content rounded-4 align-self-end me-3">Hello</span>
                    </div>
                    <div className="d-flex gap-2">
                        <input className="form-control" type="text" placeholder="Please Input Your Message Here!"/>
                        <button className="btn btn-primary ms-3"><i className="fa fa-paper-plane"></i> Send</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Chat