import styled from 'styled-components'

export const HeroContainer = styled.section`
text-align: center;
padding: 64px 24px;
background-image: repeating-linear-gradient(
-45deg,
transparent,
transparent 12px,
rgba(230, 103, 103, 0.06) 12px,
rgba(230, 103, 103, 0.06) 24px
);
`

export const HeroLogo = styled.h1`
font-size: 42px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
display: inline-block;
border: 3px solid ${({ theme }) => theme.colors.primary};
padding: 8px 28px;
margin-bottom: 32px;
letter-spacing: -1.5px;
`

export const HeroTitle = styled.h2`
font-size: 38px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
line-height: 1.2;
max-width: 640px;
margin: 0 auto;

@media (max-width: 768px) {
font-size: 26px;
}
`