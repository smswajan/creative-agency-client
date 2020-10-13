import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPage from './OrderPage';
import ServiceList from './ServiceList';
import AddReview from './AddReview';
import AdminServiceList from './AdminServiceList';
import AdminAddService from './AdminAddService';
import AdminMakeAdmin from './AdminMakeAdmin';


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/orders" component={OrderPage} />
                    <Route exact path="/services" component={ServiceList} />
                    <Route exact path="/reviews" component={AddReview} />
                    <Route exact path="/admin/service-list" component={AdminServiceList} />
                    <Route exact path="/admin/add-service" component={AdminAddService} />
                    <Route exact path="/admin/add-admin" component={AdminMakeAdmin} />
                </Switch>
            </Router>
        </>
    );
};

export default Main;