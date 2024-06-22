import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


    const [items, setItems] = useState([]);
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);


    return (

        <>

            <section class="solutions-section-two rel z-1 pt-130 rpt-100 pb-80 rpb-50" id="services-sec">
                <div class="container">
                    <div class="row align-items-end mb-10">
                        <div class="col-xl-6 col-lg-8">
                            {
                                service.map(a=> <div class="section-title mb-20">
                                <span class="sub-title">{a.serviceHeading}</span>
                                <h2>{a.servicesubHeading}</h2>
                            </div>)
                            }
                            
                        </div>
                        <div class="col-xl-6 col-lg-4">
                            <div class="section-title-btns text-lg-right mb-50 rmb-20">

                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center ">

                        {
                            items.map(s => <div class="col-xl-4 col-md-4 s-item   ">
                                <div class="">


                                    <img src={s.serviceIcon} alt="Logo" />
                                    <h4>{s.serviceTitle}</h4>
                                    <p>{s.serviceDetails}</p>
                                </div>
                            </div>)
                        }




                    </div>
                </div>
            </section>





        </>


    );
};

export default ServicesSection;
