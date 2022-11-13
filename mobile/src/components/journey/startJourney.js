import axios from "axios";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import swal from "sweetalert";
import backImg from "../../res/images/reload/Arrowback.png";

export default function StartJourney() {
  const [qrData, setQrData] = useState("");
  const [sent, setSent] = useState(false)

  const startJourn = function (code) {
    console.log(code)
    setQrData(code.toString())
    console.log(qrData)
    
    if(!sent) {
      startJourney(code)
      // if(localStorage.getItem('checkedIn') == true) {
      //   startJourney(code)
      // }
      // else {
      // }
    }
  }

  // Start journey
  const startJourney = function (code) {
    console.log('jjj')
    const data = {
      timetableId: code,
      userId: localStorage.getItem('userId')
    }
    axios.post('http://localhost:8070/api/passenger/startJourney', data).then((res) => {
      swal({
        title: "Checkin Successful",
        icon: "success",
        buttons: true
    }).then(() => {
      localStorage.setItem('checkedIn', true)
        window.location.href = "/home"
    })
    })
  }

  return (
    <>
      <div className="m-5">
        <img src={backImg} alt="" style={{ width: "10px" }} />
        <div className="mt-3">
          <QrReader
            onResult={(result, error) => {
              if (result) {
                // setQrData(result.text);
                setSent(true)
                startJourn(result.text)
              }
              if (error) {
                console.log(error);
              }
            }}
            style={{ width: "50%" }}
          />
        </div>
        {/* {{ qrData }} */}
      </div>
    </>
  );
}
