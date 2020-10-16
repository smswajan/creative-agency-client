import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import fireApp from '../../Firebase/fire-app';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import adminSidebarItems from '../../Components/DashboardSidebar/adminSidebarData';
import { useAuth } from '../../Hooks/useAuth';
import { useEffect } from 'react';
import SectionSpinner from '../../Components/SectionSpinner/SectionSpinner';

const AdminAddService = () => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (currentUser) {
            setLoading(true);
            fetch('https://creative-agency-live-api.herokuapp.com/is-admin', {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email: currentUser.email })
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data)
                    setLoading(false)
                })
        }

    }, [])
    const serviceStorageRef = fireApp.storage().ref().child('services');
    const sideBarItems = adminSidebarItems;
    sideBarItems[1].status = " active"

    const handleFormSubmit = (data, e) => {
        const iconFile = data.icon[0];
        const imgRef = serviceStorageRef.child(iconFile.name);
        imgRef.put(iconFile).then(res => {
            imgRef.getDownloadURL().then(res => {
                data.icon = res;
                fetch('https://creative-agency-live-api.herokuapp.com/add-service', {
                    headers: { "Content-Type": "application/json" },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(result => {
                        e.target.reset()
                    })
            }).catch(err => console.log(err))

        })

    }
    document.title = "Admin | Add Service"
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
                                {loading && <SectionSpinner />}
                                {!loading && !isAdmin && <h4 className="text-danger">Sorry! You are not admin. Please login with <span className="text-success">"programming.hero.instructor@gmail.com"</span>.</h4>}
                                {isAdmin && <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
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
                                </form>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddService;