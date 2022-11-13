import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../../res/css/customer.css';

AOS.init({
  duration: '2000',
});

const CheckSuspects = () => {
  const [routes, setRoutes] = useState([]);

  const deactivateUser = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'The User Will be deactivate ',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put(`http://localhost:8070/api/manager/deactivateUser/${id}`)
          .then(() => {
            if (willDelete) {
              swal({
                title: 'The User has been deactivated!',
                text: 'You can Continue with Remaining routes.',
                icon: 'success',
                type: 'success',
              }).then(function () {
                getAllRoutes();
              });
            } else {
              swal('Request Is Not Cancled');
            }
          });
      }
    });
  };

  const activateUser = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'The User Will be activate ',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put(`http://localhost:8070/api/manager/activateUser/${id}`)
          .then(() => {
            if (willDelete) {
              swal({
                title: 'The User has been activated!',
                text: 'You can Continue with Remaining routes.',
                icon: 'success',
                type: 'success',
              }).then(function () {
                getAllRoutes();
              });
            } else {
              swal('Request Is Not Cancled');
            }
          });
      }
    });
  };

  const getAllRoutes = function () {
    axios
      .get('http://localhost:8070/api/user/all')
      .then((res) => {
        setRoutes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div className="landing-page">
      <div className="container">
        <div className="header-area">
          <img src={require('../../res/images/logocar.png')} />{' '}
          <div
            style={{
              marginTop: '20px',
              width: '300px',
              color: '#3399FF',
              fontSize: '19px',
            }}
          >
            <b>BookMyTickets</b>
          </div>
          <ul className="links">
            <li>
              <a href="/managerhome">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <Link to="#">
                <div className="button">Logout </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          fontSize: '22px',
          marginBottom: '-100px',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <strong style={{ color: 'darkblue' }}>Check Suspects</strong>
        <br></br>
      </div>
      <div className="container2">
        <div className="register-photo">
          <center>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {routes
                  .filter((val) => {
                    return val;
                  })
                  .map((f) => {
                    return (
                      <tr>
                        <td>{f.name}</td>
                        <td>{f.email}</td>
                        <td>{f.phoneNumber}</td>
                        <td>{f.type}</td>
                        <td>
                          {f.status ? (
                            <span className="text-success">Activated</span>
                          ) : (
                            <span className="text-danger">Deactivated</span>
                          )}
                        </td>
                        <td>{f.balance ? f.balance : 0}</td>

                        <td>
                          {' '}
                          {f.status ? (
                            <button
                              className="btn btn-danger"
                              style={{
                                width: '100%',
                                'border-radius': '15px',
                                border: 'none',
                                fontSize: '14px',
                              }}
                              onClick={() => deactivateUser(f._id)}
                            >
                              Deactivate
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger"
                              style={{
                                width: '100%',
                                'border-radius': '15px',
                                border: 'none',
                                fontSize: '14px',
                              }}
                              onClick={() => activateUser(f._id)}
                            >
                              Activate
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CheckSuspects;
