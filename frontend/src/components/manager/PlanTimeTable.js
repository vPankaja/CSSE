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

export default function PlanTimetable() {
  const [vehicles, setVehicles] = useState([]);

  const getAllVehicles = function () {
    axios
      .get("http://localhost:8070/api/trMnger/getAllVehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const [routes, setRoutes] = useState([]);

    const getAllRoutes = function () {
      axios
        .get("http://localhost:8070/api/manager/getAllRoutes")
        .then((res) => {
          setRoutes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getAllRoutes();
    }, []);

  const [vehiNo, setVehiNo] = useState("");
  const [vehiType, setVehiType] = useState("")
  const [routeId, setRouteId] = useState("")
  const [driver, setDriver] = useState("")
  const [inspector, setInspector] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [route, setRoute] = useState("")
  
  const getVehicle = async function () {
    axios.get(`http://localhost:8070/api/trMnger/getVehicleById/${vehiNo}`).then(res => {
        if(res.data != null) {
            console.log(res.data)
            setVehicle(res.data)
            getRoute()
        }
        else {
            showErrorPopup("Invalid Vehicle number")
            return false
        }
    }).catch(() => {
        return false
    })
}

const getRoute = async function () {
  console.log("gg")
  axios.get(`http://localhost:8070/api/trMnger/getRouteById/${routeId}`).then(res => {
      if(res.data != null) {
          setRoute(res.data)
          console.log(res.data)
          postTimetable()
      }
      else {
          showErrorPopup("Invalid Route number")
          return false
      }
  }).catch(() => {
      return false
  })
}

const showErrorPopup = function(message) {
  swal({
      title: message,
      icon: "error",
      buttons: true,
    }).then(() => {
      
    })
}

const postTimetable = function () {
  const data = {
      vehicle: vehicle,
      route: route,
      driver: driver,
      inspector: inspector,
      date: date,
      time: time
  }
  axios.post("http://localhost:8070/api/trMnger/createTimetable", data).then((res) => {
      if(res!=null) {
          swal({
              title: "Successfully added",
              icon: "success",
              buttons: true
          }).then(() => {
              window.location.href="/managerhome"
          })
      }
      else {
          showErrorPopup("Timetable creation unsuccessful")
      }
  })
}

const createTimetable = async function () {
    if(vehiNo.length==0||vehiType.length==0||routeId.length==0||driver.length==0||inspector.length==0||date.length==0||time.length==0){
        swal({
          title: "All fields must be filled",
          icon: "warning",
          buttons: true,
      })}
  else {
      getVehicle()
  }
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
      <strong style={{color:"darkblue"}}>Plan Timetable</strong><br></br>
        <span style={{fontSize:"10px"}}>Reload your account without any delay to continue your journey</span></div>

        <div className="container2">
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <div className="plan1">
                <br></br>
                <p style={{fontSize:"22px",marginBottom:"40px"}}><strong style={{color:"darkblue"}}>Fill  Details</strong><br></br>
                <span style={{fontSize:"11px"}}>Fill details and amount to pay</span></p>
                <div style={{marginBottom:"20px"}}>
                <select class="input1" style={{marginRight:"20px"}}  type="text" name="vehicleNo" placeholder="Vehicle No"
                onChange={e => {setVehiNo(e.target.value)}}>
                  <option value="" selected disabled hidden>Vehicle No</option>
                  {vehicles.filter((val) => {
                     return val;
                   }) .map((f) => {
                  return(
                  <option>{f.vehicleNo}</option>
                  )
                  })}
                </select>
                <select className='input1' type="text" name="vehicleType" placeholder="Vehicle Type"
                onChange={e => {setVehiType(e.target.value)}}>
                  <option value="" selected disabled hidden>Vehicle Type</option>
                  {vehicles.filter((val) => {
                     return val;
                   }) .map((f) => {
                  return(
                  <option>{f.vehicleType}</option>
                  )
                  })}
                  </select></div>
                <div style={{marginBottom:"20px"}}>
                <select className='input2' type="text" name="routeId" placeholder="Route Id"
                onChange={e => {setRouteId(e.target.value)}}>
                  <option value="" selected disabled hidden>Route Id</option>
                  {routes.filter((val) => {
                     return val;
                   }) .map((f) => {
                  return(
                  <option>{f.routeId}</option>
                  )
                  })}
                  </select></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="driver" placeholder="Driver"
                onChange={e => {setDriver(e.target.value)}}></input></div>
                <div style={{marginBottom:"20px"}}><input className='input2' type="text" name="inspector" placeholder="Inspector"
                onChange={e => {setInspector(e.target.value)}}></input></div>
                <div style={{marginBottom:"30px"}}><input className='input2' type="date" name="date" placeholder="Date"
                onChange={e => {setDate(e.target.value)}}></input></div>
                <div style={{marginBottom:"30px"}}><input className='input2' type="time" name="date" placeholder="Date"
                onChange={e => {setTime(e.target.value)}}></input></div>
                
                <div style={{marginLeft:"100px"}}><button class="btn1" onClick={createTimetable}>Create</button></div></div>
        </div>
    </div>
    </div>
    </div>
      );
}

