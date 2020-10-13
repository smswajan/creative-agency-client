import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPage from './OrderPage';
import ServiceList from './ServiceList';


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/orders" component={OrderPage} />
                    <Route exact path="/myServices" component={ServiceList} />
                </Switch>
            </Router>
        </>
    );
};

export default Main;