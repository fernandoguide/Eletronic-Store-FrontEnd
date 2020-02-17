import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); */
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        /* box-sizing: border-box; */
    }

    html, border-style, #root{
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
    font-family: Roboto, sans-serif;
}
`;
