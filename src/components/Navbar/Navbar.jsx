import PropTypes from "prop-types";
import React from "react";
import { NavbarLinkButton } from "../NavbarLinkButton/NavbarLinkButton";
import "./style.css";
import "./Menu"
import { NavLink } from "react-router-dom";
import { ShoppingBag } from "../../ShoppingBag/ShoppingBag";


export const Navbar = ({ size, className }) => {
  const handleShopClick = () => {
    console.log("Shop link clicked!");
  };

  const handleContactClick = () => {
    console.log("Contact link clicked!");
  };

  const handleSignInClick = () => {
    console.log("Sign in link clicked!");
  };

  const handleCartClick = () => {
    console.log("Cart link clicked!");
  };

  return (

        <div className={`navbar  ${size} ${className}`}>
          <div className="nav-menu-left">
            {size === "desktop" && (
              <>
                <NavLink  to="/Shop">
                  <NavbarLinkButton label="Shop" size="desktop" onClick={handleShopClick} />
                </NavLink>
                <NavLink to="/About">
                <NavbarLinkButton label="Contact" size="desktop" onClick={handleContactClick} />
                </NavLink>
              </>
            )}

            {["mobile", "tablet"].includes(size) && (
              <div className="menu-wrapper">
                <Menu className="instance-node" color="#121212" />
              </div>
            )}
          </div>
          <div className="navmenu-right">
            {size === "desktop" && (
              <>
  
              <NavLink to="/SingIn">
                <NavbarLinkButton label="Sign in" size="desktop" onClick={handleSignInClick} />
                </NavLink>
                <NavLink to="/Cart">
                <NavbarLinkButton label="Cart" size="desktop" onClick={handleCartClick} />
                </NavLink>  
              </>
            )}

            {["mobile", "tablet"].includes(size) && (
              <div className="shopping-bag-wrapper">
                <ShoppingBag className="instance-node" />
              </div>
            )}
          </div>
        </div>

      
  );
};

Navbar.propTypes = {
  size: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
