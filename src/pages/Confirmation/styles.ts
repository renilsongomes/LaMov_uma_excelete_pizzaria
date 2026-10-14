import styled from 'styled-components'

export const ConfirmationContainer = styled.main`
max-width: 640px;
margin: 0 auto;
padding: 64px 24px;
display: flex;
flex-direction: column;
gap: 24px;
`

export const Title = styled.h1`
font-size: 18px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
`

export const Message = styled.p`
font-size: 14px;
line-height: 1.7;
color: ${({ theme }) => theme.colors.text};
`