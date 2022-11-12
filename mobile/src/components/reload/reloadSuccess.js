import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../res/css/reload.css";
import backImg from "../../res/images/reload/Arrowback.png";
import successImg from "../../res/images/reload/success.png";

export default function ReloadSuccess() {
  return (
    <>
      <div className="p-3">
        <img
          src={backImg}
          alt=""
          style={{ width: "10px" }}
          className="ms-4"
          onClick={(e) => {}}
        />
        <div className="mt-5" style={{ textAlign: "center" }}>
          <img src={successImg} style={{ width: "90%", textAlign: "center" }} />
          <div
            style={{ fontWeight: "400", fontSize: "18px", color: "#363636" }}
            className="mt-5 mb-3"
          >
            Payment Success...
          </div>
          <div
            style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}
          >we will send order details and invoice in your contact no. and registered email</div>
        </div>
        <Link to="/home">
        <div className="nextBtn p-3 mt-5" style={{ textAlign: "center" }}>
          Home
        </div>
        </Link>
      </div>
    </>
  );
}
