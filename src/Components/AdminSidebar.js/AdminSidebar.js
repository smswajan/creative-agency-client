import React from 'react';
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
import "./AdminSidebar.scss"
const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const AdminSidebar = ({ sideBarItems }) => {
    const sideItems = [
        {
            id: 1,
            icon: biC,
            text: "Order"
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
    return (
        <div className="width-100 px-5 pt-5 bg-white" >
            {
                sideBarItems.map(item => (
                    <a href={item.url} className={"d-block sidebar-item py-2 " + item.status} >
                        {item.icon} <strong className="ml-1 d-inline-block">{item.text} </strong>
                    </a>
                ))
            }
            {/* <div className="sidebar-item py-2" >
                <BiCart className="sidebar-icon" /> <strong className="ml-2 d-inline-block">Order </strong> {sideItems[0].icon}
            </div>
            <div className="sidebar-item py-2">
                <BiShoppingBag className="sidebar-icon" /> <strong className="ml-2 d-inline-block">Service list </strong>
            </div>
            <div className="sidebar-item py-2">
                <MdRateReview className="sidebar-icon" /> <strong className="ml-2 d-inline-block">Review </strong>
            </div> */}

        </div>
    );
};

export default AdminSidebar;