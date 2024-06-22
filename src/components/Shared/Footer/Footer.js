import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers is Updated');
      });


  }





  return (



    <>

    {
      footerSocial.map(f=> <footer className="footer-section bg-lighter rel z-1 mt-220">
      <div className="container">
        <div className="newsletter-inner bg-blue bgs-cover text-white rel z-3">
          <div className="for-adjust-spacing" />
          <div className="row  align-items-center align-items-xl-start">
            <div className="col-lg-6">
              <div className="newsletter-content p-60 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title">Our Newsletter</span>
                  <h2>Subscribe Our Newsletter to Get More Updates</h2>
                </div>
                <form onSubmit={handleSubscriber} className="newsletter-form" action="#">
                  <div className="newsletter-email">
                    <input name="subemail" type="email" placeholder="Enter Email Address" required />
                    <button type="submit">Sign up <i className="fas fa-angle-right" /></button>
                  </div>
                  <div className="newsletter-radios">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" id="wekly" name="example1" defaultChecked />
                   
                    </div> 
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" id="monthly" name="example1" />
                      
                    </div> 
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-images wow fadeInUp delay-0-4s">
                <img src="assets/images/newsletter/newsletter.png" alt="Newsletter" />
                <img src="assets/images/newsletter/circle.png" alt="shape" className="circle slideUpRight" />
                <img src="assets/images/newsletter/dots.png" alt="shape" className="dots slideLeftRight" />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-4 col-sm-6 col-7 col-small">
            <div className="footer-widget about-widget">
              {
                logo.map(l=>  <div className="footer-logo mb-20">
                <a href="/"><img src={l.logo} alt="Logo" /></a>
              </div>)
              }
             
              <p>{f.aboutText}</p>
              
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 col-5 col-small">
            <div className="footer-widget link-widget">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="list-style-two">
                <li><a href="/">Home</a></li>
                <li><a href="#about-sec">About</a></li>
                <li><a href="#services-sec">Services</a></li>
                <li><a href="#pricing-sec">Pricing Plan</a></li>
                <li><a href="#contact-sec">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-xl-4 col-md-4">
            {
              footerAddress.map(a=> <div className="footer-widget contact-widget">
              <h4 className="footer-title">Get in Touch</h4>
              <ul className="list-style-three">
                <li><i className="fas fa-map-marker-alt" /> {a.location}</li>
                <li><i className="fas fa-envelope-open" /> {a.emailAddress}</li>
                <li><i className="fas fa-phone" /> Call : {a.phoneNumber}</li>
              </ul>
              <div className="social-style-one mt-25">
                <a href={f.fblink}><i className="fab fa-facebook-f" /></a>
                <a href={f.inslink}><i className="fab fa-instagram" /></a>
                <a href={f.youlink}><i className="fab fa-youtube" /></a>
                
              </div>
            </div>)
            }
            
          </div>
        </div>
        {
          footerCopyright.map(c => <div className="copyright-area text-center">
          <p>{c.copyrightText}</p>
        </div> )
        }
    
        
      </div>
      <img className="dots-shape" src="assets/images/shapes/dots.png" alt="Shape" />
      <img className="tringle-shape" src="assets/images/shapes/tringle-two.png" alt="Shape" />
      <img className="circle-shape" src="assets/images/shapes/circle-two.png" alt="Shape" />
      <div className="left-circles" />
      <div className="right-circles" />
      <div className="bg-yellow-shape" />
    </footer>)
    }



    
    
    </>
  );
};

export default Footer;
