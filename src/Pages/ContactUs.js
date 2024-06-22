import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Message is Send. Thanks');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (





<>

<div className="contact-section pb-160 rpb-100" id='contact-sec'>
  <div className="container">
    <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" height={685} style={{border: 0, width: '100%'}} allowFullScreen loading="lazy" />
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10 col-11">
        <form onSubmit={handleMessage} id="contactForm" className="contact-form mt-2 bg-white" name="contactForm" action="#" method="post">
          <div className="row clearfix">
            <div className="col-xl-4 col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Type your name" required />
              </div>
            </div>
            
            
            <div className="col-xl-4 col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Type your Email Address" required />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="form-group">
                <label htmlFor="subject">subject</label>
                <input type="text" id="subject" name="subject" className="form-control" placeholder="I would like to ........." />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="form-group">
               
                <input id="input_phone" type="tel" name="messageStatus" value="UnRead" hidden placeholder="value" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" rows={4} placeholder="Write message" required defaultValue={""} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group text-center mb-0">
                <button className="theme-btn" type="submit">send us message <i className="fas fa-arrow-right" /></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


</>
  );
};

export default ContactUs;