import './config/ReactotronConfig';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import store from './store';

import Routes from './routes';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={5000} />
            </Router>
        </Provider>
    );
}

export default App;
