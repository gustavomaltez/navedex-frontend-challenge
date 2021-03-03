import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #FFFFFF;
    color: #212121;
    --webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }

  body, input, button{
    font-size: 16px;
    outline: none;
    border: 0;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  @media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  @media(max-width: 500px){
      html{
          font-size: 70.5%;
      }
  }
`;
