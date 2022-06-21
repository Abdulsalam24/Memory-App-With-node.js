import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing : border-box;
        margin : 0;
        padding: 0;
    }

    body{
        background-color: ${({ theme }) => theme.color.bg};
        color: ${({ theme }) => theme.color.text};
        line-height: 1.4;
    }
    p{
        margin: 15px 0;
    }
    h1{
        font-size:2.1rem;
    }
    li,ul,a{
        list-style-type: none;
        text-decoration: none;
    }

    input{
        padding: 10px 15px;
    }
    input,button{
        width: 100%;
        margin: auto;
    }
    
    button{
        outline: none;
        border: none;
    }
    img{
        max-width: 100%;
    }

    
  @media (min-width: ${({ theme }) => theme.media}) {
    html{
        font-size: 19px;
    }
  }
`;

export default GlobalStyle;
