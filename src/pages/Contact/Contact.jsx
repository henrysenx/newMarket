import React from "react";
import "./Contact.scss";
import ContactButton from "../../components/custom-button/ContactButton";

const Contact = () => {
  return (
    <div className="concat ">
      <div className="test">
        <p className="title1">
          GET LISTED ON <br />{" "}
          <strong style={{ marginLeft: "1rem" }}>NGALABA</strong>
        </p>

        <div className="btn1">
          <ContactButton>START HERE</ContactButton>
        </div>
      </div>
      <div className="contact"></div>
      <div className="test">
        <p className="title2">
          <strong style={{ marginLeft: "1.1rem" }}>NEED HELP ?</strong> <br />{" "}
          REACH US NOW
        </p>
        <div className="btn2">
          <ContactButton>CONTACT US</ContactButton>
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
          <ContactButton>SUGGEST HERE</ContactButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
