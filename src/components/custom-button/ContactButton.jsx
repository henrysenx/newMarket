import React from "react";
import "./ContactButton.scss";

const ContactButton = ({ children, ...otherProps }) => {
  return (
    <button className="contact-button" {...otherProps}>
      {children}
    </button>
  );
};

export default ContactButton;
