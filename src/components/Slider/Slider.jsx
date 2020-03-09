import React from "react";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <div className="video">
        <h2 className="heading">
          <span style={{ color: "red" }}>GET </span> YOUR ONLINE POS
        </h2>

        <hr className="divider1" />
        <div className="image1">pos</div>
      </div>
      <div className="slide">
        <h2 className="heading2">
          <span style={{ color: "red" }}>FEATURED</span> BUSINESSES
        </h2>
        <hr className="divider2" />
      </div>
    </div>
  );
};

export default Slider;
