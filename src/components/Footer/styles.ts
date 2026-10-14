import styled from 'styled-components'

export const FooterContainer = styled.footer`
background-color: ${({ theme }) => theme.colors.background};
text-align: center;
padding: 48px 24px 24px;
margin-top: 64px;
`

export const FooterLogo = styled.h2`
font-size: 28px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
display: inline-block;
border: 2px solid ${({ theme }) => theme.colors.primary};
padding: 4px 16px;
margin-bottom: 16px;
`

export const Socials = styled.div`
display: flex;
justify-content: center;
gap: 16px;
margin-bottom: 24px;

span {
width: 32px;
height: 32px;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.primary};
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
cursor: pointer;
}
`

export const Legal = styled.p`
font-size: 11px;
color: ${({ theme }) => theme.colors.textLight};
max-width: 480px;
margin: 0 auto;
line-height: 1.6;
`