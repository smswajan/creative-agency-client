import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LogoAir, LogoGle, LogoNflix, LogoSlack, LogoUber } from '../../../images';
import "./OurCustomers.scss"

const OurCustomers = () => {

    return (
        <Container>
            <Row className="d-flex align-items-center py-4">
                <div className="col-md-2 offset-md-1 text-center mb-3">
                    <img src={LogoSlack} alt="" className="customers-logos" style={{ height: "30px" }} />
                </div>
                <div className="col-md-2 text-center mb-3"><img src={LogoGle} alt="" className="customers-logos" /></div>
                <div className="col-md-2 text-center mb-3"><img src={LogoUber} alt="" className="customers-logos" /></div>
                <div className="col-md-2 text-center mb-3"><img src={LogoNflix} alt="" className="customers-logos" /></div>
                <div className="col-md-2 text-center mb-3"><img src={LogoAir} alt="" className="customers-logos" /></div>
            </Row>
        </Container>
    );
};

export default OurCustomers;