import React from "react";
import QRCode from "react-qr-code";

export default function GenerateQr() {
  const value = "track";
  return (
    <>
      <div className="row mt-5 m-0">
        <div className="col-2"></div>
        <div className="col-8">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
