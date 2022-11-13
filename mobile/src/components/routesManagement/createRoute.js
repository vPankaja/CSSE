import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import timetab from "../../res/images/planTime/planTime.png";
import "../../res/css/reload.css";
import Footer from "../footer/footer";

export default function CreateRoute() {
  const [routeNo, setRouteNo] = useState(0);
  const [trafficType, setTrafficType] = useState("");
  const [route, setRoute] = useState("");

  const postRoute = function () {
    const data = {
      routeId: routeNo,
      route: route,
      trafficType: trafficType,
    };

    axios
      .post("http://localhost:8070/api/trMnger/createRoute", data)
      .then((res) => {
        swal({
          title: "Route added successfully",
          icon: "success",
          buttons: true,
        }).then(() => {
          window.location.href = "/adminhome";
        });
      })
      .catch((err) => {
        swal({
          title: "Unsuccessful, please try again",
          icon: "error",
          buttons: true,
        }).then(() => {
          window.location.href = "/adminhome";
        });
      });
  };

  const createRoute = async function () {
    if (routeNo == 0) {
      showErrorPopup("Route No is required");
    } else if (route == null) {
      showErrorPopup("Route is required");
    } else if (trafficType == null) {
      showErrorPopup("traffic type is required");
    } else {
      postRoute();
    }
  };

  const showErrorPopup = function (message) {
    swal({
      title: message,
      icon: "error",
      buttons: true,
    }).then(() => {});
  };

  return (
    <>
      <div className="reloadBack p-5">
        <img src={timetab} alt="" style={{ width: "27%" }} />
        <div className="reloadTitle ps-3">Create Route</div>
      </div>
      <div className="bottomContent" style={{ "margin-top": "50px" }}>
        <div className="p-5 mb-5">
          <div className="reloadLabel">Route No</div>
          <input
            type="number"
            className="p-1 mb-3"
            onChange={(e) => {
              setRouteNo(e.target.value);
            }}
          />

          <div className="reloadLabel">Route</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setRoute(e.target.value);
            }}
          />

          <div className="reloadLabel">Traffic type</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setTrafficType(e.target.value);
            }}
          />

          <button className="nextBtn p-3" onClick={createRoute}>
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
