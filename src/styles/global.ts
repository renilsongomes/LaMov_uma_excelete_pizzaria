import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: ${({ theme }) => theme.fonts.primary};
}

body {
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
-webkit-font-smoothing: antialiased;
}

button {
cursor: pointer;
border: none;
background: none;
font-family: inherit;
}

a {
text-decoration: none;
color: inherit;
}

ul {
list-style: none;
}

img {
display: block;
max-width: 100%;
}
`