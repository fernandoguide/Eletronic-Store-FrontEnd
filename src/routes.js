import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Bought from './pages/Bought';
import Home from './pages/Main';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Cart" component={Cart} />
                <Route path="/Bought" component={Bought} />
                <Route path="/Order" component={Order} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/Profile" component={Profile} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
