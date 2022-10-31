import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import swal from "sweetalert";
import backImg from "../../res/images/reload/Arrowback.png";

export default function StartJourney() {
  const [qrData, setQrData] = useState("");

  const startJourn = function () {
    swal({
        title: "Checkin Successful",
        icon: "success",
        buttons: true
    }).then(() => {
        window.location.href = "/home"
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
                setQrData(result?.text);
                startJourn()
              }
              if (error) {
                console.log(error);
              }
            }}
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </>
  );
}
