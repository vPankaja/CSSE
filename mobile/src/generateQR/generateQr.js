import React from "react";
import { Route, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import axios from "axios";
import swal from "sweetalert";

export default function GenerateQr() {
  const { id } = useParams();
  const value = id;

  const deleteTimetable = function () {
    axios.delete(`http://localhost:8070/api/driver/deleteTimetable/${id}`).then(() => {
      swal({
        title: "Successfully deleted",
        icon: "success",
        buttons: true
      }).then(() => {
        window.location.href = "/driverTimetables"
      })
    })
  }

  const logout = function () {
    swal({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes"
    }).then(() => {
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
      localStorage.removeItem("route");
      localStorage.removeItem("busNo");
      window.location.href = "/";
    });
  };

  return (
    <>
      <div className="row mt-5 m-0">
        <div className="col-2"></div>
        <div className="col-8">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5 m-0">
        <div className="col-4"></div>
        <div className="col-4">
          <div
            className="btn"
            style={{
              width: "100%",
              backgroundColor: "#003971",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={deleteTimetable}
          >End Journey</div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row mt-5 m-0">
        <div className="col-4"></div>
        <div className="col-4">
          <div
            className="btn btn-danger"
            style={{
              width: "100%",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={logout}
          >LOGOUT</div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}
