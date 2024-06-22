import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import UserDashboardMenu from '../UserDashboardMenu';


const ViewOrder = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);


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
            

            <div className='container mt-100 mb-100 vh-100 align-middle '>
                <UserDashboardMenu></UserDashboardMenu>
          
                <table class="table font-order">
                    
                    <thead>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Service Title</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1.</th>

                            <td><Link to={order.ServiceOneLink} target="_blank">{order.ServiceOneTitle}</Link></td>



                        </tr>
                        <tr>
                            <th scope="row">2.</th>
                            <td><Link to={order.ServiceTwoLink} target="_blank">{order.ServiceTwoTitle}</Link></td>


                        </tr>
                        <tr>
                            <th scope="row">3.</th>
                            <td><Link to={order.ServiceThreeLink} target="_blank">{order.ServiceThreeTitle}</Link></td>


                        </tr>

                    </tbody>
                </table>
                <p></p>
                <p></p>



            </div>

        </>
    );
};

export default ViewOrder;
