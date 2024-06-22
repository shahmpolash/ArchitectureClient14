import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrice] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));
    }, []);


    const handleNewOrder = (event) => {
        event.preventDefault();
        const packagePrice = event.target.packagePrice.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });


        const order = {
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,

        };

        const url = `http://localhost:5000/new-order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/pending-order');
            });
    };


    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5 vh-100" >
                <div class="container">
                    <div class="row justify-content-center">
                        <h2>You Buying This SEO Plan</h2>

                    </div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-8">
                                <form class="contact-form mt-2 mt-5" onSubmit={handleNewOrder}>
                                    <div class="row">

                                        <div class="col-12 mb-3">
                                            <div class="">
                                                <input type="text" class="form-control" name="packageName" value={prices.packageName} placeholder="Package Name" required />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="packagePrice" value={prices.packagePrice} required />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-group">
                                                <input disabled type="email" value={user?.email} name="customerEmail" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-group">
                                                <input type="text" name="customerName" class="form-control" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-group">
                                                <input type="text" name="customerAddress" class="form-control" placeholder="Your Address" required />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div class="form-group">
                                                <input type="text" name="customerCountry" class="form-control" placeholder="Your Country" required />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <input type="text" hidden id="text" value='UnPaid' name="paymentStatus" required />
                                        </div>
                                        <div class="col-12">
                                            <input type="text" hidden id="text" value='Pending' name="orderStatus" required />
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary btn-block" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default OrderNow;