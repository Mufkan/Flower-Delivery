import { Button } from "../components/Button";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import "./style.css";


export function About() {

    return(
        <>
         <div className="bordercolor">
          <div className="element-about-us">
            <div className="body">
              <Navbar className="navbar-instance" size="desktop" />
              <div className="div-2">
                <div className="container"> 
                  <div className="grid-colum-left">
                    <div className="content">
                      <div className="div-3">
                        <div className="div-3">
                          <h1 className="h-1">Our Story</h1>
                          <div className="text-wrapper-7">About</div>
                          <div className="text-wrapper-8">Kyiv LuxeBouquets</div>
                        </div>
                        <p className="discover-uniquely">
                          <span className="span">
                            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
                          </span>
                          <span className="text-wrapper-9">&nbsp;</span>
                          <span className="text-wrapper-10">Online Flower Delivery Service</span>
                        </p>
                      </div>
                      <img
                        className="img"
                        alt="Social m link"
                        src="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/social-m-link.svg"
                      />
                    </div>
                  </div>
                  <div className="grid-colum-right">
                    <div className="hero-img">
                      <img
                        className="img-2"
                        alt="Image"
                        src="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/image.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-our-story">
                <div className="text-content">
                  <div className="div-3">
                    <div className="text-wrapper-11">OUR STORY</div>
                    <div className="our-founder-s">Our Founder&#39;s Passion</div>
                  </div>
                  <p className="kyiv-luxebouquets">
                    Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska&nbsp;&nbsp;with the goal of bringing unique and
                    exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his
                    vision was to create a local floral studio that would specialize in the creation and delivery of fresh,
                    beautiful, and distinctive bouquets.
                  </p>
                </div>
              </div>
              <div className="div-2">
                <div className="rectangle-wrapper">
                  <img
                    className="img-6"
                    alt="Rectangle"
                    src="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/rectangle-74.png"
                  />
                </div>
                <div className="text-content-wrapper">
                  <div className="text-content-2">
                    <div className="text-wrapper-12">Expertly Crafted Bouquets</div>
                    <p className="p">
                      At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully
                      select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets.
                      We work directly with farms to source the highest quality flowers, and our skilled florists expertly
                      craft each bouquet to perfection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-2">
                <div className="div-wrapper">
                  <div className="text-content-2">
                    <div className="text-wrapper-12">Bouquets, Gifts &amp; Ambiance</div>
                    <p className="p">
                      In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and
                      fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers,
                      plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery
                      throughout Kyiv.
                    </p>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/rectangle-75.png"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="rectangle-wrapper">
                  <img
                    className="rectangle-2"
                    alt="Rectangle"
                    src="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/rectangle-76.png"
                  />
                </div>
                <div className="text-content-wrapper">
                  <div className="text-content-2">
                    <div className="text-wrapper-12">Making Every Day Special</div>
                    <p className="p">
                      Our mission is simple: to make every day special and memorable for our customers. We are dedicated to
                      providing the highest quality flowers, exceptional customer service, and a seamless online experience
                      that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv
                      LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and
                      gifts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-our-story">
                <div className="text-content">
                  <div className="div-3">
                    <div className="text-wrapper-13">Discover Our Beautiful Bouquets</div>
                  </div>
                  <p className="text-wrapper-14">
                    Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the
                    button below to start shopping
                  </p>
                </div>
                <div className="input-button">
                  <Button className="button-2" label="SHOP NOW" size="desktop-tablet" state="default" type="primary" />
                </div>
              </div>
              <Footer
                brandsTwitterBrandsTwitter="https://generation-sessions.s3.amazonaws.com/e9c0a27c15ae0aa96246bf6fd63e8245/img/brands-twitter-2.svg"
                className="footer-instance"
              />
            </div>
          </div>
         </div>  
        
        </>
    )
    
}