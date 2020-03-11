import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import store from './store';
import './config/ReactotronConfig';

import Routes from './routes';

require('react-web-vector-icons/fonts');

function App() {
    return (
        <Provider store={store}>
            <>
                <Routes />
                <GlobalStyle />
            </>
        </Provider>
    );
}

export default App;
