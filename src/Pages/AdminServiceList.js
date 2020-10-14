import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import AdminServiceListItem from '../Components/AdminComponents/AdminServiceListItem/AdminServiceListItem';
import { useState } from 'react';
import { useEffect } from 'react';
import PageSpinner from '../Components/PageSpinner';


const serviceList = <BiShoppingBag className="sidebar-icon" />
const addService = <MdAdd className="sidebar-icon" />
const addAdmin = <AiOutlineUserAdd className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: serviceList,
        text: "Service list",
        url: "/admin/service-list",
        status: " active"
    },
    {
        id: 2,
        icon: addService,
        text: "Add Service",
        url: "/admin/add-service"
    },
    {
        id: 3,
        icon: addAdmin,
        text: "Make Admin",
        url: "/admin/add-admin"
    },
]
const AdminServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/orders', { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                console.log(result);
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
                                {loading && <PageSpinner />}
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