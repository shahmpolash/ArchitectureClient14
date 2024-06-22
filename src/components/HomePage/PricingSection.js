import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (

    

    <>
    <section className="pricing-section rel z-1 bg-gray pt-130 rpt-100 pb-100 rpb-70" id='pricing-sec'>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-8 col-md-10">
        <div className="section-title text-center text-white mb-45">
          <span className="sub-title">Pricing Package</span>
          <h2>Our Best Pricing Package</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">

    {
              pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-2s">
                <h5 className="price-title">Basic Plan</h5>
                <span className="price">{b.packagePrice}</span>
                
                
                <Link to={`/order-now/${b._id}`} className="theme-btn pricing-one__btn"> 
                {b.packageButtonText} <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                <ul className="list-style-one">
                  <li>{b.packagePointOne}</li>
                  <li>{b.packagePointTwo}</li>
                  <li>{b.packagePointThree}</li>
                  <li>{b.packagePointFour}</li>
                  <li>{b.packagePointFive}</li>
                  <li>{b.packagePointSix}</li>
                  <li>{b.packagePointSeven}</li>
                </ul>
              </div>
            </div>)}

            {
              pricing.map(s => s.packageName === 'Premium' && <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-4s">
                <h5 className="price-title">{s.packageName} Plan</h5>
                <span className="price">{s.packagePrice}</span>
              
                <Link to={`/order-now/${s._id}`} className="theme-btn pricing-one__btn"> 
                {s.packageButtonText} <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                <ul className="list-style-one">
                  <li>{s.packagePointOne}</li>
                  <li>{s.packagePointTwo}</li>
                  <li>{s.packagePointThree}</li>
                  <li>{s.packagePointFour}</li>
                  <li>{s.packagePointFive}</li>
                  <li>{s.packagePointSix}</li>
                  <li>{s.packagePointSeven}</li>
                  
                </ul>
              </div>
            </div> )}

            {
              pricing.map(p => p.packageName === 'Standard' && <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-4s">
                <h5 className="price-title">{p.packageName} Plan</h5>
                <span className="price">{p.packagePrice}</span>
                
                <Link to={`/order-now/${p._id}`} className="theme-btn pricing-one__btn"> 
                {p.packageButtonText} <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                <ul className="list-style-one">
                  <li>{p.packagePointOne}</li>
                  <li>{p.packagePointTwo}</li>
                  <li>{p.packagePointThree}</li>
                  <li>{p.packagePointFour}</li>
                  <li>{p.packagePointFive}</li>
                  <li>{p.packagePointSix}</li>
                  <li>{p.packagePointSeven}</li>
                  
                </ul>
              </div>
            </div>)}
      
      
    </div>
  </div>
  <div className="section-alpha-text">Pricing </div>
  <img className="dots-shape" src="assets/images/shapes/white-dots.png" alt="Shape" />
  <img className="tringle-shape" src="assets/images/shapes/tringle.png" alt="Shape" />
  <img className="close-shape" src="assets/images/shapes/yellow-close.png" alt="Shape" />
  <div className="left-circles" />
  <div className="right-circles" />
</section>

    </>
  );
};

export default PricingSection;