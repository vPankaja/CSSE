import React, { useEffect, useState } from "react";
import "../../res/css/reload.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

export default function ShowBalance() {
  const [balance, setBalance] = useState(0);

  const getUser = function () {
    axios
      .get(
        `http://localhost:8070/api/user/info/${localStorage.getItem("userId")}`
      )
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        <div className="row m-0 my-5">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row balanceBox">
              <div className="col-6 left">Balance</div>
              <div className="col-6 right">{balance}</div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-1"></div>
          <div className="col-10">
            <Link to="/reload">
              <div className="nextBtn p-3">Reload</div>
            </Link>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
