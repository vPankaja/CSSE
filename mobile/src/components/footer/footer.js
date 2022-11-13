import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "../../res/css/footer.css";
import { Link } from "react-router-dom";
import footer1 from "../../res/images/footer/Vector.png";
import footer2 from "../../res/images/footer/footer2.png";
import footer3 from "../../res/images/footer/footer3.png";
import footer4 from "../../res/images/footer/footer4.png";

export default function Footer() {
  const logout = function () {
    swal({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes"
    }).then(() => {
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
      localStorage.removeItem("route");
      localStorage.removeItem("busNo");
      localStorage.removeItem("checkedIn");
      window.location.href = "/";
    });
  };

  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-3 footercol">
            <Link
              to={
                localStorage.getItem("userType") === "passenger"
                  ? "/home"
                  : "/adminhome"
              }
            >
              <img className="footerIcon" src={footer1} alt="" />
            </Link>
          </div>
          <div className="col-3 footercol">
            <img className="footerIcon" src={footer2} alt="" />
          </div>
          <div className="col-3 footercol">
            <img className="footerIcon" src={footer3} alt="" />
          </div>
          <div className="col-3 footercol" onClick={logout}>
            <img className="footerIcon" src={footer4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
