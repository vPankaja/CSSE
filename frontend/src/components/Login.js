import React, {useEffect, useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../res/css/customer.css"

AOS.init({
      duration: '2000'
});

const Login = () => {
  const [uname, setUname] = useState("");
  const [pwrd, setPwrd] = useState("");

  function loginUser(e) {
    e.preventDefault();
        if(uname.length==0||pwrd.length==0){
          swal({
            title: "All fields must be filled",
            icon: "warning",
            buttons: true,
        })
        }else{
            
        
    const data = { 
      username: uname
    }
    axios.post("http://localhost:8070/api/user/login", data).then((res) => {
      if(!res.data){
        swal({
          title: "Invalid Email",
          icon: "error",
          buttons: true,
        })
      }
      else if(res.data.password != pwrd) {
        swal({
          title: "Invalid Password",
          icon: "error",
          buttons: true,
        })
        
      }
      else {
        swal({
          title: "Success",
          text: "Login Successful",
          icon: "success",
          type: "success",
        }).then(() => {
          window.location.href = "/customerhome";
        })
      }
    })
  }
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
        <li><Link to="/register"><div class="button">Register </div></Link></li>
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
            <form method="post" style={{backgroundColor:"#E2E3EA"}}>
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong >Login to your account</strong></p>
                <div style={{marginBottom:"20px"}}>
                    <label>Email</label><br></br>
                    <input className='input2' type="email" name="email" placeholder="Email" onChange={e => {setUname(e.target.value)}}/></div>
                <div style={{marginBottom:"20px"}}>
                    <label>Password</label><br></br>
                    <input className='input2' type="password" name="password" placeholder="Password"onChange={e => {
                        setPwrd(e.target.value)
                      }}
                    /></div>
                    <div style={{marginBottom:"20px"}} class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"></input>
                        Remember Me</label></div>
                
                <div ><button class="btn1" style={{width:"300px"}} type="submit" onClick={loginUser}>LOGIN</button></div>
                <div style={{marginLeft:"50px",fontSize:"14px"}}>Don't have an account? <a href="/register">Sign Up</a></div>
                <div style={{marginLeft:"70px",fontSize:"14px"}}>Are you a User? <a href="url">Click here</a></div>
             </form>
        </div>
        
    </div>
    </div>
    </div>
      );
}

export default Login