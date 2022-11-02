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

export default function AddVehicle() {
  const [vehiNo, setVehiNo] = useState("")
  const [vehiType, setVehiType] = useState("")
  const [driver, setDriver] = useState("")
  const [cost, setCost] = useState(0)

  const postVehicle = function () {
    if(vehiNo.length==0||vehiType.length==0||driver.length==0||cost.length==0){
      swal({
        title: "All fields must be filled",
        icon: "warning",
        buttons: true,
    })
      }
      else {
          const data = {
              vehicleNo: vehiNo,
              driverName: driver,
              vehicleType: vehiType,
              cost: cost
          }
          axios.post("http://localhost:8070/api/trMnger/postVehicle", data).then((res) => {
              swal({
                  title: "Successfully added",
                  icon: "success",
                  buttons: true
              }).then(() => {
                  window.location.href="/vehicleList"
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
            <div class="image-holder2"></div>
            <div className="plan1" >
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong style={{color:"darkblue"}}>Fill  Details</strong><br></br>
                <span style={{fontSize:"11px"}}>Fill vehicle details and the cost</span></p>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiNo" placeholder="Vehicle No"
                onChange={e => {setVehiNo(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiType" placeholder="Vehicle Type"
                onChange={e => {setVehiType(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="driver" placeholder="Driver"
                onChange={e => {setDriver(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="number" name="cost" placeholder="Cost"
                onChange={e => {setCost(e.target.value)}}></input></div>
                
                <div style={{marginLeft:"100px"}}><button class="btn1" onClick={postVehicle}>Add Vehicle</button></div></div>
        </div>
    </div>
    </div>
    </div>
      );
}

