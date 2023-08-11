import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import {CardCategory} from "../components/CardCategory/CardCategory"
import {CardItem} from "../components/CardItem/CardItem"
import {Footer} from "../components/Footer/Footer"
import { InputText } from "../components/InputText";
import {Navbar} from "../components/Navbar/Navbar"
import { TextIconButton } from "../components/TextIconButton";
import { BenefitBlock } from "../components/BenefitBlock/BenefitBlock";
import{ LeftColum } from "../components/LeftColm/LeftColm"
import "./style.css";
import { NavLink } from "react-router-dom";

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Çekilen verileri işleme
  })
  .catch(error => {
    console.error('Veri çekme hatası:', error);
  });

const handleShopNowClick = (category) => {
  console.log("Shop now", category);
};

export const ElementHomePage = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text:
        "Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!",
      author: "– Ronald Richards",
    },
    {
      text:
        "Ordered a gift online and it turned out to be the perfect choice! Impressed everyone with the quality. Highly recommend this shop!",
      author: "– Furkan Celik",
    },
    // Diğer slayt içerikleri buraya eklenebilir
  ];

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="element-home-page">
      <div className="div-2">
        <Navbar className="design-component-instance-node-2" size="desktop" />
        <div className="div-3">
            <div className="div-2">
              <LeftColum/>
            </div> 
          <div className="div-3 ">
            <div className="div-2">
              <CardCategory
                label="Fresh Flowers"
                size="desktop"
                textIconButtonArrowRightArrowRight="public/images/arrow-right.svg"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
              <CardItem className="card-item-instance" showDescription={false} size="desktop" />
              <CardCategory
                label="Live Plants"
                size="desktop"
                textIconButtonArrowRightArrowRight="public/images/arrow-right.svg"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
              <CardItem className="card-item-2" showDescription={false} size="desktop" />
              <CardCategory
                label="Fresheners"
                size="desktop"
                textIconButtonArrowRightArrowRight="public/images/arrow-right.svg"
                textIconButtonLabel="Shop now"
                textIconButtonSizeDesktopStateClassName="card-category-instance"
              />
            </div>
            <div className="div-2">
              <CardItem className="card-item-3" showDescription={false} size="desktop" onClick={() => handleShopNowClick("Dried Flowers")}/>
              <div className="card-category-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Dried Flowers</div>
                </div>
                <div className="text-icon-button-2"onClick={() => handleShopNowClick("Dried Flowers")}>
                  <img className="west" alt="West" src="public/images/arrow-left.svg" />
                  <div className="text-wrapper-8">Shop now</div>
                </div>
              </div>
              <CardItem className="card-item-4" showDescription={false} size="desktop" onClick={() => handleShopNowClick("Aroma Candels")} />
              <div className="card-category-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Aroma Candels</div>
                </div>
                <div className="text-icon-button-2" onClick={() => handleShopNowClick("Aroma Candels")}>
                  <img className="west" alt="West" src="public/images/arrow-left.svg" />
                  <div className="text-wrapper-8">Shop now</div>
                </div>
              </div>
              <CardItem className="card-item-5" showDescription={false} size="desktop" />
            </div>
          </div>
        </div>
        <div className="div-3">
          <div className="div-title">
            <h1 className="h-1">About us</h1>
          </div>
          <div className="right-colum">
            <div className="text-content">
              <div className="our-story">OUR STORY</div>
              <div className="heading-paragraph">
                <div className="text-wrapper-9">Kyiv LuxeBouquets</div>
                <p className="we-are-a-modern">
                  We are a modern local floral studio, which specializes in the design and delivery of unique bouquets.
                  We have the best florists who carefully select each look, our studio cooperates directly with farms
                  for growing different flowers, so we always have fresh flowers, which are collected by our florists in
                  exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house
                  plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make
                  someone&#39;s day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers
                  online has never been easier.
                </p>
              </div>
            </div>
            <NavLink to="/About">
            <Button label="LERN MORE" size="desktop-tablet" state="default" type="secondary" />
            </NavLink>
          </div>
        </div>
        <div className="div-3">
          <div className="deneme">
            <div className="text-wrapper-10">Why choose us ?</div>
          </div>
          <div className="denemeblock">
            <BenefitBlock
              className="design-component-instance-node-3"
              description={`
At our floral studio, our professional florists craft the most elegant and stylish
bouquets using only the freshest and highest quality materials available. We
stay up-to-date with the latest floral design trends and offer unique 
arrangements that are sure to impress. Let us brighten up your day with our
stunning bouquets and same-day delivery service.
              `}
              label="Stylish bouquets by florists"
              size="desktop-tablet"
            />
            <BenefitBlock
              className="design-component-instance-node-3"
              description={`
Never miss a moment with our on-time flower delivery service. Our couriers
will deliver your bouquet personally, without boxes, to ensure it arrives in 
perfect condition. Trust us to deliver your thoughtful gift reliably.
              `}
              label="On-time delivery"
              size="desktop-tablet"
              
            />
            <BenefitBlock
              className="design-component-instance-node-3"
              description={`
You can feel secure when placing an order with us, as we use industry-
standard security measures to protect your payment information. Your
transaction will be safe and hassle-free, so you can shop with confidence.
              `}
              label="Safe payment"
              size="desktop-tablet"
            />
            <BenefitBlock
              className="design-component-instance-node-3"
              description={`
With our subscription service tailored to your specific needs, you can enjoy
the convenience of having beautiful bouquets delivered straight to your 
door at regular intervals. Our flexible service is perfect for busy individuals or
those who want to ensure they always have fresh flowers on hand. You'll save
time and money with this hassle-free solution to your floral needs.
              `}
              label="Subscription by your needs"
              size="desktop-tablet"
            />
          </div>
        </div>
        <div className="div-3">
          <div className="callcenter">
            <div className="top-block">
              <div className="text-wrapper-10">To Contact Us</div>
              <div className="div-4">
                <p className="p">We will call you back</p>
                <div className="input-button">
                <div class="inputx ">
                  <input type="text" class="form-control" placeholder="+380 XX XXX XX XX" aria-label="+380 XX XXX XX XX" aria-describedby="addon-wrapping"/>
                </div>
                  <Button
                    className="button-2"
                    label="BOOK A CALL"
                    size="desktop-tablet"
                    state="default"
                    type="primary"
                  />
                </div>
              </div>
            </div>
            <div className="bottom-block">
              <div className="element-colum">
                <div className="label-3">
                  <div className="text-wrapper-11">Phone</div>
                </div>
                <div className="phonenumber-button">
                  <TextIconButton
                    className="design-component-instance-node-3"
                    iconRight={false}
                    label="+380980099777"
                    size="desktop"
                    state="default"
                  />
                  <TextIconButton
                    className="design-component-instance-node-3"
                    iconRight={false}
                    label="+380980099111"
                    size="desktop"
                    state="default"
                  />
                </div>
              </div>
              <div className="element-nd-colum">
                <div className="label-3">
                  <div className="text-wrapper-11">Address</div>
                </div>
                <div className="locatin">
                  <div className="info-map-link">
                    <p className="text-wrapper-12">OPENING HOURS: 8 TO 11 P.M.</p>
                    <TextIconButton
                      className="text-icon-button-instance"
                      iconRight={false}
                      label="15/4 Khreshchatyk Street, Kyiv"
                      size="desktop"
                      state="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Right colum" src="public/images/right-colum.png" />
        </div>
        <div className="section-service">
          <div className="text-wrapper-13">Our Service</div>
        </div>
        <div className="div-3">
          <img className="image-3" src="public/images/flower.png" alt="" />
          <div className="content-wrapper">
            <div className="content">
              <div className="text-content-2">
                <div className="service-2">SERVICE</div>
                <div className="div-4">
                  <div className="text-wrapper-14">Flower Subcriptions</div>
                  <p className="text-wrapper-15">
                    Experience the convenience and savings of regular flower deliveries with our flexible subscription
                    service - up to 30% more profitable than one-time purchases.
                  </p>
                </div>
              </div>
              <Button
                className="button-3"
                label="SUBSCRIBE NOW"
                size="desktop-tablet"
                state="pressed"
                type="secondary"
              />
            </div>
          </div>
        </div>
        <div className="service-section">
          <div className="content-2">
            <div className="div-5">
              <div className="service-3">SERVICE</div>
              <div className="div-6">
                <div className="wedding-event-decor">Wedding &amp; Event Decor</div>
                <p className="text-wrapper-16">
                  Let our team of expert florists and designers create stunning, on-trend floral décor for your special
                  day. Trust us to bring your vision to life.
                </p>
              </div>
            </div>
            <Button label="INQUIRE NOW" size="desktop-tablet" state="default" type="tertiary" />
          </div>
        </div>
        <div className="section-reviews">
          <div className="content-3 carousel slide">
            <div className="div-6">
              <div className="div-5">
                <div className="google">
                  <img
                    className="google-logo"
                    alt="Google logo"
                    src="public/images/google-logo.png"
                  />
                  <div className="text-wrapper-12">REVIEWS</div>
                </div>
                <div className="text-wrapper-10">Our Clients say</div>
              </div>
              <div className="slider">
                <div className="mask">
                  <button className="img-2 left-arrow" onClick={prevSlide}>
                    &#10094;
                  </button>
                  <div className="slide">
                    <p className="ordered-flowers">
                      <span className="span">“</span>
                      <span className="text-wrapper-17">
                        {slides[currentSlide].text}
                      </span>
                      <span className="span">”</span>
                    </p>
                    <div className="text-wrapper-18">
                      {slides[currentSlide].author}
                    </div>
                  </div>
                  <button className="img-2 right-arrow" onClick={nextSlide}>
                    &#10095;
                  </button>
                </div>
                <div className="slide-nav">
                  {/* Slayt navigasyon noktaları buraya eklenir */}
                </div>
              </div>
            </div>
            <Button
              className="button-3"
              label="READ REVIEWS"
              size="desktop-tablet"
              state="pressed"
              type="secondary"
            />
          </div>
          <Footer className="footer-instance" />
        </div>
      </div>
    </div>
  );
};
