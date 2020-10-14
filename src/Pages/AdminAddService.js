import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineCloudUpload, AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import { IconContext } from 'react-icons/lib';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const serviceList = <BiShoppingBag className="sidebar-icon" />
const addService = <MdAdd className="sidebar-icon" />
const addAdmin = <AiOutlineUserAdd className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: serviceList,
        text: "Service list",
        url: "/admin/service-list",
    },
    {
        id: 2,
        icon: addService,
        text: "Add Service",
        url: "/admin/add-service",
        status: " active"

    },
    {
        id: 3,
        icon: addAdmin,
        text: "Make Admin",
        url: "/admin/add-admin"
    },
]

const AdminAddService = () => {
    const { register, handleSubmit } = useForm();
    // const [file, setFile] = useState(null)
    const handleFormSubmit = (data, e) => {
        data.icon = data.icon[0]
        const formData = new FormData();
        formData.append('icon', data.icon);
        formData.append('title', data.title)
        formData.append('description', data.description)
        fetch('http://localhost:4000/add-service', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                e.target.reset()
            })
        console.log(data);
    }
    return (
        <div>
            <AdminNavbar pageTitle="Add Services" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-4">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-6 p-5">
                                {/* form */}
                                <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            {/* title */}
                                            <label className="mb-3 font-weight-bold">Service Title</label>
                                            <input type="text" name="title" placeholder="Enter title" id="" className="form-control py-4" ref={register({ required: true })} />
                                        </div>
                                        <div className="col-6">
                                            {/* icon */}
                                            <label className="mb-3 font-weight-bold">Upload Image</label>
                                            <div className="upload-btn-wrapper">
                                                <div className="up-btn btn-outline-success py-2 px-5 btn">
                                                    <IconContext.Provider value={{ size: "1.5rem" }}>
                                                        <AiOutlineCloudUpload />
                                                    </IconContext.Provider> upload
                                                    <input type="file" name="icon" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* description */}
                                    <textarea placeholder="Project Details" name="description" cols="30" rows="4" className=" mb-3 py-4 mb-4 form-control" ref={register({ required: true })} ></textarea>

                                    <button type="submit" className="btn btn-primary px-5 py-3">Add New</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddService;