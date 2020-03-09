import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import ContactButton from "../custom-button/ContactButton";
import EditIcon from "@material-ui/icons/Edit";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo2" />
      </Link>
      <div className="options">
        <ContactButton>
          {" "}
          <span style={{ marginTop: "0.5rem", marginRight: "1rem" }}>
            <EditIcon />
          </span>
          Request to be listed
        </ContactButton>
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/">
          Markets
        </Link>
        <Link className="option" to="/">
          Sugest a New Market
        </Link>
        <Link className="option" to="/">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
