

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ArrowRight = ({ className, arrowRight = "/img/arrow-right-10.svg" }) => {
  return <img className={`arrow-right ${className}`} alt="Arrow right" src={arrowRight} />;
};

ArrowRight.propTypes = {
  arrowRight: PropTypes.string,
};
