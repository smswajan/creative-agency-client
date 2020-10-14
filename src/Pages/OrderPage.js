import React from 'react';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import { LogoGle } from '../images';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';
import { useForm } from 'react-hook-form';
const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: biC,
        text: "Order",
        status: " active",
        url: "/orders"

    },
    {
        id: 2,
        icon: biShoppingBag,
        text: "Service list",
        url: "/services"
    },
    {
        id: 1,
        icon: mdRate,
        text: "Review",
        url: "/reviews"
    },
]
const OrderPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        data.status = "Pending";
        data.price = Number(data.price)
        fetch('http://localhost:4000/add-order', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(result => {
            console.log(result);
            e.target.reset()
        })
    }
    return (
        <div>
            <AdminNavbar pageTitle="Order new" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="row pt-3 pl-4">
                        <div className="col-7">
                            <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                                <input ref={register({ required: true })} type="text" name="name" placeholder="Your name / company's name" id="" className="form-control-lg mb-3 py-4 form-control" />
                                <input ref={register({ required: true })} type="email" name="email" className="form-control-lg mb-3 py-4 form-control" placeholder="Your email address" />
                                <input ref={register({ required: true })} type="text" name="category" className="form-control-lg mb-3 py-4 form-control" placeholder="Graphics design" />
                                <textarea ref={register({ required: true })} placeholder="Project Details" name="details" cols="30" rows="4" className="form-control-lg mb-3 py-4 form-control"></textarea>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <input ref={register({ required: true })} type="num" name="price" className="form-control py-4" />
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
                                <button type="submit" className="btn btn-primary px-5 py-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;