
import PropTypes from "prop-types";
import React from "react";
import { ArrowRight } from "../ArrowRight";
import "./style.css";

export const TextIconButton = ({
  label = "Button",
  iconRight = true,
  withText = true,
  iconLeft,
  size,
  state,
  className,
  arrowRightArrowRight = "public/images/arrow-right.svg",
  onClick,
}) => {
  const handleButtonClick = () => {
    console.log(`Clicked on "${label}" button`);
    // Add any additional actions you want to perform when the button is clicked
    if (onClick) {
      onClick(); // Call the onClick event handler if provided
    }
  };


  return (
    
    <div className={`text-icon-button ${state} ${className}`} onClick={handleButtonClick}>
      {withText && <div className={`text-wrapper state-${state} size-0-${size}`}>{label}</div>}
      {iconRight && <ArrowRight arrowRight={arrowRightArrowRight} className="arrow-right-instance" />}
    </div>
  );
};

TextIconButton.propTypes = {
  label: PropTypes.string,
  iconRight: PropTypes.bool,
  withText: PropTypes.bool,
  iconLeft: PropTypes.bool,
  size: PropTypes.oneOf(["desktop", "mobile"]),
  state: PropTypes.oneOf(["disabled", "hover-desktop", "pressed", "default"]),
  arrowRightArrowRight: PropTypes.string,
};
