import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body,
    body * {
    box-sizing: unset;
    margin: unset;
    padding: unset;
    color: unset;
    text-decoration: unset;
    }

    body{
        height: 100vh;
    }

    h6 {
    font-size: 0.75rem;
    }

    h5,
    p,
    a {
    font-size: 1rem;
    }
    h4 {
    font-size: 1.25rem;
    }
    h3 {
    font-size: 1.5rem;
    }
    h2 {
    font-size: 1.75rem;
    }
    h1 {
    font-size: 2rem;
    }
    #root{
        height: 100%;
    }
`;

export default GlobalStyles;
