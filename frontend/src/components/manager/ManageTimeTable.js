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

const ManageTimeTables = () => {
    const [timetabs, setTimetabs] = useState([])

    const deleteTimetable=(id) =>{   
      swal({
          title: "Are you sure?",
          text: "The TimeTable Will be deleted ",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios.delete(`http://localhost:8070/api/manager/deleteTimetable/${id}`).then(() => {
              if (willDelete) {
                swal({
                  title: "The Timetable has been deleted!",
                  text: "You can Continue with Remaining timetables.",
                  icon: "success",
                  type: "success",
                }).then(function () {
                  window.location.href = "/managetimetables";
                });
              } else {
                swal("Request Is Not Cancled");
              }
            });
          }
        });
      }

    const getAllTimetabs = function () {
        axios.get("http://localhost:8070/api/trMnger/getTimetables").then((res) => {
            setTimetabs(res.data);
        }).catch(() => {
            showErrorPopup("Could not load data")
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
    
    useEffect(() => {
        getAllTimetabs()
    }, [])
    

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
      <strong style={{color:"darkblue"}}>Manage Timetables</strong><br></br>
    </div>
    <div className="container2">
        <div class="register-photo" >
        <div><Link to="/plantimetable"><button className="btn btn-primary" style={{ width: "200px","border-radius": "15px",border: "none",marginLeft:"360px" }}>
                            Plan Timetable
                          </button></Link></div>
        <center>
        <table class="styled-table">
    <thead>
        <tr>
            <th>Route ID</th>
            <th>Route</th>
            <th>Vehicle Type</th>
            <th>Date</th>
            <th>Time</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    {timetabs.filter(val => {
                        return val;
                    }).map(f => {
                        return (
        <tr>
            <td>{f.route.routeId}</td>
            <td>{f.route.route}</td>
            <td>{f.vehicle.vehicleType}</td>
            <td>{f.date}</td>
            <td>{f.time}</td>
            <td> <button className="btn btn-danger" style={{ width: "100%","border-radius": "15px",border: "none",fontSize:"14px" }}
            onClick={() =>  deleteTimetable(f._id)}>
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

export default ManageTimeTables