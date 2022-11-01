import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const TravelHistory = () => {
  return (
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
          <img src={require("../../res/images/logocar.png")} />{" "}
          <div
            style={{
              marginTop: "20px",
              width: "300px",
              color: "#3399FF",
              fontSize: "19px",
            }}
          >
            <b>BookMyTickets</b>
          </div>
          <ul class="links">
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/customerhome">Services</a>
            </li>
            <li>
              <Link to="/dashboard">
                <div class="button">Logout </div>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <div
          style={{
            fontSize: "22px",
            marginBottom: "-50px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <strong style={{ color: "darkblue" }}>
          View Travel History
          </strong>
          <br></br>
          <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          Check your past journey and get the report.
          </span>
        </div>

        
        <div className="container2">
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>

            <div class="btn-group">
  <button style={{ marginLeft: '900px' }} type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Month
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">January</a>
    <a class="dropdown-item" href="#">February</a>
    <a class="dropdown-item" href="#">March</a>
    <a class="dropdown-item" href="#">April</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
<br/><br/>
<div style={{ overflowX: "auto" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>
                        <center> Date </center>
                      </th>
                      <th>
                        <center> From </center>
                      </th>
                      <th>
                        <center> To </center>
                      </th>
                      <th>
                        <center> Amount </center>
                      </th>
                      <th>
                        <center> Rating </center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {.map(function (f) {
                        return (
                          <tr>
                            <td>
                              <center>  </center>
                            </td>
                            <td>
                              <center>  </center>
                            </td>
                            <td>
                              <center>  </center>
                            </td>
                            <td>
                              <center>  </center>
                            </td>
                            <td>
                              <center>  </center>
                            </td>

                            </tr>
                        );
                      })} */}
                  </tbody>
                </table>
              </div>

        </div>
    </div>
    </div>
    </div>
  );
};

export default TravelHistory;