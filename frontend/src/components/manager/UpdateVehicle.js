import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../res/css/customer.css"
import "../../res/css/plantimetable.css"
import { useParams } from "react-router-dom";

AOS.init({
      duration: '2000'
});

export default function UpdateVehicle() {
    const { id } = useParams();
  const [vehiNo, setVehiNo] = useState("")
  const [vehiType, setVehiType] = useState("")
  const [driver, setDriver] = useState("")
  const [cost, setCost] = useState(0)

  const [vehicles,setVehicle]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8070/api/manager/getOneVehicle/${id}`).then((res)=>{
        var vehicle=res.data;

        setVehicle(vehicle);

    }).catch((e)=>{
        console.log(e);
        console.log(id)
    })
},[])

function updateVehicle(e){
    e.preventDefault();

    const editVehicle={
        vehiNo,
        vehiType,
        driver,
        cost
    };
    axios.put(`http://localhost:8070/api/manager/updateVehicle/${id}`,editVehicle).then((willReg) => {
        if (willReg) {
          swal({
            title: "Success",
            text: "Vehicle Successfully Updated",
            icon: "success",
            type: "success",
          }).then(function () {
            window.location.href = "/vehiclelist";
          });
        } else {
          swal("Update Failed!");
        }
      });

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
        <li><a href='#'>Home</a></li>
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
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiNo" 
                defaultValue={vehicles.vehicleNo}
                onChange={(e)=>{
                    setVehiNo(e.target.value)
                }}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiType" 
                defaultValue={vehicles.vehicleType}
                onChange={(e)=>{
                    setVehiType(e.target.value)
                }}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="driver" 
                defaultValue={vehicles.driverName}
                onChange={(e)=>{
                    setDriver(e.target.value)
                }}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="number" name="cost" 
                defaultValue={vehicles.cost}
                onChange={(e)=>{
                    setCost(e.target.value)
                }}></input></div>
                
                <div style={{marginLeft:"100px"}}><button class="btn1" onClick={updateVehicle}>Update Vehicle</button></div></div>
        </div>
    </div>
    </div>
    </div>
      );
}

