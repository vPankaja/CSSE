import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const ReloadAccount = () => {
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
        <strong style={{ color: "darkblue" }}>RELOAD ACCOUNT</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          “Reload your account without any delay to continue your journey..”
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder"></div>
            <form method="post">
              <br></br>
              <p style={{ fontSize: "22px", marginBottom: "40px" }}>
                <strong style={{ color: "darkblue" }}>Fill Your Details</strong>
                <br></br>
                <span style={{ fontSize: "11px" }}>
                  Fill your Account Details & Amount to Pay
                </span>
              </p>
              <div style={{ marginBottom: "20px" }}>
                <input
                  class="input1"
                  style={{ marginRight: "20px" }}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required
                ></input>
                <input
                  className="input1"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  required
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  className="input2"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  className="input2"
                  type="text"
                  name="accountnumber"
                  placeholder="Account Number"
                  required
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  className="input2"
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  required
                ></input>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <input
                  className="input2"
                  type="number"
                  name="phoneno"
                  placeholder="Phone No"
                  required
                ></input>
              </div>

              <div style={{ marginLeft: "100px" }}>
                <Link to="/payment">
                  <button class="btn1" type="submit">
                    Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReloadAccount;
