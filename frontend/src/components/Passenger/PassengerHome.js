import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const PassengerHome = () => {
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
              <a style={{ color: "#2B65EC" }} href="/passengerhome">
                Services
              </a>
            </li>
            <li>
              <Link to="/login">
                <div class="button">LogOut </div>
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
        <strong style={{ color: "darkblue" }}>Choose your option to go</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          If you had the option to choose to go anywhere in the world right now,
          would it be to “somewhere” or to “someone”?
        </span>
      </div>
      <div className="container2">
        <div class="cards">
          <div
            className="card"
            style={{
              borderRadius: "30px",
              height: "280px",
              width: "200px",
              alignItems: "center",
            }}
          >
            <div className="imgCont">
              <img src={require("../../res/images/CustomerHome/H1.png")} />
            </div>
            <div>
              <a
                href="/checkaccbalance"
                style={{ textDecoration: "none", color: "darkblue" }}
              >
                <strong>Check Balance</strong>
              </a>
            </div>
            <center>
              <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
                Check your account balance instantly.
              </span>
            </center>
          </div>

          <div
            className="card"
            style={{
              borderRadius: "30px",
              height: "280px",
              width: "200px",
              alignItems: "center",
            }}
          >
            <div className="imgCont">
              <img src={require("../../res/images/CustomerHome/H2.png")} />
            </div>
            <div>
              <a
                href="/reloadaccount"
                style={{ textDecoration: "none", color: "darkblue" }}
              >
                <strong>Reload Account</strong>
              </a>
            </div>
            <center>
              <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
                Reload your account without any delay to continue your journey..
              </span>
            </center>
          </div>

          <div
            className="card"
            style={{
              borderRadius: "30px",
              height: "280px",
              width: "200px",
              alignItems: "center",
            }}
          >
            <div className="imgCont">
              <img src={require("../../res/images/CustomerHome/H3.png")} />
            </div>
            <div>
              <a href="/checktimetable" style={{ textDecoration: "none", color: "darkblue" }}>
                <strong>Check Timetable</strong>
              </a>
            </div>
            <center>
              <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
                Check the timetable and play your journey.
              </span>
            </center>
          </div>

          <div
            className="card"
            style={{
              borderRadius: "30px",
              height: "280px",
              width: "200px",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div className="imgCont">
              <img src={require("../../res/images/CustomerHome/H4.png")} />
            </div>
            <div>
              <a
                href="/travelhistory"
                style={{ textDecoration: "none", color: "darkblue" }}
              >
                <strong>View Travel History</strong>
              </a>
            </div>
            <center>
              <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
                Check your past journey and get the report.
              </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerHome;
