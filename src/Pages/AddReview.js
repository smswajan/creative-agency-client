import React from 'react';
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
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
        url: "/orders"

    },
    {
        id: 2,
        icon: biShoppingBag,
        text: "Service list",
        url: "/services"
    },
    {
        id: 3,
        icon: mdRate,
        text: "Review",
        status: " active",
        url: "/reviews"

    },
]

const AddReview = () => {
    return (
        <div>
            <AdminNavbar pageTitle="Add Review" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="width-main pt-3 pl-4">
                        <div className="row pt-3 pl-4">
                            <div className="col-7">
                                <form className="order-form">
                                    <input type="text" name="name" className="form-control-lg mb-3 py-4 form-control" placeholder="Your name" />
                                    <input type="text" name="company" placeholder="Company's name, Designation" id="" className="form-control-lg mb-3 py-4 form-control" />
                                    <textarea placeholder="Project Details" name="message" cols="30" rows="4" className="form-control-lg mb-3 py-4 form-control mb-5"></textarea>

                                    <button className="btn btn-primary px-5 py-3">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;