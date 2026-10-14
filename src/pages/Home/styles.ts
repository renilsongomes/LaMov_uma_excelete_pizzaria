import styled from 'styled-components'

export const HomeContainer = styled.main`
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