import React, { useState, useEffect } from "react";
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import "../../res/css/customer.css";
import PDF from "@material-ui/icons/PictureAsPdfRounded";
import View from "@material-ui/icons/VisibilityRounded";

AOS.init({
  duration: "2000",
});

const UserManagement = () => {
    
        const [user, setUser] = useState([]);
        const [type, setType] = useState("");
        const [searchClick, setSearchClick] = useState(false);
      
        const getFiltersForPDF = () => {
          let User = [];
      
          user.forEach((val) => {
            if (!searchClick) {
              User.push(val)
            } else if (
              type.length === 0 
            ) {
              User.push(val);
            } else if (
              type.length !== 0 
            ) {
                val.Type.toLowerCase().includes(type.toLowerCase()) ? User.push(val) : doNothing()
            } else {
              if (type) {
                val.Type.toLowerCase().includes(type.toLowerCase())? User.push(val): doNothing()
              }
            }
          });
      
          return User;
        };
      
        function getDate(date) {
          const fullDate = date.toString().trim().split('T')
      
          return `${fullDate[0]}`
        }
      
        function doNothing() {
          
        }
      
        const generatePDF = () => {
          const pdfOrder = getFiltersForPDF();
      
          const doc = new jspdf();
          const date = Date().split(" ");
          const dateStr = date[1] + "-" + date[2] + "-" + date[3];
          const tableColumn = [
            "Name",
            "NIC",
            "DOB",
            "Email",
            "Conatct No",
            "Role",

          ];
          const tableRows = [];
      
          pdfOrder.map((employ) => {
            const employData = [
                employ.name,
                employ.nic,
                employ.dob,
                employ.email,
                employ.phoneNumber,
                employ.type,
            ];
            tableRows.push(employData);
          });
          doc.text("User Details Report", 14, 15).setFontSize(12);
          doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
          doc.addImage( "JPEG", 170, 8, 22, 22);
          // right down width height
          doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 8 },
            startY: 35,
          });
          doc.save(`User_Details_Report.pdf`);
        };
      
        function filter(e) {
          e.preventDefault();
          setSearchClick(true);
      }
      
        useEffect(() => {
          function getUser() {
            axios
              .get("http://localhost:8070/api/user/allusers")
              .then((res) => {
                setUser(res.data);
              })
              .catch((err) => {
                alert(err.message);
              });
          }
          getUser();
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
              <a href="/managerhome">Services</a>
            </li>
            <li>
              <Link to="/">
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
        <strong style={{ color: "darkblue" }}>User Management</strong>
        <br></br>
        <span style={{ fontSize: "14px", color: "#B2BEB5" }}>
          Manage Details of the Users.
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder"></div>

            <div class="col-sm-8">
                    <a
                      class="btn btn-light"
                      onClick={() => generatePDF()}
                    >
                      <PDF /> Generate PDF
                    </a>
                  </div>
                </div>
              </div>
              <div class="table-filter">
                <div class="row">
                  <div class="col-sm-3">
                    
                  </div>
                  <div class="col-sm-9">
                    <div class="filter-group">
                    <div class="input-group">
  <div class="form-outline">
    <input class="form-control mr-sm-2"
                        type="search"
                        placeholder="Role"
                        aria-label="Search"
                        onChange={(e) => {
                          setType(e.target.value);
                        }} />
  </div>
  <button type="button" class="btn btn-primary" onClick={filter}>
    Filter
  </button>
  </div>



                      
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div style={{ overflowX: "auto" }}>
                <table className="table table-hover">
                  <thead>
                  <tr>
                    <th>
                      <center> Employee Name </center>
                    </th>
                    <th>
                      <center> NIC </center>
                    </th>
                    <th>
                      <center> DOB </center>
                    </th>
                    <th>
                      <center> Email </center>
                    </th>
                    <th>
                      <center> Phone Number </center>
                    </th>
                    <th>
                      <center> Role </center>
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {user.filter(val => {
                                if (!searchClick) {
                                    return val;
                                }
                                else if(type.length === 0) {
                                    return val;
                                }
                                else if(type.length !== 0) {
                                    return val.Type.toLowerCase().includes(type.toLowerCase())
                                }
                                else {
                                    if (type) {
                                        return val.Type.toLowerCase().includes(type.toLowerCase())
                                    }
                                }
                            })
                    .map(function (f) {
                      return (
                        <tr>
                          <td>
                            <center> {f.name} </center>
                          </td>
                          <td>
                            <center> {f.nic} </center>
                          </td>
                          <td>
                            <center> {f.dob} </center>
                          </td>
                          <td>
                            <center> {f.email} </center>
                          </td>
                          <td>
                            <center> {f.phoneNumber} </center>
                          </td>
                          <td>
                            <center> {f.type} </center>
                          </td>

                          <td>
                            
                              <Link to={"/vieworderdetails/" + f._id}>
                                <Button
                                  type="button"
                                  class="btn btn-outline-secondary"
                                >
                                  <View />
                                </Button>
                              </Link>
                            
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
};

export default UserManagement;
