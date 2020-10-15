import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceCardAdmin from '../../Components/DashboardComponents/ServiceCardAdmin/ServiceCardAdmin';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import { useAuth } from '../../Hooks/useAuth';
import sideBarItems from '../../Components/DashboardSidebar/SideBarData';

const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useAuth();
    let sideBarData = sideBarItems;
    sideBarData[1].status = " active";
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
    }, []);
    document.title = "My Purchase List"
    return (
        <div>
            <AdminNavbar pageTitle="My Services" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarData} />
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