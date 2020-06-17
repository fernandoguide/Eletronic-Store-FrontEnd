import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        ::-webkit-scrollbar {
    width: 8px;
    height: 8px;

}
::-moz-selection{
background:#7159C1;
color:#FFF;
}
::selection {
background:#7159C1;
color:#FFF;
}
/*BARRA DE ROLAGEM*/
::-webkit-scrollbar-thumb {
      background-color: #7159C1;
      border-radius: 3px;
}
::-webkit-scrollbar-track-piece{
    background-color: transparent;
}
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

}
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    html, border-style, #root{
        min-height: 100%;
    }

    body {
        background: #191920 url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
    font-family: Roboto, sans-serif;
}
button {
    cursor: pointer;
  }
`;
