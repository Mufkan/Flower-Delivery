import React from "react";
import "./style.css";

export const LeftColum = () => {
  return (
    <div className="left-colum">
      <div className="row">
        <div className="heading">
          <div className="overlap-group">
            <h1 className="text-wrapper">Kyiv LuxeBouquets</h1>
            <div className="div">®</div>
          </div>
        </div>
        <p className="p">
          <span className=" discover-text">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: <br />
             Spread Joy with Our{" "}
          </span>
          <span className="text-wrapper-2">Online Flower</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">Delivery Service</span>
        </p>
      </div>
      <div className="row-2">
        <div className="decor-colum">
          <img className="img-hero" alt="Img hero" src="public/images/img-hero.png" />
        </div>
        <div className="p-wrapper">
          <p className="text-wrapper-3">
            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and
            gifts today.
          </p>
        </div>
      </div>
    </div>
  );
};
