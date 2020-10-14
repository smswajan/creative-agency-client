import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LogoBrand } from '../../../images';
import "./HeaderMain.scss"

const HeaderMain = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" className="py-3" >
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="mr-auto" href="/">
                        <img src={LogoBrand} alt="" className="logo-brand" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="agency-navbar" />
                    <Navbar.Collapse id="agency-navbar">
                        <Nav className="ml-auto text-center">
                            <Nav.Link href="/" className="mr-5" >Home</Nav.Link>
                            <Nav.Link href="/orders" className="mr-5" >Order New</Nav.Link>
                            <Nav.Link href="/services" className="mr-5" >My Services</Nav.Link>
                            <Nav.Link href="/reviews" className="mr-5" >Add Review</Nav.Link>
                            <Button href="/admin/service-list" className="px-5">Admin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderMain;