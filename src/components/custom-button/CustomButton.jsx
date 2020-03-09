import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, inverted, contact, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        contact ? "contact" : ""
      }  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
