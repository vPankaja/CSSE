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
      <div class="logo"><b>BookMyTickets</b></div>
      <ul class="links">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><Link to="#"><div class="button">Login </div></Link></li>
      </ul>
      
    </div>
    <div class="info">
      <h1>Recharge your Account Faster</h1>
      <p>"Travel changes you. As you move through this life and this world, you change things slightly, you leave marks behind, however small. And in return,life - and travel - leaves marks on you."</p>
      <Link to="#">
        <button href='https://github.com/vPankaja/CSSE/pull/6'>Make Payment</button>
        </Link>
    </div>
    <div class="image">
      <img src="https://www.ivartravels.com/assets/images/services-bus.png"/>
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