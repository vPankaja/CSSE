import axios from "axios";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import swal from "sweetalert";
import backImg from "../../res/images/reload/Arrowback.png";

export default function EndJourney() {
  const [qrData, setQrData] = useState("");
  const [sent, setSent] = useState(false)

  // End journey
  const endJourney = function (code) {
    const data = {
      timetableId: code,
      userId: localStorage.getItem('userId')
    }
    axios.post('http://localhost:8070/api/passenger/endJourney', data).then((res) => {
      swal({
        title: "Checkout Successful",
        icon: "success",
        buttons: true
    }).then(() => {
      localStorage.setItem('checkedIn', false)
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
                endJourney(result.text)
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
