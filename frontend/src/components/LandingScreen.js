import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import './landing.css'

AOS.init({
      duration: '2000'
});

const LandingScreen = () => {
      return (
        <div class="landing-page">
  <div class="container">
    <div class="header-area">
      <div class="logo">Your <b>Website</b></div>
      <ul class="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Info</li>
        <li>Get Started</li>
      </ul>
    </div>
    <div class="info">
      <h1>Looking For Inspiration</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
      <button>Button name</button>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
            // <div className="">
            //       <div className="landing row justify-content-center text-center bg-image">
            //             <div className="col-md-9 my-auto" style={{ borderRight: '8px solid white' }}>
            //                   <h2 style={{ color: "white",fontSize: "130px" }} data-aos='zoom-in'>Carlton Hotel</h2>
            //                   <h1 style={{ color: "white" }} data-aos='zoom-out' >“We present to you the number one premier hotel in Sri Lanka.</h1>
            //                   <Link to="/rooms">
            //                         <button button type="button" class="btn btn-success">Get Started</button>
            //                   </Link>
            //             </div>



            //       </div>

            // </div>
      );
}

export default LandingScreen