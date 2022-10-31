import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../res/css/PlanTimeTable.css"

AOS.init({
      duration: '2000'
});

const PlanTimeTable = () => {
      return (
        <div class="landing-page">
        <div class="container">
        <div class="header-area">
      <div class="logo"><b>BookMyTickets</b></div>
      <ul class="links">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><Link to="#"><div class="button">Logout</div></Link></li>
      </ul>
      
    </div>
    <div style={{fontSize:"22px",marginBottom:"-50px",textAlign:"center",marginTop:"40px"}}>
      <strong style={{color:"darkblue"}}>Plan Timetable</strong><br></br>
        <span style={{fontSize:"10px"}}>Reload your account without any delay to continue your journey</span></div>
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form method="post">
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong style={{color:"darkblue"}}>Fill  Details</strong><br></br>
                <span style={{fontSize:"11px"}}>Fill details and amount to pay</span></p>
                <div style={{marginBottom:"20px"}}><input class="input1" style={{marginRight:"20px"}}  type="text" name="vehicleNo" placeholder="Vehicle No"></input>
                <input className='input1' type="select" name="vehicleType" placeholder="Vehicle Type"></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="select" name="routeID" placeholder="Route ID"></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="date" name="date" placeholder="Date"></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="time" name="time" placeholder="Time"></input></div>
                <div style={{marginBottom:"30px"}}><input className='input2' type="number" name="amount" placeholder="Amount"></input></div>
                
                <div style={{marginLeft:"100px"}}><button class="btn1" type="submit">Create</button></div></form>
        </div>
    </div>
    </div>
    </div>
      );
}

export default PlanTimeTable