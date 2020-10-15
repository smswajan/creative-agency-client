import React from 'react';
import { LogoGle } from '../../images';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import { useAuth } from '../../Hooks/useAuth';
import sideBarItems from '../../Components/DashboardSidebar/SideBarData';

const OrderPage = () => {
    const { register, handleSubmit } = useForm();
    const [services, setServices] = useState();
    const { currentUser } = useAuth();
    let sideBarData = sideBarItems;
    sideBarData[0].status = " active";
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/services', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setServices(result)
            })
    }, [])
    const onSubmit = (data, e) => {
        data.status = "Pending";
        data.price = Number(data.price)
        fetch('https://creative-agency-live-api.herokuapp.com/add-order', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(result => {
            e.target.reset()
        })
    }
    return (
        <div>
            <AdminNavbar pageTitle="Order new" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarData} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="row pt-3 pl-4">
                        <div className="col-7">
                            <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                                <input ref={register({ required: true })} type="text" defaultValue={currentUser ? currentUser.name : "your name"} name="name" placeholder="Your name / company's name" id="" className="form-control-lg mb-3 py-4 form-control" />
                                <input ref={register({ required: true })} type="email" defaultValue={currentUser.email} name="email" className="form-control-lg mb-3 py-4 form-control" placeholder="Your email address" />
                                {/* <input ref={register({ required: true })} type="text" name="category" className="form-control-lg mb-3 py-4 form-control" placeholder="Graphics design" /> */}
                                <select name="category" ref={register({ required: true })} className="custom-select mb-3" >
                                    <option >Select your service</option>
                                    {services && services.map(item => <option value={item._id}>{item.title} </option>)}
                                </select>
                                <textarea ref={register({ required: true })} placeholder="Project Details" name="details" cols="30" rows="4" className="form-control-lg mb-3 py-4 form-control"></textarea>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <input ref={register({ required: true })} type="num" name="price" placeholder="Price" className="form-control py-4" />
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