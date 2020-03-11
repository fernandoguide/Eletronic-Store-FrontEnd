import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route
                    path="*"
                    component={() => (
                        <h1 styles={{ color: '#FFF' }}>Page not found</h1>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}
