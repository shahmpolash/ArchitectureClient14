import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    <>
    {
      banners.map(b=><section className="hero-section-two bgs-cover rel z-2 pt-205 pb-250 rpt-150 rpb-50" style={{backgroundImage: 'url(https://i.ibb.co/8X37gPs/hero-bg.png)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="hero-content-two text-center text-white rpt-20">
              
              <h1 className="mb-15 wow fadeInUp delay-0-4s">{b.bannerHeading}</h1>
              <p className="wow fadeInUp delay-0-5s">{b.bannerText}</p>
              <div className="hero-btns mt-40 wow fadeInUp delay-0-8s">
                <a href={b.buttonURL} className="theme-btn style-four">{b.buttonText} <i className="fas fa-arrow-right" /></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-alpha-text mb-250"></div>
      <img className="dots-shape" src="assets/images/shapes/white-dots.png" alt="Shape" />
      <img className="tringle-shape" src="assets/images/shapes/white-tringle.png" alt="Shape" />
      <img className="close-shape" src="assets/images/shapes/white-close.png" alt="Shape" />
      <div className="left-circles" />
      <div className="right-circles" />
    </section> )
    }

{
  banners.map(b=><section className="partners-section-two rel bg-gray pb-60 rpb-30">
  <div className="container">
    <div className="partner-dashboard mb-75">
      <img src={b.imageOne} alt="Dashboard" />
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-10">
        <div className="section-title text-center text-white mb-45">
          
        </div>
      </div>
    </div>
    <div className="partner-two-wrap">
      
    </div>
  </div>
  <div className="bg-yellow-shape" />
</section> )
}








    </>
  );
};

export default Banner;
