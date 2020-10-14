import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPage from './OrderPage';
import ServiceList from './ServiceList';
import AddReview from './AddReview';
import AdminServiceList from './AdminServiceList';
import AdminAddService from './AdminAddService';
import AdminMakeAdmin from './AdminMakeAdmin';
import LoginPage from './LoginPage';
import PrivateRoute from '../Components/PrivateRoute';


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




// <Route exact path="/" component={Home} />
// <PrivateRoute exact path="/orders" component={OrderPage} />
// <PrivateRoute exact path="/services" component={ServiceList} />
// <PrivateRoute exact path="/reviews" component={AddReview} />
// <PrivateRoute exact path="/admin/service-list" component={AdminServiceList} />
// <PrivateRoute exact path="/admin/add-service" component={AdminAddService} />
// <PrivateRoute exact path="/admin/add-admin" component={AdminMakeAdmin} />
// <Route exact path="/login" component={LoginPage} />