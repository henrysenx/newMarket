import React from "react";
import "./Popular.scss";
import partner from "../../assets/partners-logo.png";

const Popular = () => {
  return (
    <div className="popular">
      <p className="pop">
        Popular: Lagos <span>|</span> FCT Abuja <span>|</span> Abia{" "}
        <span>|</span> Kano <span>|</span> Edo
      </p>
      <div className="partner">
        <p className="pup">In partnership with: </p>
        <img src={partner} alt="partner" className="part" />
      </div>
    </div>
  );
};

export default Popular;
