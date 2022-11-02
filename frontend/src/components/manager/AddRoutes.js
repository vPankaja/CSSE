import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../res/css/customer.css"
import "../../res/css/plantimetable.css"

AOS.init({
      duration: '2000'
});

export default function AddRoutes() {
  const [rId, setRouteId] = useState("")
  const [r, setRoute] = useState("")
  const [traffic, setTraffic] = useState("")

  const postRoutes = function () {
    if(rId.length==0||r.length==0||traffic.length==0){
      swal({
        title: "All fields must be filled",
        icon: "warning",
        buttons: true,
    })
      }
      else {
          const data = {
              routeId: rId,
              route: r,
              trafficType: traffic,
          }
          axios.post("http://localhost:8070/api/manager/postRoutes", data).then((res) => {
              swal({
                  title: "Successfully added",
                  icon: "success",
                  buttons: true
              }).then(() => {
                  window.location.href="/routeList"
              })
          })
      }
  }

  const showErrorPopup = function(message) {
      swal({
          title: message,
          icon: "error",
          buttons: true,
        }).then(() => {
          
        })
  }

      return (
        <div class="landing-page">
        <div class="container">
        <div class="header-area">
        <img src={require("../../res/images/logocar.png")} />{" "}
          <div
            style={{
              marginTop: "20px",
              width: "300px",
              color: "#3399FF",
              fontSize: "19px",
            }}
          ><b>BookMyTickets</b></div>
      <ul class="links">
        <li><a href='/managerhome'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><Link to="/dashboard"><div class="button">Logout</div></Link></li>
      </ul>
      </div>
    </div>
    <div style={{fontSize:"22px",marginBottom:"-50px",textAlign:"center",marginTop:"40px"}}>
      <strong style={{color:"darkblue"}}>Add Vehicle</strong><br></br>
        <span style={{fontSize:"10px"}}>Reload your account without any delay to continue your journey</span></div>

        <div className="container2">
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder3"></div>
            <div className="plan1" >
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong style={{color:"darkblue"}}>Fill  Details</strong><br></br>
                <span style={{fontSize:"11px"}}>Fill vehicle details and the cost</span></p>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiNo" placeholder="Route Id"
                onChange={e => {setRouteId(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiType" placeholder="Route"
                onChange={e => {setRoute(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="driver" placeholder="Traffic Type"
                onChange={e => {setTraffic(e.target.value)}}></input></div>
                
                
                <div style={{marginLeft:"100px"}}><button class="btn1" onClick={postRoutes}>Add Route</button></div></div>
        </div>
    </div>
    </div>
    </div>
      );
}

