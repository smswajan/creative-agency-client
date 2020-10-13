import React from 'react';
import { TwoServiceIco } from '../../../images';
import "./ServiceCardAdmin.scss"

const ServiceCardAdmin = () => {
    return (
        <div className="col-md-6" >
            <div className="service-card-admin p-4 bg-white">
                <div className="d-flex justify-content-between">
                    <img src={TwoServiceIco} className=" service-icon" alt="service" />
                    <button className="btn btn-success align-self-start">Done</button>
                </div>
                <h5 className="mt-3">Web design</h5>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit ullam ducimus.</p>
            </div>
        </div>
    );
};

export default ServiceCardAdmin;