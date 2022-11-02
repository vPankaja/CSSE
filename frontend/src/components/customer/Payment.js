import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../../res/css/customer.css";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import StatusMessages, {useMessages} from './StatusMessages'

AOS.init({
  duration: "2000",
});

const Payment = () => {

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
          <strong style={{ color: "darkblue" }}>
            RELOAD ACCOUNT
          </strong>
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
                <div class="form-group row">
                  <div class="col-md-4 p-2">
                    <label><b>Add Amount :</b></label>
                  </div>
                  <div class="col-md-7 p-2">
                    <select class="form-select">
                      <option value="" hidden>Select</option>
                      <option value="500">500</option>
                      <option value="1000">1000</option>
                      <option value="1500">1500</option>
                      <option value="2000">2000</option>
                      <option value="3000">3000</option>
                    </select>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h5>Credit Card:</h5>
                  </div>
                  <div class="col-sm-6">
                    <h6>4242424242424242</h6>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h5>cvv:</h5>
                  </div>
                  <div class="col-sm-6">
                    <h6>955</h6>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h5>Expire Date:</h5>
                  </div>
                  <div class="col-sm-6">
                    <h6>05/09/2024</h6>
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <center>
                  <div class="row w-75 mx-auto">
                  <Link to="/" >
              <button type="button" class="btn btn-outline-success">Edit Credit Card Details</button>
              </Link>
                    
                  </div>
                  <br />
                  <div class="row w-75 mx-auto">
                  <Link to="/" >
              <button type="button" class="btn btn-outline-success">Add Credit To The Account</button>
              </Link>
                    
                  </div>
                  <br />
                  </center>
                </div>
              </form>

        </div>
    </div>
    </div>
    </div>
    

              

  );
};

export default Payment;