import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../res/css/vehicles.css";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function RoutesList() {
  const [routes, setRoutes] = useState([]);

  const getAllRoutes = function () {
    axios
      .get("http://localhost:8070/api/trMnger/getAllRoutes")
      .then((res) => {
        setRoutes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <>
      <div className="row m-0 heading" style={{ width: "100%" }}>
        <div className="title" style={{ textAlign: "center" }}>
          Routes
        </div>
      </div>
      <div style={{ width: "100%", marginBottom: '120px' }}>
        {routes
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
                        <div className="col-6 leftVehi">Route Number :</div>
                        <div className="col-6 rightVehi">{f.routeId}</div>
                      </div>
                      <div className="row m-0">
                        <div className="col-6 leftVehi">Route :</div>
                        <div className="col-6 rightVehi">{f.route}</div>
                      </div>
                      <div className="row m-0">
                        <div className="col-6 leftVehi">Traffic type :</div>
                        <div className="col-6 rightVehi">{f.trafficType}</div>
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
          <Link to="/createroute">
            <div className="addBtn p-3">Add Route</div>
          </Link>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
