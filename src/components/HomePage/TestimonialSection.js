import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (

    <>

<section className="feedback-section-two rel z-1 py-130 rpy-100">
  <div className="container">
    <div className="row align-items-end mb-20">
      <div className="col-xl-5 col-lg-8">

        {
          testimonialtext.map(a=> <div className="section-title mb-20">
          <span className="sub-title">{a.testimonialText}</span>
          <h2>{a.testimonialHeading}</h2>
        </div>)
        }
        
      </div>
      <div className="col-xl-7 col-lg-4">
        <div className="slider-arrow-btns text-lg-right mb-30">
        </div>
      </div>
    </div>
    <div className="feedback-active  d-flex">

      
    {
      testimonial.map(t=> <div className="feedback-item-two ">
      <img src={t.image} alt="Logo" />
      <p>{t.desc}</p>
      <div className="feedback-author">
        <i className="flaticon-quote-1" />
        <div className="author-content">
          <h3>{t.personName}</h3>
          <span>{t.personTitle}</span>
        </div>
      </div>
    </div>)
    }
    
      
      
      
    </div>
  </div>
</section>



    </>



  );
};

export default TestimonialSection;
