import React from 'react';
import "./DashboardSidebar.scss"

const AdminSidebar = ({ sideBarItems }) => {
    return (
        <div className="width-100 px-5 pt-5 bg-white" >
            {
                sideBarItems.map(item => (
                    <a href={item.url} className={"d-block sidebar-item py-2 " + item.status} >
                        {item.icon} <p className="ml-1 d-inline-block font-weight-bold">{item.text} </p>
                    </a>
                ))
            }
        </div>
    );
};

export default AdminSidebar;