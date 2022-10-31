import React, { useEffect, useState } from "react";
import axios from "axios"
import swal from "sweetalert";
import timetab from "../../res/images/planTime/planTime.png"
import "../../res/css/reload.css"
import Footer from "../footer/footer";

export default function PlanTimetable() {
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
                    window.location.href="/adminhome"
                })
            }
            else {
                showErrorPopup("Timetable creation unsuccessful")
            }
        })
    }

    const createTimetable = async function () {
        if(vehiNo==null) {
            showErrorPopup("vehicleNo is required")
        }
        else if(vehiType==null) {
            showErrorPopup("vehicle type is required")
        }
        else if(routeId==null) {
            showErrorPopup("Routeid is required")
        }
        else if(driver==null) {
            showErrorPopup("Driver type is required")
        }
        else if(inspector==null) {
            showErrorPopup("Inspector type is required")
        }
        else if(date==null) {
            showErrorPopup("Date is required")
        }
        else if(time==null) {
            showErrorPopup("Time is required")
        }
        else {
            getVehicle()
        }
    }

    return (
        <>
            <div className="reloadBack p-5">
                <img src={timetab} alt="" style={{width: "27%"}} />
                <div className="reloadTitle ps-3">
                    Plan Timetable
                </div>
            </div>
            <div className="bottomContent" style={{"margin-top": "50px"}}>
                <div className="p-5 mb-5">
                    <div className="reloadLabel">
                        Vehicle No
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setVehiNo(e.target.value)}} />

                    <div className="reloadLabel">
                        Vehicle Type
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setVehiType(e.target.value)}} />

                    <div className="reloadLabel">
                        Route ID
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setRouteId(e.target.value)}} />

                    <div className="reloadLabel">
                        Driver
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setDriver(e.target.value)}} />

                    <div className="reloadLabel">
                        Inspector
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setInspector(e.target.value)}} />

                    <div className="reloadLabel">
                        Date
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setDate(e.target.value)}} />

                    <div className="reloadLabel">
                        Time
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setTime(e.target.value)}} />

                    <button className="nextBtn p-3" onClick={createTimetable}>Create</button>
                </div>
            </div>
            <Footer />
        </>
    )
}