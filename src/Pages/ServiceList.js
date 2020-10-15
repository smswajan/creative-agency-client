import React, { useEffect } from 'react';
import { useState } from 'react';
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
import ServiceCardAdmin from '../Components/AdminComponents/ServiceCardAdmin/ServiceCardAdmin';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import { useAuth } from '../Hooks/useAuth';


const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: biC,
        text: "Order",
        url: "/orders"

    },
    {
        id: 2,
        icon: biShoppingBag,
        text: "Service list",
        url: "/services",
        status: " active",

    },
    {
        id: 3,
        icon: mdRate,
        text: "Review",
        url: "/reviews"
    },
]
const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useAuth();
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/user/orders?email=' + currentUser.email, {
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setOrders(result)
            })
    }, [])
    return (
        <div>
            <AdminNavbar pageTitle="My Services" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="width-main pt-3 pl-4">
                        <div className="row">
                            {orders.length === 0 && <h4 className="text-center text-danger">Sorry! You haven't placed order yet!</h4>}
                            {
                                orders.map(item => <ServiceCardAdmin status={item.status} category={item.category} key={item._id} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;