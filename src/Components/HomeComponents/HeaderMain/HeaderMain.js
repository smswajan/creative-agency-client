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
                            <Nav.Link href="/" className="mr-5" >Our Portfolio</Nav.Link>
                            <Nav.Link href="/" className="mr-5" >Our Team</Nav.Link>
                            <Nav.Link href="/" className="mr-5" >Contact US</Nav.Link>
                            <Button href="/" className="px-5">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderMain;