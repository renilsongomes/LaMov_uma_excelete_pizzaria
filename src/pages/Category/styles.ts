import styled from 'styled-components'

export const Banner = styled.section<{ $image: string }>`
background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
url(${({ $image }) => $image});
background-size: cover;
background-position: center;
height: 280px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 40px;
color: white;

span {
font-size: 32px;
font-weight: 300;
opacity: 0.9;
}

h1 {
font-size: 32px;
font-weight: 900;
}
`

export const CategoryContainer = styled.main`
max-width: 1200px;
margin: 0 auto;
padding: 48px 24px;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;

@media (max-width: 1024px) {
grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
grid-template-columns: 1fr;
}
`