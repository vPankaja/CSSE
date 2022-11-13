import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../../res/css/customer.css';
import '../../res/css/plantimetable.css';

AOS.init({
  duration: '2000',
});

export default function CalculatePenalty() {
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [msg, setMsg] = useState('');

  const postVehicle = function () {
    if (email.length == 0 || balance.length == 0) {
      swal({
        title: 'All fields must be filled',
        icon: 'warning',
        buttons: true,
      });
    } else {
      const data = {
        email: email,
        balance: balance,
      };
      axios
        .post('http://localhost:8070/api/manager/calculate', data)
        .then((res) => {
          swal({
            title: 'Successfully Updated Balance',
            icon: 'success',
            buttons: true,
          }).then(() => {
            window.location.href = '/checkSuspects?updated';
            setMsg('Successfully Updated Balance');
          });
        });
    }
  };

  const showErrorPopup = function (message) {
    swal({
      title: message,
      icon: 'error',
      buttons: true,
    }).then(() => {});
  };

  return (
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
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
          <ul class="links">
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
              <Link to="/dashboard">
                <div class="button">Logout</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          fontSize: '22px',
          marginBottom: '-50px',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <strong style={{ color: 'darkblue' }}>Calculate Penalty</strong>
        <br></br>
        <span style={{ fontSize: '10px' }}>
          Reload your account without any delay to continue your journey
        </span>
      </div>

      <div className="container2">
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder2"></div>
            <div className="plan1">
              <br></br>

              <div style={{ marginBottom: '20px' }}>
                <input
                  className="input2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <input
                  className="input2"
                  type="text"
                  name="balance"
                  placeholder="Transfer Amount"
                  onChange={(e) => {
                    setBalance(e.target.value);
                  }}
                ></input>
              </div>

              <div style={{ marginLeft: '100px' }}>
                <button class="btn1" onClick={postVehicle}>
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
