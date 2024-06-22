import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTestimonial = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;


        const testimonialSection = {
            testimonialText,
            testimonialHeading,


        };

        const url = `http://localhost:5000/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;



        const stepSection = {
            image,
            personName,
            personTitle,
            desc,

        };

        const url = `http://localhost:5000/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix ">
                <div className=''>
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">

                                <h3 className='mb-5 mt-5'> Edit Testimonial Text </h3>
                                {
                                    testimonialtext.length === 1 &&
                                    <>
                                        {testimonialtext.map(text =>
                                            <Link className='theme-btn' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                        )}
                                    </>
                                }

                                {testimonialtext.length === 0 &&
                                    <form class="contact-form mt-2 " onSubmit={handleTestimonialSection}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control mb-3" id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control mb-3" id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                                </div>
                                            </div>




                                            <div class="slider-btn">
                                                <button className="theme-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                            </div>
                                        </div>

                                    </form>
                                }





                             

                                {/* <form class="contact-form mt-2 " onSubmit={handleStepSection}>
                            <div class="row">
                                <div class="col-lg-12 " >
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input className="form-control mb-3" name="image" placeholder="Person Image URL" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input  className="form-control mb-3" name="personName" placeholder="Person Name" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input className="form-control mb-3" name="personTitle" placeholder="Person Title" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input  className="form-control mb-3" name="desc" placeholder="Details" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button className="theme-btn" data-delay=".8s"> Add Testimonial</button>
                                </div>
                            </div>

                        </form> */}

                            </div>


                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title center-align text-center mb-50">


                                </div>
                            </div>
                        </div>

                        <h3 className='mb-5'> Edit Testimonial Item </h3>

                        <div className="feedback-active  d-flex">
                       


                            {
                                testimonials.map(t => <div className="feedback-item-two ">
                                    <h5><Link to={`/edit-testimonial/${t._id}`} className='theme-btn mb-3'>Edit Now</Link></h5>
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







                </div>
            </section></>

    );
};

export default AddTestimonial;