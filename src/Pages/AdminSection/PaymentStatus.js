import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaymentStatus = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);

    const handlePaymentStatus = (event) => {
        event.preventDefault();
        const paymentStatus = event.target.paymentStatus.value;



        const status = {
            paymentStatus,
        };

        const url = `http://localhost:5000/order/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Payment Status is Updated');
            });
    };






    const handleOrderStatus = (event) => {
        event.preventDefault();

        const orderStatus = event.target.orderStatus.value;



        const orderSec = {

            orderStatus,
        };

        const url = `http://localhost:5000/order-status/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderSec),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('OrderStatus is Updated');
            });
    };





    const handleServiceOrder = (event) => {
        event.preventDefault();

        const ServiceOneTitle = event.target.ServiceOneTitle.value;
        const ServiceOneLink = event.target.ServiceOneLink.value;
        const ServiceTwoTitle = event.target.ServiceTwoTitle.value;
        const ServiceTwoLink = event.target.ServiceTwoLink.value;
        const ServiceThreeTitle = event.target.ServiceThreeTitle.value;
        const ServiceThreeLink = event.target.ServiceThreeLink.value;




        const orderSec = {

            ServiceOneTitle,
            ServiceOneLink,
            ServiceTwoTitle,
            ServiceTwoLink,
            ServiceThreeTitle,
            ServiceThreeLink,

        };

        const url = `http://localhost:5000/update-order-item/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderSec),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Services Item is Updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div className='container'>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5">
                    <div class="container">
                        <div class="row"></div>
                        <div class="row content-center">

                            <div className='text-center'> {/* Center-align the content */}
                                <h2>Welcome to Admin Panel</h2>
                                <AdminMenu></AdminMenu>

                                <section class="services-area pt-120 pb-90 fix mt-5 mb-5 align-content-center" >
                                    <div class="container ">
                                        <div class="row">
                                        <h2 className='mt-5 mb-5' >Update Order Link</h2>

                                        </div>
                                        <div class="row">
                                            

                                            <div class="col-lg-12 col-md-12">



                                                <form class="contact-form mt-2 " onSubmit={handleServiceOrder} >
                                                    <div class="row">

                                                       
                                                            <div className="col-lg-12 col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" name="ServiceOneTitle" defaultValue={order.ServiceOneTitle} placeholder="Service One Title" required />
                                                                </div>
                                                            </div>

                                                         
                                                        <div className="col-lg-12 col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" name="ServiceOneLink" defaultValue={order.ServiceOneLink} placeholder="Service One Link" required />
                                                                </div>
                                                            </div>

                                                        <div className="col-lg-12 col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="ServiceTwoTitle" defaultValue={order.ServiceTwoTitle} placeholder="Service Two Title" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="ServiceTwoLink" defaultValue={order.ServiceTwoLink} placeholder="Service Two Link" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="ServiceThreeTitle" defaultValue={order.ServiceThreeTitle} placeholder="Service Three Title" required />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="ServiceThreeLink" defaultValue={order.ServiceThreeLink} placeholder="Service Three Link" required />
                                                            </div>
                                                        </div>



                                                        <div class="slider-btn">
                                                            <button className="theme-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service Link </button>
                                                        </div>
                                                    </div>

                                                </form>




                                            </div>


                                        </div>
                                    </div>
                                </section>



                                <h2>Update Payment Status</h2>

                                <form onSubmit={handlePaymentStatus} className="text-center"> {/* Center-align the form */}
                                    <div class="col-lg-6 mx-auto"> {/* Center-align the select dropdown */}
                                        <div class="contact-field p-relative c-name mb-20">
                                            <select className='form-control' name="paymentStatus" id="cars">
                                                <option value="UnPaid">UnPaid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="theme-btn mt-3" data-animation="fadeInRight" data-delay=".8s"> Update Payment </button>
                                    </div>
                                </form>

                                <h2 className='mt-5'>Update Order Status</h2>

                                <form onSubmit={handleOrderStatus} className="text-center"> {/* Center-align the form */}
                                    <div class="col-lg-6 mx-auto"> {/* Center-align the select dropdown */}
                                        <div class="contact-field p-relative c-name mb-20">
                                            <select className='form-control' name="orderStatus" id="cars">
                                                <option value="Pending">Pending</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button class="theme-btn mt-3" data-animation="fadeInRight" data-delay=".8s"> Update Order </button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PaymentStatus;