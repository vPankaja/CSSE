import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import "../../res/css/customer.css"
import "../../res/css/timetables.css"
import { Link } from "react-router-dom";
import busImg from "../../res/images/peopleBus.png"

export default function CheckTimetables() {
    const [timetabs, setTimetabs] = useState([])

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
          >
            <b>BookMyTickets</b>
          </div>
          <ul class="links">
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/passengerhome">Services</a>
            </li>
            <li>
              <Link to="/login">
                <div class="button">LogOut </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          fontSize: "22px",
          marginBottom: "-50px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <strong style={{ color: "darkblue" }}>CHECK TIMETABLES</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          Check Timetables and Book your seat now.
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            
            
            
                {
                    timetabs.filter(val => {
                        return val;
                    }).map(f => {
                        return (
                            <>
                                <div className="row m-0 py-3">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div className="timetabListBox">
                                            <div className="col-6">
                                                <img src={busImg} alt="" style={{width: "80%", paddingLeft:"30px"}} />
                                            </div>
                                            <div className="col-8 routeName">
                                                <div>Route : {f.route.routeId}</div>
                                                <div>Date  : {f.date}</div>
                                                <div>Time  : {f.time}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
            </div>
            </div>


            </div>
        
    )
}