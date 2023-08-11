
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardItem = ({
  label = "Bouquets Fresh Flowers",
  price = "price 70$",
  showDescription = true,
  size,
  className,
}) => {
  return (
    <div className={`card-item size-3-${size} ${className}`}>
      {showDescription && (
        <div className="description">
          <div className="bouquets-fresh">{label}</div>
          <div className="price">{price}</div>
        </div>
      )}
    </div>
  );
};

CardItem.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string,
  showDescription: PropTypes.bool,
  size: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
};
