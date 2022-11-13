import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../res/css/timetables.css";
import Footer from "../footer/footer";
import busImg from "../../res/images/timetables/peopleBus.png";
import { Link } from "react-router-dom";

export default function DriverTimetables() {
  const [timetabs, setTimetabs] = useState([]);
  const busNo = localStorage.getItem("busNo");
  const routeName = localStorage.getItem("route");

  const getTimetables = function () {
    const data = {
      busNo,
      routeName,
    };
    axios
      .post("http://localhost:8070/api/driver/getTimeforDriver", data)
      .then((res) => {
        setTimetabs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openQR = function (id) {
    window.location.href = `/generateQr/${id}`
  }

  useEffect(() => {
    getTimetables();
  }, []);

  return (
    <>
      <div className="timetableBack">
        <div className="timetableTitle py-5">Select Journey to start</div>
      </div>
      <div className="timetableContent">
        {timetabs
          .filter((val) => {
            return val;
          })
          .map((f) => {
            return (
              <>
                <div className="row m-0 py-3">
                  <div className="col-1"></div>
                  <div className="col-10">
                    <div className="timetabListBox">
                      <div className="row m-0">
                        <div className="col-4">
                          <img src={busImg} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-8 routeName">
                          <div>Route : {f.route.routeId}</div>
                          <div>Date : {f.date}</div>
                          <div>Time : {f.time}</div>
                        </div>
                      </div>
                      <div className="row mt-2 m-0">
                        <div className="col-4"></div>
                        <div className="col-4">
                          <div
                            className="btn"
                            style={{ width: "100%", backgroundColor: "#003971", borderRadius: "10px", color: "white" }}
                            onClick={e => openQR(f._id)}
                          >
                            Start
                          </div>
                        </div>
                        <div className="col-4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1"></div>
                </div>
              </>
            );
          })}
      </div>
      <Footer />
    </>
  );
}
