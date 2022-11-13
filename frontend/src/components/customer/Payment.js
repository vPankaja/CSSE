import React,{ useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";
import AOS from "aos";
import axios from "axios";
import swal from "sweetalert";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";
import masterCard from "../../res/images/MasterCardLogo.png";
import visaCard from "../../res/images/visa.png";

AOS.init({
  duration: "2000",
});

const Payment = () => {
  const { amount } = useParams();
  const [cardNo, setCardNo] = useState(0);
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState(0);
  const [choice, setChoice] = useState("cred");

  function sendData(e) {
    e.preventDefault();

    const newPayment = {
      cardNo,
      name,
      expDate,
      cvc,
      choice,
    };

    axios
      .post("http://localhost:3000/payment/:amount", newPayment)
      .then((willReg) => {
        if (willReg) {
          swal({
            title: "Success",
            text: "Payment Success",
            icon: "success",
            type: "success",
          }).then(function () {
            window.location.href = "/";
          });
        } else {
          swal("Payment Failed!");
        }
      });
  }

  useEffect(() => {
    console.log(amount);
  }, []);
  return (
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
          <img src={require("../../res/images/logocar.png")} />
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
        <strong style={{ color: "darkblue" }}>CHECKOUT Rs {amount}</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          “Reload your account without any delay to continue your journey..”
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder3"></div>

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <h5>Credit Card No:</h5>
                
                <div style={{ marginBottom: "-10px" }}>
                <input
                  className="input2"
                  type="number"
                  name="checkoutInp"
                  onChange={e => {setCardNo(e.target.value)}}
                  required
                />        <img src={masterCard} style={{position: "absolute", width: "30px", transform: "translate(-262%, 50%)"}} />
                <img src={visaCard} style={{position: "absolute", width: "30px", transform: "translate(-135%, 20%)"}} />
              </div>
              </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>Name on Card:</h5>
                  <div style={{ marginBottom: "-10px" }}>
                <input
                  className="input2"
                  type="text"
                  name="checkoutInp"
                  onChange={e => {setName(e.target.value)}}
                  required
                />
              </div>
              </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>Expire Date:</h5>
                  <div style={{ marginBottom: "-10px" }}>
                <input
                  className="input2"
                  type="text"
                  name="checkoutInp"
                  placeholder="Month / Year"
                  onChange={e => {setExpDate(e.target.value)}}
                  required
                />
              </div>
              </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>CVC:</h5>
                  <div style={{ marginBottom: "-10px" }}>
                <input
                  className="input2"
                  type="Number"
                  name="checkoutInp"
                  onChange={e => {setCvc(e.target.value)}}
                  required
                />
              </div>
              </div>
              </div>
              <br />
              
              <br />
                  <div class="row w-40 mx-auto">
                    <Link to="/">
                      <button type="button" class="btn btn-outline-success">
                        Add Credit To The Account
                      </button>
                    </Link>
                  </div>
                <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
