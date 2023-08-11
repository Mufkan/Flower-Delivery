
import React from "react";
import { BrandsFacebook } from "../BrandsFacebook";
import { BrandsInstagram } from "../BrandsInstagram";
import { BrandsPinterest } from "../BrandsPinterest";
import { BrandsTelegram } from "../BrandsTelegram";
import { BrandsTwitter } from "../BrandsTwitter";
import { Button } from "../Button";
import { InputText } from "../InputText";
import "./style.css";
import NavItem from "../Context/NavItem";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="wrap-footer">
        <p className="remember-to-offer">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds
          you 7 days before. No spam or sharing your address
        </p>
        <div className="form-block">
        <div class="inputx ">
                  <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="addon-wrapping"/>
                </div>
          <Button className="button-instance" label="REMIND" size="desktop-tablet" state="default" type="primary" />
        </div>
      </div>
      <div className="wrap-footer-2">
        <div className="text-wrapper-2">Contact Us</div>
        <div className="wrap-links">
          <div className="text-wrapper-3">Address</div>
          <div className="text-wrapper-4">15/4 Khreshchatyk Street, Kyiv</div>
        </div>
        <div className="wrap-links">
          <div className="text-wrapper-3">Phone</div>
          <div className="text-wrapper-4">+380980099777</div>
        </div>
        <div className="wrap-links-2">
          <div className="text-wrapper-3">General Enquiry:</div>
          <div className="text-wrapper-5">Kiev.Florist.Studio@gmail.com</div>
        </div>
        <div className="social-links">
          <div className="follow-us">Follow Us</div>
          <div className="social-m-link">
            <BrandsInstagram brandsInstagram="/img/brands-instagram.svg" className="design-component-instance-node" />
            <BrandsPinterest className="design-component-instance-node" />
            <BrandsFacebook className="design-component-instance-node" />
            <BrandsTwitter brandsTwitter="/img/brands-twitter.svg" className="design-component-instance-node" />
            <BrandsTelegram className="design-component-instance-node" />
          </div>
        </div>
      </div>
      <div className="wrap-footer-3">
        <div className="text-wrapper-2">Shop</div>
        <div className="wrap-links-2">
          <div className="text-wrapper-6">All Products</div>
          <div className="text-wrapper-5">Fresh Flowers</div>
          <div className="text-wrapper-5">Dried Flowers</div>
          <div className="text-wrapper-5">Live Plants</div>
          <div className="text-wrapper-5">Designer Vases</div>
          <div className="text-wrapper-5">Aroma Candles</div>
          <div className="text-wrapper-5">Freshener Diffuser</div>
        </div>
        <div className="service">Service</div>
        <div className="wrap-links-2">
          <div className="text-wrapper-6">Flower Subcription</div>
          <div className="text-wrapper-5">Wedding &amp; Event Decor</div>
        </div>
      </div>
      <div className="wrap-footer-2">
        <div className="text-wrapper-2">About Us</div>
        <div className="wrap-links-2">
          <div className="text-wrapper-6">Our story</div>
          <div className="text-wrapper-5">Blog</div>
        </div>
        <div className="wrap-links-2">
          <div className="text-wrapper-6">Shipping &amp; returns</div>
          <div className="text-wrapper-5">Terms &amp; conditions</div>
          <div className="text-wrapper-5">Privacy policy</div>
          <NavItem/>
        </div>
      </div>
    </div>
  );
};
