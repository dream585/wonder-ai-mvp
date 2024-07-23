import React from "react";

const Home = () => {
  return (
    <header class="header position-relative overflow-hidden">
      <img
        src="images/decoration-star.svg"
        alt=""
        class="decoration-star position-absolute"
      />
      <img
        src="images/decoration-star.svg"
        alt=""
        class="decoration-star-2 position-absolute"
      />
      <div class="container position-relative z-3">
        <div class="row">
          <div class="col-lg-6">
            <div class="mt-6 pt-6">
              <h1 class="xl-text">
                Welcome <span class="text-primary">Wonder</span> AI
              </h1>
              <p class="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/login" class="btn btn-primary btn-lg m-2">
                Login
              </a>
              <a href="/register" class="btn btn-outline-secondary btn-lg m-2">
                Signup
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
