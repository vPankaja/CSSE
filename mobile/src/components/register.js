import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../res/css/login.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwrd] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [type, setType] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [rePwrd, setRepwrd] = useState("");
  const [busNo, setBusNo] = useState("");
  const [routeNo, setRouteNo] = useState("");

  const validateForm = function () {
    if (name == null || name == "") {
      showErrorPopup("Name is required");
    } else if (email == null || email == "") {
      showErrorPopup("Email address is required");
    } else if (password == null || password == "") {
      showErrorPopup("Password is required");
    } else if (type == null || type == "") {
      showErrorPopup("User type is required");
    } else if (phoneNumber == null || phoneNumber == "") {
      showErrorPopup("Phone number is required");
    } else if (nic == null || nic == "") {
      showErrorPopup("Phone number is required");
    } else if (dob == null || dob == "") {
      showErrorPopup("Phone number is required");
    } else if (rePwrd == null || rePwrd == "") {
      showErrorPopup("Phone number is required");
    } else if (password !== rePwrd) {
      showErrorPopup("Passwords do not match");
    } else if (type == "driver") {
      if (busNo == null || busNo == "") {
        showErrorPopup("Bus Number is required");
      } else if (routeNo == null || routeNo == "") {
        showErrorPopup("Route number is required");
      } else {
        validateBus();
      }
    } else {
      registerUser();
    }
  };

  const validateBus = function () {
    const data = {
      busNo: busNo
    }
    console.log(data)
    axios.post("http://localhost:8070/api/driver/findvehicle", data).then((res) => {
      if(res.data.available == 1) {
        registerDriver()
      } else {
        showErrorPopup("Vehicle is not registered")
      }
    })
  }

  const showErrorPopup = function (message) {
    swal({
      title: message,
      icon: "error",
      buttons: true,
    }).then(() => {});
  };

  const showSuccessPopup = function (message) {
    swal({
      title: message,
      icon: "success",
      buttons: true,
    }).then(() => {});
  };

  const registerUser = function () {
    const data = {
      name,nic,dob, email, phoneNumber, type, password
    }

    axios.post("http://localhost:8070/api/user/register", data).then(() => {
      showSuccessPopup("Successfully registered");
      window.location.href = "/"
    }).catch(() => {
      showErrorPopup("Unsuccessful")
    })
  };


  const registerDriver = function () {
    const data = {
      name,nic,dob, email, phoneNumber, type, password, busNo, routeNo
    }

    axios.post("http://localhost:8070/api/user/registerDriver", data).then(() => {
      showSuccessPopup("Successfully registered");
      window.location.href = "/"
    }).catch(() => {
      showErrorPopup("Unsuccessful")
    })
  };

  return (
    <>
      <section
        className="logback"
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
                    Register<br></br>
                  </h1>

                  {/* Name */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Name"
                      type="Name"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Email address"
                      type="email"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Phone Number"
                      type="text"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="NIC number"
                      type="text"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setNic(e.target.value);
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Date of Birth"
                      type="text"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                    />
                  </div>

                  {/* Password */}
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

                  {/* Re-enter password */}
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Re-enter Password"
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => {
                        setRepwrd(e.target.value);
                      }}
                    />
                  </div>

                  {/* Type */}
                  <div className="dropdown">
                    <select
                      className="btn btn-info dropdown-toggle"
                      id="drops"
                      onChange={(e) => {
                        console.log(e.target.value)
                        setType(e.target.value);
                      }}
                    >
                      <option value="passenger">
                        Passenger
                      </option>
                      <option value="driver">Driver</option>
                    </select>
                  </div>

                  {type == "driver" && (
                    <div>
                      <div className="form-outline mb-4">
                        <input
                          placeholder="Bus number"
                          type="text"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setBusNo(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          placeholder="Route number"
                          type="text"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setRouteNo(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <p
                    className="small mb-5 pb-lg-2"
                    style={{
                      textAlign: "right",
                      marginTop: "-50px",
                      fontSize: "14px",
                    }}
                  >
                      <Link to="/">
                        <span style={{ color: "#FFFFFF" }}>
                          Already have an account
                        </span>
                      </Link>
                  </p>
                  <div
                    className="pt-1 mb-4"
                    style={{ textAlign: "center", marginTop: "-40px" }}
                  >
                    <button
                      className="arrow"
                      type="button"
                      onClick={validateForm}
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
