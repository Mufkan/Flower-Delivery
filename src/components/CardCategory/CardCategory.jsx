import PropTypes from "prop-types";
import React from "react";
import { TextIconButton } from "../TextIconButton";
import "./style.css";

export const CardCategory = ({
  label = "Fresh Flowers",
  size,
  textIconButtonLabel = "Button",
  textIconButtonSizeDesktopStateClassName,
  textIconButtonArrowRightArrowRight = "public/images/arrow-right.svg",
  textIconButtonIconRight,
}) => {
  const handleShopNowClick = () => {
    console.log(`Clicked on "${label}" Shop now`);
  
  };
  return (
    <div className={`card-category size-1-${size}`}>
      <div className="label">
        <div className="fresh-flowers">{label}</div>
      </div>
      <TextIconButton
        arrowRightArrowRight={textIconButtonArrowRightArrowRight}
        className={textIconButtonSizeDesktopStateClassName}
        iconRight={textIconButtonIconRight}
        label={textIconButtonLabel}
        size={size === "mobile" ? "mobile" : "desktop"}
        state="default"
        onClick={handleShopNowClick}
      />
    </div>
  );
};

CardCategory.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
  textIconButtonLabel: PropTypes.string,
  textIconButtonArrowRightArrowRight: PropTypes.string,
  textIconButtonIconRight: PropTypes.bool,
};
