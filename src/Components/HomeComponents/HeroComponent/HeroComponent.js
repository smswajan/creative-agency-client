import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeaderMain from '../HeaderMain/HeaderMain';
import "./HeroComponent.scss"
import HeroFrame from "../../../images/logos/Frame.png"

const HeroComponent = () => {
    return (
        <div id="hero" className="bg-warning mb-md-5" >
            <HeaderMain />
            <Container className="my-md-5 py-md-5">
                <Row className="d-flex align-items-center">
                    <Col md={5}>
                        <h1 className="text-primary font-weight-bold">
                            Let's Grow Your <br /> Brand To The <br /> Next Level
                        </h1>
                        <p className="text-primary">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Voluptatem, laboriosam<br /> ducimus  cum architecto labore iste fugiat.</p>

                        <Button variant="primary" className="px-5 mt-3">Hire us</Button>
                    </Col>
                    <Col md={7} className="p-4">
                        <img src={HeroFrame} alt="hero" className="img-fluid hero-img" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroComponent;