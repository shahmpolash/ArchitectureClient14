import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>
    {
      about.map(a=> <section className="core-features rel z-1 pb-130 rpb-100 mt-100" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="core-feature-content rmb-55 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title">About Us</span>
                <h2>{a.aboutHeading}</h2>
              </div>
              <p>{a.aboutDetails}</p>
              <a href="#contact-sec" className="theme-btn style-three mt-25">{a.aboutText} <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="core-feature-image text-lg-right wow fadeInRight delay-0-2s">
              <img src={a.aboutImgOne} alt="Feature" />
            </div>
          </div>
        </div>
      </div>
    </section>)
    }
















    </>
  );
};

export default AboutSection;
