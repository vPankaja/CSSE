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

const RouteList = () => {
    const [routes, setRoutes] = useState([]);

    const deleteRoute=(id) =>{   
      swal({
          title: "Are you sure?",
          text: "The Route Will be deleted ",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios.delete(`http://localhost:8070/api/manager/deleteRoute/${id}`).then(() => {
              if (willDelete) {
                swal({
                  title: "The Route has been deleted!",
                  text: "You can Continue with Remaining routes.",
                  icon: "success",
                  type: "success",
                }).then(function () {
                  window.location.href = "/routelist";
                });
              } else {
                swal("Request Is Not Cancled");
              }
            });
          }
        });
      }

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
      <strong style={{color:"darkblue"}}>Manage Routes</strong><br></br>
    </div>
    <div className="container2">

        <div class="register-photo" >
        <div><Link to="/addroutes"><button className="btn btn-primary" style={{ width: "200px","border-radius": "15px",border: "none",marginLeft:"360px" }}>
                            Add New Route
                          </button></Link></div>
        <center>
        <table class="styled-table">
    <thead>
        <tr>
            <th>Route Id</th>
            <th>Route</th>
            <th>Traffic Type</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    {routes
          .filter((val) => {
            return val;
          })
          .map((f) => {
            return (
        <tr>
            <td>{f.routeId}</td>
            <td>{f.route}</td>
            <td>{f.trafficType}</td>
            <td><Link to={"/updateRoute/"+f._id}><button className="btn btn-info" style={{ width: "100%","border-radius": "15px",border: "none",fontSize:"14px" }}>
                            Update
                          </button></Link></td>
            <td> <button className="btn btn-danger" style={{ width: "100%","border-radius": "15px",border: "none",fontSize:"14px" }}
            onClick={() =>  deleteRoute(f._id)}>
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

export default RouteList