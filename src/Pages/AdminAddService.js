import React from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar.js/AdminSidebar';


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
    return (
        <div>
            <AdminNavbar pageTitle="Add Services" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarItems} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="width-main pt-3 pl-4">
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddService;