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

export default function UpdateRoute() {
    const { id } = useParams();
    const [rId, setRouteId] = useState("")
    const [r, setRoute] = useState("")
    const [traffic, setTraffic] = useState("")

  const [routes,setRoutes]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8070/api/manager/getOneRoute/${id}`).then((res)=>{
        var route=res.data;

        setRoutes(route);

    }).catch((e)=>{
        console.log(e);
        console.log(id)
    })
},[])

function updateRoute(e){
    e.preventDefault();

    const editRoute={
        rId,
        r,
        traffic
    };
    axios.put(`http://localhost:8070/api/manager/updateRoute/${id}`,editRoute).then((willReg) => {
        if (willReg) {
          swal({
            title: "Success",
            text: "Route Successfully Updated",
            icon: "success",
            type: "success",
          }).then(function () {
            window.location.href = "/routelist";
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
      <li><a href='/dashboard'>Home</a></li>
        <li><a href='/managerhome'>Services</a></li>
        <li><Link to="/"><div class="button">LogOut</div></Link></li>
      </ul>
      </div>
    </div>
    <div style={{fontSize:"22px",marginBottom:"-50px",textAlign:"center",marginTop:"40px"}}>
      <strong style={{color:"darkblue"}}>Route Details</strong><br></br>
        <span style={{fontSize:"10px"}}>Reload your account without any delay to continue your journey</span></div>

        <div className="container2">
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder3"></div>
            <div className="plan1" >
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong style={{color:"darkblue"}}>Edit Route Details</strong><br></br>
                <span style={{fontSize:"11px"}}>Fill vehicle details and the cost</span></p>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiNo" placeholder="Route Id"
                defaultValue={routes.routeId}
                onChange={e => {setRouteId(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="vehiType" placeholder="Route"
                defaultValue={routes.route}
                onChange={e => {setRoute(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="driver" placeholder="Traffic Type"
                defaultValue={routes.trafficType}
                onChange={e => {setTraffic(e.target.value)}}></input></div>
                
                
                <div style={{marginLeft:"100px"}}><button class="btn1" onClick={updateRoute}>Update Route</button></div></div>
        </div>
    </div>
    </div>
    </div>
      );
}

