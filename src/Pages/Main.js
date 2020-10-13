import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPage from './OrderPage';
import ServiceList from './ServiceList';
import AddReview from './AddReview';


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/orders" component={OrderPage} />
                    <Route exact path="/services" component={ServiceList} />
                    <Route exact path="/reviews" component={AddReview} />
                </Switch>
            </Router>
        </>
    );
};

export default Main;