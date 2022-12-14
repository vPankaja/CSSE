import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const LandingScreen = () => {
  return (
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
        <img  src={require("../res/images/logocar.png")}/> 
        <div style={{  marginTop:'20px', width:'300px', color: '#3399FF',fontSize:'19px'}}>   
            <b>BookMyTickets</b>
          </div>
          <ul class="links">
            <li>
              <a style={{ color: "#2B65EC" }} href="/dashboard">
                Home
              </a>
            </li>
            <li>
              <a href="/managerhome">Services</a>
            </li>
            <li>
              <Link to="/">
                <div class="button">LogOut </div>
              </Link>
            </li>
          </ul>
        </div></div>
        <div className="container2">
        <div class="info">
          <h1>Manage Your Work</h1>
          <p>
            "Travel changes you. As you move through this life and this world,
            you change things slightly, you leave marks behind, however small.
            And in return,life - and travel - leaves marks on you."
          </p>
          <Link to="/reloadaccount">
            <button>
              Continue 
            </button>
          </Link>
        </div>
        <img style={{width: '620px', height: '400px', float:'right', marginTop:'-190px', marginRight:'50px'}}
          src={require("../res/images/Landing.png")}/>
        
        <div class="clearfix"></div>
      </div>
    
    </div>
  );
};

export default LandingScreen;
