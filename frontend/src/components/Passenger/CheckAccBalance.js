import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";

AOS.init({
  duration: "2000",
});

const CheckAccBalance = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [balance, setBalance] = useState("");

  const [accbalance, setAccbalance] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/api/user/${id}`)
      .then((res) => {
        var user = res.data;

        setAccbalance(user);

        setName(user.name);
        setPhoneNumber(user.phoneNumber);
        setBalance(user.balance);

      })
      .catch((e) => {
        console.log(e);
        console.log(id);
      });
  }, []);

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
              <a href="/passengerhome">Services</a>
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
                            Name
                          </strong>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                          <strong style={{ color: "grey" }}>{accbalance.name}</strong>
                        </p>
                      </div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-sm-6">
                        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                          <strong style={{ color: "black" }}>
                            Phone No
                          </strong>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                          <strong style={{ color: "grey" }}>{accbalance.phoneNumber}</strong>
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
                          <strong style={{ color: "grey" }}>{accbalance.balance}</strong>
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
