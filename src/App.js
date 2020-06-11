import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import store from './store';
import './config/ReactotronConfig';

import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={5000} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
