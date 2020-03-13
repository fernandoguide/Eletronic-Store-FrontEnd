import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Login" exact component={Login} />
                <Route path="/Register" exact component={Register} />
                <Route
                    path="/ForgotPassword"
                    exact
                    component={ForgotPassword}
                />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
