import React from 'react';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import AdminServiceListItem from '../../Components/DashboardComponents/AdminServiceListItem/AdminServiceListItem';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionSpinner from '../../Components/SectionSpinner/SectionSpinner';
import adminSidebarItems from '../../Components/DashboardSidebar/adminSidebarData';


const AdminServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const sideBarItems = adminSidebarItems;
    sideBarItems[0].status = " active";
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/orders', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                setOrders(result);
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <AdminNavbar pageTitle="Services List" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-4">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-12 p-5">
                                <div className="row bg-admin py-3 px-3 mb-3" style={{ borderRadius: "10px" }}>
                                    <div className="col-2"><span className="text-secondary">Name</span> </div>
                                    <div className="col-3"><span className="text-secondary">Email ID</span> </div>
                                    <div className="col-2"><span className="text-secondary">Service</span> </div>
                                    <div className="col-3"><span className="text-secondary">Product Details</span> </div>
                                    <div className="col-2"><span className="text-secondary">Status</span> </div>
                                </div>
                                {loading && <SectionSpinner />}
                                {orders && orders.map(item => <AdminServiceListItem orderDetails={item} key={item._id} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;