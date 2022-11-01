import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import Footer from "../footer/footer";
import timetab from "../../res/images/planTime/planTime.png"

export default function AddVehicle() {
    const [vehiNo, setVehiNo] = useState("")
    const [vehiType, setVehiType] = useState("")
    const [driver, setDriver] = useState("")
    const [cost, setCost] = useState(0)

    const postVehicle = function () {
        if(vehiNo==null) {
            showErrorPopup("vehicleNo is required")
        }
        else if(vehiType==null) {
            showErrorPopup("vehicle type is required")
        }
        else if(driver==null) {
            showErrorPopup("Driver type is required")
        }
        else if(cost==null) {
            showErrorPopup("Cost is required")
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
        <>
            <div className="reloadBack p-5">
                <img src={timetab} alt="" style={{width: "27%"}} />
                <div className="reloadTitle ps-3">
                    Add Vehicle
                </div>
            </div>
            <div className="bottomContent" style={{"margin-top": "50px"}}>
                <div className="p-5 mb-5" style={{width: "100%"}}>
                    <div className="reloadLabel">
                        Vehicle No
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setVehiNo(e.target.value)}} />

                    <div className="reloadLabel">
                        Vehicle Type
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setVehiType(e.target.value)}} />

                    <div className="reloadLabel">
                        Driver Name
                    </div>
                    <input type="text" className="p-1 mb-3" onChange={e => {setDriver(e.target.value)}} />

                    <div className="reloadLabel">
                        Cost
                    </div>
                    <input type="number" className="p-1 mb-3" onChange={e => {setCost(e.target.value)}} />

                    <button className="nextBtn p-3" onClick={postVehicle}>Add</button>
                </div>
            </div>
            <Footer />
        </>
    )
}