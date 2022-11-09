import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const CheckAccBalance = () => {
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
        <strong style={{ color: "darkblue" }}>Check Account Balance</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          “Reload your account without any delay to continue your journey..”
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder2"></div>
            <form>
              <p style={{ fontSize: "22px", marginBottom: "40px" }}>
                <strong style={{ color: "darkblue" }}>
                  Good Evening Imesha!
                </strong>
                <br></br>
              </p>
              <div class="row">
                <div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <p
                          style={{
                            fontSize: "18px",
                            marginBottom: "20px",
                            marginRight: "10px",
                          }}
                        >
                          <strong style={{ color: "black" }}>
                            Last Added Date
                          </strong>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                          <strong style={{ color: "grey" }}>01/11/2022</strong>
                        </p>
                      </div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-sm-6">
                        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                          <strong style={{ color: "black" }}>
                            Last Added Amount
                          </strong>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                          <strong style={{ color: "grey" }}>1500 Credit</strong>
                        </p>
                      </div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-sm-6">
                        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                          <strong style={{ color: "black" }}>
                            Account Balance
                          </strong>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                          <strong style={{ color: "grey" }}>900 Credit</strong>
                        </p>
                      </div>
                    </div>
                    <br />

                    <Link to="/reloadaccount">
                      <button type="button" class="btn btn-outline-success">
                        Add Credit To Account
                      </button>
                    </Link>

                    <br />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAccBalance;
