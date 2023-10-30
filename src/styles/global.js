import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #000;
    color: #fff;
  }

  .container {
    width: 100%;
  }

  .content {
    width: 90%;
    margin: 0 auto;
    max-width: 1336px;
  }

  .bg-black {
    background-color: #000;
    color: #fff;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .ds-flex {
    display: flex;
  }

  .gap-10 {
    gap: 10px;
  }

  .flex-end {
    justify-content: flex-end;
  }
  
  .link {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;
 
export default GlobalStyle;