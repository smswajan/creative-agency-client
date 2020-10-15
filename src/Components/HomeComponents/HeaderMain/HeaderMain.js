import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import * as firebase from "firebase/app";
import { useAuth } from '../../../Hooks/useAuth';
import { LogoBrand } from '../../../images';
import "./HeaderMain.scss"


const HeaderMain = () => {
    const { currentUser } = useAuth();
    const signOut = () => {
        firebase.auth().signOut().then(res => {
            sessionStorage.removeItem("token");
            window.location = "/"
        }).catch(err => {
            alert(err);
        })
    }

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
                            <Nav.Link href="/" className="mr-3" >Home</Nav.Link>
                            <Nav.Link href="/orders" className="mr-3" >Order New</Nav.Link>
                            <Nav.Link href="/services" className="mr-3" >My Services</Nav.Link>
                            <Nav.Link href="/reviews" className="mr-3" >Add Review</Nav.Link>
                            <Button href="/admin/service-list" className="px-4 mr-3">Admin</Button>
                            {
                                currentUser ? <Button onClick={signOut} className="btn-danger px-5">LogOut</Button> : <Button href="/login" className="px-5">Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderMain;