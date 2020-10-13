import React from 'react';
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
import ServiceCardAdmin from '../Components/AdminComponents/ServiceCardAdmin/ServiceCardAdmin';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';


const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: biC,
        text: "Order",

    },
    {
        id: 2,
        icon: biShoppingBag,
        text: "Service list",
        status: " active"
    },
    {
        id: 1,
        icon: mdRate,
        text: "Review"
    },
]
const ServiceList = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-light px-4 py-5">
                    <div className="width-main pt-3 pl-4">
                        <div className="row">
                            <ServiceCardAdmin />
                            <ServiceCardAdmin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;