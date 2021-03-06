import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { OneServiceIco, ThreeServiceIco, TwoServiceIco } from '../../../images';
import SectionSpinner from '../../SectionSpinner/SectionSpinner';
import "./Services.scss"

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/services', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setServices(result);
                setLoading(false)
            })
    }, [])

    const serviceData = [
        {
            id: 1,
            icon: OneServiceIco,
            title: "Web & Mobile design",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
        {
            id: 2,
            icon: TwoServiceIco,
            title: "Graphic design",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
        {
            id: 3,
            icon: OneServiceIco,
            title: "Web development",
            description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
    ]
    return (
        <section className="pt-5 pb-5 mt-5">
            <Container>
                <h2 className="text-center pb-4">Provide awesome <span className="text-success">services</span> </h2>
                <Row>
                    {loading && <SectionSpinner />}
                    {
                        services && services.map(item => <ServiceCard info={item} key={item._id} />)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default Services;

const ServiceCard = ({ info }) => {
    const { icon, title, description } = info;

    return (
        <div className="col-md-4 p-4">
            <a href="/orders" className="service-link">
                <div className="service-card p-5 text-center">
                    <img src={icon} alt="img" className="service-icon mb-3" />
                    <h4 className="mb-3" >{title} </h4>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}