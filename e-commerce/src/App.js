import React from 'react';
import GlobalStyle from './styles/global';
import './config/ReactotronConfig';

import Routes from './routes';

require('react-web-vector-icons/fonts');

function App() {
    return (
        <>
            <Routes />
            <GlobalStyle />
        </>
    );
}

export default App;
