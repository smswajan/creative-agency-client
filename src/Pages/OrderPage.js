import React from 'react';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import { LogoGle } from '../images';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const OrderPage = () => {
    const sideBarItems = [
        {
            id: 1,
            icon: biC,
            text: "Order",
            status: " active"

        },
        {
            id: 2,
            icon: biShoppingBag,
            text: "Service list",
        },
        {
            id: 1,
            icon: mdRate,
            text: "Review"
        },
    ]
    return (
        <div>
            <AdminNavbar />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-light px-4 py-5">
                    <div className="row pt-3 pl-4">
                        <div className="col-7">
                            <form className="order-form">
                                <input type="text" name="company" placeholder="Your name / company's name" id="" className="form-control-lg mb-3 py-4 form-control" />
                                <input type="email" name="email" className="form-control-lg mb-3 py-4 form-control" placeholder="Your email address" />
                                <input type="email" name="email" className="form-control-lg mb-3 py-4 form-control" placeholder="Graphics design" />
                                <textarea placeholder="Project Details" name="message" cols="30" rows="4" className="form-control-lg mb-3 py-4 form-control"></textarea>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <input type="text" name="price" className="form-control py-4" />
                                    </div>
                                    <div className="col-6">
                                        <div className="upload-btn-wrapper">
                                            <div className="up-btn btn-outline-success py-2 px-5 btn">
                                                <IconContext.Provider value={{ size: "1.5rem" }}>
                                                    <AiOutlineCloudUpload />
                                                </IconContext.Provider> upload
                                                <input type="file" name="file" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-5 py-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;