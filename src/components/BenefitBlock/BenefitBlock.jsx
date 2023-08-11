import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BenefitBlock = ({
  label = "Stylish bouquets by florists",
  description = `The task of the organization, especially the strengthening and development of the 
  structure allows us to assess the importance of the directions of progressive development. `,
  
  size,
  className,
}) => {
  return (
    <div className={`benefit-block size-9-${size} ${className}`}>
      <div className="stylish-bouquets-by">{label}</div>
      <p className="the-task-of-the">{description}</p>
    </div>
  );
};

BenefitBlock.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(["desktop-tablet", "mobile"]),
};
