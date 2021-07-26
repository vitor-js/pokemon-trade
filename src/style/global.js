import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
    /* personalizar a barra em geral */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  
    ::-webkit-scrollbar-track {
      background: #cccccc;
    }
  
    ::-webkit-scrollbar-thumb {
      background: #999999;
      border-radius: 15px;
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }
    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }
    body {
        background-color:#dedede42;
    }

    
`;
