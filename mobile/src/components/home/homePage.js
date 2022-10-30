import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "../../res/css/home-page.css";
import carImg from "../../res/images/car_home.png";
import box1 from "../../res/images/home/Spjald.png";
import box2 from "../../res/images/home/Spjald2.png";
import box3 from "../../res/images/home/Spjald3.png";
import box4 from "../../res/images/home/Spjald4.png";
import Footer from "../footer/footer";

export default function HomePage() {
  return (
    <>
      <div className="row m-0 heading" style={{ width: "100%" }}>
        <div className="row m-0" style={{ width: "100%" }}>
          <div className="col-6 title">Welcome To Book My Tickets</div>
          <div className="col-6">
            <img src={carImg} className="carImg" />
          </div>
        </div>
        <div
          className="row m-0 py-3"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="col-1"></div>
          <div className="col-10 p-0">
            <input
              type="text"
              className="searchBar"
              placeholder="Type the service ..."
            />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div>
        <div className="mt-3 optionText">Choose your option to go</div>
        <div className="row row-col-2 row-col-sm-3 m-0 pt-3 pb-5">

          {/* Check balance */}
          <div className="col-6 col-sm-4 homebox">
            <img src={box1} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitle">Check Balance</div>
            <div style={{ "text-align": "center" }} className="py-2">
              <div className="btn boxBtn">Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homebox">
            <img src={box2} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitle">Reload Account</div>
            <div style={{ "text-align": "center" }} className="py-2">
              <div className="btn boxBtn" onClick={() => {window.location.href="/reload"}}>Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homebox">
            <img src={box3} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitle">Check Timetable</div>
            <div style={{ "text-align": "center" }} className="py-2">
              <div className="btn boxBtn" onClick={e => {window.location.href="/gettimetableList"}}>Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homebox">
            <img src={box4} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitle">View Travel History</div>
            <div style={{ "text-align": "center" }} className="py-2">
              <div className="btn boxBtn">Click</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
