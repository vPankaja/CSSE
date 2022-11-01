import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../res/css/PlanTimeTable.css"

AOS.init({
      duration: '2000'
});

const Login = () => {
      return (
        <div class="landing-page">
        <div class="container">
        <div class="header-area">
        <img src={require("../res/images/logocar.png")} />{" "}
          <div
            style={{
              marginTop: "20px",
              width: "300px",
              color: "#3399FF",
              fontSize: "19px",
            }}
          ><b>BookMyTickets</b></div>
      <ul class="links">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><Link to="#"><div class="button">Register </div></Link></li>
      </ul>
      
    </div>

        <div class="register-photo">
        <div class="form-container" style={{display:"flex",boxShadow:"10px 10px #B2BEB5"}}>
            <div className='loginImg' >
                <img className='img1' src={require("../res/images/logo.png")}></img><br></br>
                <img className='img2' src={require("../res/images/connection.png")}></img><br></br>
                <img className='img3' src={require("../res/images/text.png")}></img>
            </div>
            <form method="post" style={{backgroundColor:"#E2E3EA"}}>
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong >Login to your account</strong></p>
                <div style={{marginBottom:"20px"}}>
                    <label>Email</label><br></br>
                    <input className='input2' type="email" name="email" placeholder="Email"></input></div>
                <div style={{marginBottom:"20px"}}>
                    <label>Password</label><br></br>
                    <input className='input2' type="email" name="password" placeholder="Password"></input></div>
                    <div style={{marginBottom:"20px"}} class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"></input>
                        Remember Me</label></div>
                
                <div ><button class="btn1" style={{width:"300px"}} type="submit">LOGIN</button></div>
                <div style={{marginLeft:"50px",fontSize:"14px"}}>Don't have an account? <a href="url">Sign Up</a></div>
                <div style={{marginLeft:"70px",fontSize:"14px"}}>Are you a User? <a href="url">Click here</a></div>
             </form>
        </div>
        
    </div>
    </div>
    </div>
      );
}

export default Login