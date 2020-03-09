import React from "react";
import "./SliderComponent.scss";
import SliderContainer from "../../pages/slider-container/SliderContainer";
import pos from "../../assets/pos.jpg";
import PlayIcon from "@material-ui/icons/PlayArrow";

const SliderComponent = () => {
  return (
    <div className="slider">
      <div className="video">
        <h2 className="heading">
          <span style={{ color: "red" }}>GET </span> YOUR ONLINE POS
        </h2>

        <hr className="divider1" />
        <div className="image1">
          <div className="imagex">
            <img src={pos} alt="map" />
            <div className="comp">
              <div className="play">
                <PlayIcon className="icon" style={{ fontSize: "4rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <h2 className="heading2">
          <span style={{ color: "red" }}>FEATURED</span> BUSINESSES
        </h2>
        <hr className="divider2" />
        <div className="gt">
          <SliderContainer />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
