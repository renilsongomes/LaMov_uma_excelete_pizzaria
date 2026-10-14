import styled from 'styled-components'

export const HeaderContainer = styled.header`
background-color: ${({ theme }) => theme.colors.background};
padding: 24px 40px;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
top: 0;
z-index: 100;
border-bottom: 1px solid rgba(230, 103, 103, 0.15);
`

export const NavLink = styled.button`
font-size: 16px;
font-weight: 700;
color: ${({ theme }) => theme.colors.primary};
`

export const Logo = styled.h1`
font-size: 32px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
border: 2px solid ${({ theme }) => theme.colors.primary};
padding: 4px 16px;
letter-spacing: -1px;
`

export const CartButton = styled.button`
font-size: 16px;
font-weight: 700;
color: ${({ theme }) => theme.colors.primary};
`