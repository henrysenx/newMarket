import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import CustomButton from "../custom-button/CustomButton";

const Card = ({ property }) => {
  const { index, title, address } = property;
  return (
    <div id={`card-${index}`} className="card">
      <h4 className="title">{title.toUpperCase()}</h4>
      <p className="address">{address}</p>
      {title ? (
        <div className="button">
          <CustomButton inverted>View Details</CustomButton>
        </div>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
