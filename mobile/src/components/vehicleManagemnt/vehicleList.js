import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../res/css/vehicles.css";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  const getAllVehicles = function () {
    axios
      .get("http://localhost:8070/api/trMnger/getAllVehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <>
      <div className="row m-0 heading" style={{ width: "100%" }}>
        <div className="title" style={{ textAlign: "center" }}>
          Vehicles
        </div>
      </div>
      <div style={{ width: "100%", marginBottom: '120px' }}>
        {vehicles
          .filter((val) => {
            return val;
          })
          .map((f) => {
            return (
              <>
                <div className="row m-0 my-3" style={{ width: "100%" }}>
                  <div className="col-1"></div>
                  <div className="col-10">
                    <div className="vehicleBox py-3">
                      <div className="row m-0">
                        <div className="col-6 leftVehi">Vehicle Number :</div>
                        <div className="col-6 rightVehi">{f.vehicleNo}</div>
                      </div>
                      <div className="row m-0">
                        <div className="col-6 leftVehi">Vehicle Type :</div>
                        <div className="col-6 rightVehi">{f.vehicleType}</div>
                      </div>
                      <div className="row m-0">
                        <div className="col-6 leftVehi">Driver Name :</div>
                        <div className="col-6 rightVehi">{f.driverName}</div>
                      </div>
                      <div className="row m-0 pt-3">
                        <div className="col-4"></div>
                        <div className="col-4">
                          <button
                            className="btn btn-danger"
                            style={{
                              width: "100%",
                              borderRadius: "15px",
                              border: "none",
                            }}
                          >
                            Delete
                          </button>
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
      <div className="row m-0 py-3">
        <div className="col-1"></div>
        <div className="col-10">
          <Link to="/addVehicle">
            <div className="addBtn p-3">Add Vehicle</div>
          </Link>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
