import React, { useEffect, useState } from "react";
import "../../res/css/admin-home.css";
import carImg from "../../res/images/car_home.png";

import box1 from "../../res/images/adminhome/Spjald.png";
import box2 from "../../res/images/adminhome/Spjald2.png";
import box3 from "../../res/images/adminhome/Spjald3.png";
import box4 from "../../res/images/adminhome/Spjald4.png";
import box5 from "../../res/images/adminhome/Spjald5.png";
import box6 from "../../res/images/adminhome/Spjald6.png";
import Footer from "../footer/footer.js";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <div className="row m-0 headingAdmin" style={{ width: "100%" }}>
        <div className="row m-0" style={{ width: "100%" }}>
          <div className="col-6 titleAdmin">Welcome Admin</div>
          <div className="col-6">
            <img src={carImg} className="carImgAdmin" />
          </div>
        </div>
        <div
          className="row m-0 py-3"
          style={{ display: "flex", width: "100%" }}
        ></div>
      </div>
      <div style={{ position: "absolute", "margin-top": "200px" }}>
        <div className="mt-3 optionTextAdmin">Choose your option to go</div>
        <div className="row row-col-2 row-col-sm-3 m-0 pt-3 pb-5">
          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box1} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Vehicle Management</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <Link to="/vehicleList">
                <div className="btn boxBtnAdmin">Click</div>
              </Link>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box2} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Routes Management</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <div className="btn boxBtnAdmin">Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box3} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Plan Timetable</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <Link to="/planTimetable">
                <div className="btn boxBtnAdmin">Click</div>
              </Link>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box4} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Monitor Networks</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <div className="btn boxBtnAdmin">Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box5} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Check Suspects</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <div className="btn boxBtnAdmin">Click</div>
            </div>
          </div>

          {/* Check balance */}
          <div className="col-6 col-sm-4 homeboxAdmin">
            <img src={box6} style={{ width: "100%" }} alt="" />
            <div className="p-1 boxTitleAdmin">Calculate Penalty</div>
            <div style={{ textAlign: "center" }} className="py-2">
              <div className="btn boxBtnAdmin">Click</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
