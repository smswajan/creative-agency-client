import React from 'react';
import { TwoServiceIco } from '../../../images';
import "./ServiceCardAdmin.scss"

const ServiceCardAdmin = () => {
    return (
        <div className="col-md-6" >
            <div className="service-card-admin p-3">
                <div className="d-flex justify-content-between">
                    <img src={TwoServiceIco} className="service-icon" alt="service" />
                    <button className="btn btn-success">Done</button>
                </div>
                <h6 className="mt-3">Web design</h6>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit ullam ducimus.</p>
            </div>
        </div>
    );
};

export default ServiceCardAdmin;