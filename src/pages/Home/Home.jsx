import React from "react";
import "./Home.scss";
import CustomButton from "../../components/custom-button/CustomButton";
import map from "../../assets/map.jpg";
import Contact from "../Contact/Contact";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import Footer from "../../components/footer/Footer";
import Popular from "../../components/popular/Popular";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../../assets/app.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1 className="title">SEARCH, CONNECT, TRANSACT</h1>
        <div className="dou">
          <div className="maq">
            <h3 className="subtitle">National Map of all Markets</h3>
            <hr className="divider" />
            <div className="image">
              <img src={map} alt="map" />
            </div>

            <div className="buttons">
              <CustomButton>
                <span style={{ marginTop: "0.5rem", marginRight: "1rem" }}>
                  <SearchIcon />
                </span>
                Advanced Search
              </CustomButton>
              <CustomButton>
                <span style={{ marginTop: "0.5rem", marginRight: "1rem" }}>
                  <MenuIcon />
                </span>
                View All Markets
              </CustomButton>
            </div>
          </div>

          <div className="dua">
            <h1 className="duat">
              Over <span style={{ color: "green" }}>973</span> Markets
              <span> &</span>
              <br />
              <span style={{ color: "green" }}>45,779 </span> businesses listed
            </h1>
            <div className="image3">
              <img src={app} alt="app" className="app1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SliderComponent />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Popular />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
