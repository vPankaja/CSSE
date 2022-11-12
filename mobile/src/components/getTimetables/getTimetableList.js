import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import "../../res/css/timetables.css"
import busImg from "../../res/images/timetables/peopleBus.png"
import Footer from "../footer/footer";

export default function GetTimetableList() {
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
        <>
            <div className="timetableBack">
            <div className="timetableTitle py-5">Timetables</div>
            </div>
            <div className="timetableContent">
                
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
                                            <div className="col-4">
                                                <img src={busImg} alt="" style={{width: "100%"}} />
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
            <Footer />
        </>
    )
}