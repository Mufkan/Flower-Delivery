import PropTypes from "prop-types";
import React from "react";
import { Menu } from "./Menu";
import "./style.css";

export const NavbarLinkButton = ({ label = "Link", size, className, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button className={`navbar-link-button  ${size} ${className}`} onClick={handleClick}>
      {size === "desktop" && <div className="link">{label}</div>}

      {["mobile", "tablet"].includes(size) && <Menu className="menu-instance" color="#121212" />}
    </button>
    
  );
};

NavbarLinkButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  onClick: PropTypes.func,
};
