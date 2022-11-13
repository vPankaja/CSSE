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

const MonitorNetwork = () => {
  const [routes, setRoutes] = useState([]);

  const getAllRoutes = function () {
    axios
      .get('http://localhost:8070/api/manager/monitorRoutes')
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
        <strong style={{ color: 'darkblue' }}>Monitor Network</strong>
        <br></br>
      </div>
      <div className="container2">
        <div className="register-photo">
          <div>
            <div className="container">
              <div>
                <Link to="/routelist">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-arrow-back-up"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {' '}
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{' '}
                      <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />{' '}
                    </svg>{' '}
                    All Routes
                  </a>
                </Link>
              </div>
              <div className="row">
                {routes.map((route) => (
                  <div className="col-sm-6 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          trafficType : {route._id}
                        </h5>
                        <p className="card-text">
                          Count : {route.data[0].count}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorNetwork;
