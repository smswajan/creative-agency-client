import React from 'react';
import { useState, useEffect } from 'react';
import SectionSpinner from '../../SectionSpinner/SectionSpinner';
import "./ServiceCardAdmin.scss"

const ServiceCardAdmin = ({ status, category }) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/services/' + category, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setService(result[0]);
                setLoading(false)
            })
    }, [])

    const statusBtn = status === "Done" ? 'success' : status === "OnGoing" ? 'warning' : 'danger'


    return (
        <div className="col-md-6 mb-4" >
            {loading && <SectionSpinner />}
            {service &&
                <div className="service-card-admin p-4 bg-white">
                    <div className="d-flex justify-content-between">
                        <img src={service.icon} className=" service-icon" alt="service" />

                        <button className={"btn align-self-start btn-" + statusBtn}>{status} </button>
                    </div>
                    <h5 className="mt-3">{service.title}</h5>
                    <p className="mt-2">{service.description} </p>
                </div>}
        </div>
    );
};

export default ServiceCardAdmin;