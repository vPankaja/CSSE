import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../res/css/customer.css"

AOS.init({
      duration: '2000'
});

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    const deleteVehicle=(id) =>{   
      swal({
          title: "Are you sure?",
          text: "The Vehicle Will be deleted ",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios.delete(`http://localhost:8070/api/manager/deleteVehicle/${id}`).then(() => {
              if (willDelete) {
                swal({
                  title: "The Vcehicle has been deleted!",
                  text: "You can Continue with Remaining vehicles.",
                  icon: "success",
                  type: "success",
                }).then(function () {
                  window.location.href = "/vehiclelist";
                });
              } else {
                swal("Request Is Not Cancled");
              }
            });
          }
        });
  
      }

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
      
    </div></div>
    <div style={{fontSize:"22px",marginBottom:"-100px",textAlign:"center",marginTop:"40px"}}>
      <strong style={{color:"darkblue"}}>Manage Vehicles</strong><br></br>
    </div>
    <div className="container2">

        <div class="register-photo" >
        <div><Link to="/addvehicle"><button className="btn btn-primary" style={{ width: "200px","border-radius": "15px",border: "none",marginLeft:"360px" }}>
                            Add New Vehicle
                          </button></Link></div>
        <center>
        <table class="styled-table">
    <thead>
        <tr>
            <th>Vehicle Number</th>
            <th>Vehicle Type</th>
            <th>Driver Name</th>
            <th>Amount</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    {vehicles
          .filter((val) => {
            return val;
          })
          .map((f) => {
            return (
        <tr>
            <td>{f.vehicleNo}</td>
            <td>{f.vehicleType}</td>
            <td>{f.driverName}</td>
            <td>{f.cost}</td>
            <td><Link to={"/updateVehicle/"+f._id}><button className="btn btn-info" style={{ width: "100%","border-radius": "15px",border: "none",fontSize:"14px" }}>
                            Update
                          </button></Link></td>
            <td> <button className="btn btn-danger" style={{ width: "100%","border-radius": "15px",border: "none",fontSize:"14px" }}
            onClick={() =>  deleteVehicle(f._id)}>
                            Delete
                          </button></td>
        </tr>
            )
          })}
    </tbody>
</table>


</center>
    </div>
    </div>
    </div>
      );
}

export default VehicleList