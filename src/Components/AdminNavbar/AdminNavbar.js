import React from 'react';
import { LogoBrand } from '../../images';
import "./AdminNavbar.scss"

const AdminNavbar = ({ pageTitle }) => {
    return (
        <>
            <div className="d-flex bg-white py-3 align-items-center">
                <div className="width-side pl-5"><a href="/"><img src={LogoBrand} alt="creative-agency" className="admin-logo" /> </a></div>
                <div className="width-main d-flex justify-content-between px-5">
                    <h3 className="mb-0">{pageTitle} </h3>
                    <p className="font-weight-bold mb-0">Swajan</p>
                </div>
            </div>
        </>
    );
};

export default AdminNavbar;