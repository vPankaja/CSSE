import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backImg from "../../res/images/reload/Arrowback.png";
import masterCard from "../../res/images/reload/MasterCardLogo.png";
import cardIcon from "../../res/images/reload/CardIcon.png";
import "../../res/css/reload.css";
import Footer from "../footer/footer";

export default function Checkout() {
  // const amount = props.amount;
  const { amount } = useParams();
  const [cardNo, setCardNo] = useState(0);
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState(0);
  const [choice, setChoice] = useState("cred");

  useEffect(() => {
    console.log(amount);
  }, []);
  return (
    <>
      <div className="amountDrop mx-2 pt-5">
        <img src={backImg} alt="" style={{ width: "10px" }} className="ms-4" />
        <div className="row m-0 py-3 checkoutAmt">
          <div className="col-6">Checkout</div>
          <div className="col-6">Rs {amount}</div>
        </div>
        <div className="row mx-3 mt-4">
          <div className="col-6 choiceBox active">
            <div className="choiceTxt">Credit Card</div>
          </div>
          <div className="col-6 choiceBox">
            <div className="choiceTxt">Pay Pal</div>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-4">
        <div className="labelCheckout mt-3">Card Number</div>
        <input type="number" className="checkoutInp" />
        <img src={masterCard} style={{position: "absolute", width: "40px", transform: "translate(-262%, 50%)"}} />
        <img src={cardIcon} style={{position: "absolute", width: "40px", transform: "translate(-135%, 20%)"}} />

        <div className="labelCheckout mt-3">Cardholder Name</div>
        <input type="text" className="checkoutInp" />

        <div className="row m-0">
          <div className="col-6 p-0">
            <div className="labelCheckout mt-3">Expiry Date</div>
            <input type="text" className="checkoutInp" style={{width: "70%"}} />
          </div>
          <div className="col-6 p-0">
            <div className="labelCheckout mt-3">CVV/CVC</div>
            <input type="number" className="checkoutInp" style={{width: "70%"}} />
          </div>
        </div>

        <div className="nextBtn p-3 mt-3" style={{"text-align": "center"}}>
            Pay Now
        </div>
      </div>
      <Footer />
    </>
  );
}
