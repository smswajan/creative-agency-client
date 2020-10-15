import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';


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

    },
    {
        id: 3,
        icon: addAdmin,
        text: "Make Admin",
        url: "/admin/add-admin",
        status: " active"

    },
]
const AdminMakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [admins, setAdmins] = useState([]);
    const [adminCount, setAdminCount] = useState(admins.length);
    const [loading, setLoading] = useState(true)
    const onSubmit = (data, e) => {
        console.log(data);
        data.timeStamp = new Date();
        fetch('https://creative-agency-live-api.herokuapp.com/add-admin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(result => {
            console.log(result);
            e.target.reset();
            const newCount = adminCount + 1;
            setAdminCount(newCount)
        })
    }
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/admin-list', {
            method: 'GET'
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                setAdmins(result)
                setLoading(false)
            })
    }, [adminCount])
    if (loading) {
        return <Spinner animation="grow" variant="primary" />
    }
    return (
        <div>
            <AdminNavbar pageTitle="Add new admin" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="bg-white m-4 pt-3 pl-4 circle-form-container">
                        <div className="row">
                            <div className="col-12 p-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="row">
                                    <div className="col-6 d-flex">
                                        <input name="email" placeholder="Email" type="email" className="form-control mr-4" ref={register({ required: true })} />
                                        <button type='submit' className="btn btn-success px-4">ADD</button>
                                    </div>
                                </form>
                                <h4 className="mt-5 mb-3">Current Admins</h4>
                                {(admins.length > 0) && admins.map(item => <p>{item.email} </p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMakeAdmin;