import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../res/css/login.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [uname, setUname] = useState("");
  const [pwrd, setPwrd] = useState("");

  function loginUser(e) {
    e.preventDefault();
    if (uname.length == 0 || pwrd.length == 0) {
      swal({
        title: "All fields must be filled",
        icon: "warning",
        buttons: true,
      });
    } else {
      const data = {
        username: uname,
      };
      axios.post("http://localhost:8070/api/user/login", data).then((res) => {
        if (!res.data) {
          swal({
            title: "Invalid Email",
            icon: "error",
            buttons: true,
          });
        } else if (res.data.password != pwrd) {
          swal({
            title: "Invalid Password",
            icon: "error",
            buttons: true,
          });
        } else {
          swal({
            title: "Success",
            text: "Login Successful",
            icon: "success",
            type: "success",
          }).then(() => {
            console.log(res);
            localStorage.setItem("userId", res.data._id);
            localStorage.setItem("userType", res.data.type);
            if (res.data.type == "passenger") {
              window.location.href = "/home";
            } else {
              window.location.href = "/adminhome";
            }
          });
        }
      });
    }
  }

  return (
    <>
      <section
        className="vh-100"
        style={{ backgroundColor: "#000080", fontStyle: "italic" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <div
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></div>
                {/* <img src="../res/images/logo5.png" /> */}
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h1
                    className="fw-normal mb-3 pb-3 "
                    style={{ color: "#FFFFFF", fontSize: "40px" }}
                  >
                    Welcome<br></br>Back
                  </h1>

                  <div className="form-outline mb-4">
                    <input
                      placeholder="Email Address"
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setUname(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      placeholder="Password"
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setPwrd(e.target.value);
                      }}
                    />
                  </div>

                  <p
                    className="small mb-5 pb-lg-2"
                    style={{
                      textAlign: "right",
                      marginTop: "-15px",
                      fontSize: "14px",
                    }}
                  >
                    <a
                      className="text-muted"
                      href="#!"
                      style={{ textDecoration: "none" }}
                    >
                      <span style={{ color: "#FFFFFF" }}>Forgot Password</span>
                    </a>
                  </p>
                  <p
                    className="small mb-5 pb-lg-2"
                    style={{
                      textAlign: "right",
                      marginTop: "-50px",
                      fontSize: "14px",
                    }}
                  >
                    <a
                      className="text-muted"
                      href="#!"
                      style={{ textDecoration: "none" }}
                    >
                      <Link to="/register">
                        <span style={{ color: "#FFFFFF" }}>Sign Up</span>
                      </Link>
                    </a>
                  </p>
                  <div
                    className="pt-1 mb-4"
                    style={{ textAlign: "center", marginTop: "-40px" }}
                  >
                    <button
                      className="arrow"
                      type="button"
                      onClick={loginUser}
                    ></button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={require("../res/images/loginPic.jpeg")}
                alt="Login image"
                className="w-100 vh-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
