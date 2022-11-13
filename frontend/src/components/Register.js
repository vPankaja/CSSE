import React, {useEffect, useState} from 'react'
import AOS from 'aos';
import axios from 'axios';
import swal from 'sweetalert';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../res/css/customer.css"

AOS.init({
      duration: '2000'
});

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [type, settype] = useState("passenger");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();
    
        const newUser = {
          name,
          email,
          phoneNumber,
          type,
          password,

        };
    
        axios
          .post("http://localhost:8070/api/user/register", newUser)
          .then((willReg) => {
            if (willReg) {
              swal({
                title: "Success",
                text: "User Successfully Registered",
                icon: "success",
                type: "success",
              }).then(function () {
                window.location.href = "/customerhome";
              });
            } else {
              swal("User Registeration Failed!");
            }
          });
      }

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
        <li><a href='/dashboard'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='/customerhome'>Services</a></li>
        <li><Link to="/login"><div class="button">Login </div></Link></li>
      </ul>
      
    </div></div>
    <div className="container2">
        <div class="register-photo">
        <div class="form-container" style={{display:"flex",boxShadow:"10px 10px #B2BEB5"}}>
            <div className='loginImg' >
                <img className='img1' src={require("../res/images/logo.png")}></img><br></br>
                <img className='img2' src={require("../res/images/connection.png")}></img><br></br>
                <img className='img3' src={require("../res/images/text.png")}></img>
            </div>
            <form method="post" style={{backgroundColor:"#E2E3EA"}} onSubmit={sendData}>
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong >Create Your Account Now</strong></p>
                <div style={{marginBottom:"20px"}}>
                    <label>Name</label><br></br>
                    <input className='input2' type="text" name="name" placeholder="Name"onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                /></div>
                <div style={{marginBottom:"20px"}}>
                    <label>Email</label><br></br>
                    <input className='input2' type="email" name="email" placeholder="Email"onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                /></div>
                <div style={{marginBottom:"20px"}}>
                    <label>Phone Number</label><br></br>
                    <input className='input2' type="number" name="phoneno" placeholder="Phone No"onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                /></div>
                <div style={{marginBottom:"20px"}}>
                    <label>Password</label><br></br>
                    <input className='input2' type="Password" name="password" placeholder="Password"onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                /></div>

                <div ><button class="btn1" style={{width:"300px"}} type="submit" >Register</button></div>
                <div style={{marginLeft:"50px",fontSize:"14px"}}>Already have an account? <a href="url">Sign In</a></div>
             </form>
        </div>
        
    </div>
    </div>
    </div>
      );
}

export default Register