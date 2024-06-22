import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (


    <>

    {
      countersec.map(c=> <div className="counter-section-two rel z-2">
      <div className="container">
        <div className="counter-inner-two bg-blue bgs-cover text-white rel z-3" style={{backgroundImage: 'url(assets/images/shapes/counter-bg.png)'}}>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="success-item style-two wow fadeInUp delay-0-2s">
                <i className="flaticon-market" />
                <span className="count-text" data-speed={3000} data-stop={250}>{c.happyClientsNumber}</span>
                <p>{c.happyClientsText}</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="success-item style-two wow fadeInUp delay-0-4s">
                <i className="flaticon-software" />
                <span className="count-text" data-speed={3000} data-stop={843}>{c.projectCompleteNumber}</span>
                <p>{c.projectCompleteText}</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="success-item style-two wow fadeInUp delay-0-6s">
                <i className="flaticon-trophy" />
                <span className="count-text" data-speed={3000} data-stop={965}>{c.yearofExperienceNumber}</span>
                <p>{c.yearofExperienceText}</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="success-item style-two wow fadeInUp delay-0-8s">
                <i className="flaticon-group" />
                <span className="count-text" data-speed={3000} data-stop={753}>{c.teamNumber}</span>
                <p>{c.teamText}</p>
              </div>
            </div>
          </div>
          <div className="white-circle">
            <img src="assets/images/shapes/white-circle.png" alt="White Circle" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-shape" />
    </div>)
    }




    </>
  );
};

export default CounterSection;