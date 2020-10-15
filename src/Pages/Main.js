import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServiceList from './User/UserServiceList';
import AddReview from './User/UserAddReview';
import AdminServiceList from './Admin/AdminServiceList';
import AdminMakeAdmin from './Admin/AdminMakeAdmin';
import LoginPage from './LoginPage';
import { PrivateRoute } from '../Hooks/useAuth';
import OrderPage from './User/UserOrderPage';
import AdminAddService from './Admin/AdminAddService';


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <PrivateRoute exact path="/orders"><OrderPage /></PrivateRoute>
                    <PrivateRoute exact path="/services" ><ServiceList /></PrivateRoute>
                    <PrivateRoute exact path="/reviews"><AddReview /></PrivateRoute>
                    <PrivateRoute exact path="/admin/service-list" ><AdminServiceList /></PrivateRoute>
                    <PrivateRoute exact path="/admin/add-service"><AdminAddService /></PrivateRoute>
                    <PrivateRoute exact path="/admin/add-admin" ><AdminMakeAdmin /></PrivateRoute>
                    <Route exact path="/login"><LoginPage /></Route>
                </Switch>
            </Router>
        </>
    );
};

export default Main;

