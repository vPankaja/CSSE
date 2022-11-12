import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "../../res/css/reload.css";
import reloadIcon from "../../res/images/reload/TitleIcon.png";
import Footer from "../footer/footer";
import Checkout from "./checkout";

export default function Reload() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [accNo, setAccNo] = useState("");
  const [amount, setAmount] = useState(0);
  const [phone, setPhone] = useState("");

  const checkout = function () {
    console.log(fname);
    if (fname == null || fname == "") {
      console.log("hhh");
      showErrorPopup("First name is required");
      return false;
    } else if (lname == null || lname == "") {
      showErrorPopup("last name type is required");
      return false;
    } else if (email == null || email == "") {
      showErrorPopup("Email is required");
      return false;
    } else if (accNo == null || accNo == "") {
      showErrorPopup("Account number is required");
      return false;
    } else if (amount == null || amount == "") {
      showErrorPopup("Amount is required");
      return false;
    } else if (phone == null || phone == "") {
      showErrorPopup("Phone number is required");
      return false;
    } else {
      window.location.href = `/checkout/${amount}`;
    }
  };

  const showErrorPopup = function (message) {
    swal({
      title: message,
      icon: "error",
      buttons: true,
    }).then(() => {});
  };

  return (
    <>
      <div className="reloadBack p-5">
        <img src={reloadIcon} alt="" style={{ width: "27%" }} />
        <div className="reloadTitle ps-3">Reload</div>
      </div>
      <div className="bottomContent">
        <div className="p-5 mb-5">
          <div className="reloadLabel">First Name</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />

          <div className="reloadLabel">Last Name</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />

          <div className="reloadLabel">Email</div>
          <input
            type="email"
            className="p-1 mb-3"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div className="reloadLabel">Account Number</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setAccNo(e.target.value);
            }}
          />

          <div className="reloadLabel">Amount</div>
          <input
            type="number"
            className="p-1 mb-3"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className="reloadLabel">Phone No</div>
          <input
            type="text"
            className="p-1 mb-3"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <button className="nextBtn p-3" onClick={checkout}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
