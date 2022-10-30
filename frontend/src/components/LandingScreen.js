import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./landing.css";

AOS.init({
  duration: "2000",
});

const LandingScreen = () => {
  return (
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
          <div class="logo">
            <b>BookMyTickets</b>
          </div>
          <ul class="links">
            <li>
              <a style={{ color: "#2B65EC" }} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <Link to="/">
                <div class="button">Login </div>
              </Link>
            </li>
          </ul>
        </div>
        <div class="info">
          <h1>Recharge your Account Faster</h1>
          <p>
            "Travel changes you. As you move through this life and this world,
            you change things slightly, you leave marks behind, however small.
            And in return,life - and travel - leaves marks on you."
          </p>
          <Link to="/">
            <button href="https://github.com/vPankaja/CSSE/pull/6">
              Make Payment
            </button>
          </Link>
        </div>
        <div class="image">
          <img src="https://www.ivartravels.com/assets/images/services-bus.png" />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  );
};

export default LandingScreen;
