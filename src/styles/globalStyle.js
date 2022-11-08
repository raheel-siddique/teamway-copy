import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;

        * {
            margin: 0 ;
            padding: 0 ;
            box-sizing: border-box ;
        }

        body {
           background: ${({ theme }) => theme.colors.CULTURED_WHITE_COLOR};
           font-family: 'Poppins', sans-serif;

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.8rem;
            }

            h3 {
                font-size: 1.5rem ;
            }

            p {
                font-size: 1.3rem;
            }
        }
    }

`;

export default GlobalStyle;
