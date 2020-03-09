import React from "react";
import "./Contact.scss";
import CustomButton from "../custom-button/CustomButton";

const Contact = () => {
  return (
    <div className="concat ">
      <div className="test">
        <p className="title1">
          GET LISTED ON <br /> <strong>NGALABA</strong>
        </p>

        <div className="btn1">
          <CustomButton>START HERE</CustomButton>
        </div>
      </div>
      <div className="contact"></div>
      <div className="test">
        <p className="title2">
          <strong style={{ marginLeft: "1.1rem" }}>NEED HELP ?</strong> <br />{" "}
          REACH US NOW
        </p>
        <div className="btn2">
          <CustomButton>CONTACT US</CustomButton>
        </div>
      </div>
      <div className="contact"></div>
      <div className="test">
        <p className="title2">
          <strong>SUGGEST A NEW </strong>
          <br />
          <span style={{ marginLeft: "2rem" }}> MARKET</span>
        </p>
        <div className="btn2">
          <CustomButton>SUGGEST HERE</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
