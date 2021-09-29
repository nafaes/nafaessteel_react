import React from "react";

const Report = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        margin: "3rem auto",
      }}
    >
      <iframe
        style={{
          backgroundColor: "#fff",
          width: "80%",
          height: "100%",
        }}
        src="http://localhost:8088/NAFAES_ACCOUNT/frameset?__report=paymentvoucher.rptdesign&jouno=2&transtype=Payment Voucher"
        title="Iframe Example"
      ></iframe>
    </div>
  );
};

export default Report;
