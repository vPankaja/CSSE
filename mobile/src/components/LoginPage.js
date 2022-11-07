import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../res/css/login.css";

export default function LoginPage() {
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
          window.location.href = "/home";
        })
      }
    })
  }
  }

  return (
    <>
      <section class="vh-100" style={{backgroundColor:'#000080',fontStyle:"italic"}}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">
              <div class="px-5 ms-xl-4">
                <div
                  class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{color: '#709085'}}
                ></div>
                {/* <img src="../res/images/logo5.png" /> */}
              </div>

              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{width: '23rem'}}>
                  <h1 class="fw-normal mb-3 pb-3 " style={{color:"#FFFFFF",fontSize:"40px"}} >
                    Welcome<br></br>Back
                  </h1>

                  <div class="form-outline mb-4">
                    <input
                      placeholder="Email Address"
                      type="email"
                      id="form2Example18"
                      class="form-control form-control-lg"
                      onChange={e => {
                        setUname(e.target.value)
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      placeholder="Password"
                      type="password"
                      id="form2Example28"
                      class="form-control form-control-lg"
                      onChange={e => {
                        setPwrd(e.target.value)
                      }}
                    />
                  </div>

                  <p class="small mb-5 pb-lg-2" style={{textAlign:"right",marginTop:"-15px",fontSize:"14px"}}>
                    <a class="text-muted" href="#!" style={{textDecoration:"none"}} >
                      <span style={{color:"#FFFFFF"}}>Forgot Password</span>
                    </a>
                  </p>
                  <p class="small mb-5 pb-lg-2" style={{textAlign:"right",marginTop:"-50px", fontSize:"14px"}}>
                    <a class="text-muted" href="#!" style={{textDecoration:"none"}}>
                      <span style={{color:"#FFFFFF"}}>Sign Up</span>
                    </a>
                  </p>
                  <div class="pt-1 mb-4" style={{textAlign:"center",marginTop:"-40px"}}>
                    <button class="arrow" type="button" onClick={loginUser}>
                      
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={require("../res/images/loginPic.jpeg")}
                alt="Login image"
                class="w-100 vh-100"
                
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
