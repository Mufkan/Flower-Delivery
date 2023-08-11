import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ label = "Button", rightIcon, leftIcon, size, type, state, className, onClick }) => {
  const handleClick = () => {
    console.log("Butona basıldı");
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <div className={`button state-0-${state} size-7-${size} ${type} ${className}`} onClick={handleClick}>
      <div className="div">{label}</div>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  size: PropTypes.oneOf(["desktop-tablet", "mobile"]),
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  state: PropTypes.oneOf(["hover-desktop", "disabled", "pressed", "default"]),
  onClick: PropTypes.func,
};
