import styled from 'styled-components'

export const CardContainer = styled.article`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.white};
display: flex;
flex-direction: column;
overflow: hidden;
`

export const CardImage = styled.img`
width: 100%;
height: 180px;
object-fit: cover;
`

export const CardBody = styled.div`
padding: 16px;
display: flex;
flex-direction: column;
gap: 8px;
flex: 1;
`

export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
`

export const CardTitle = styled.h3`
font-size: 16px;
font-weight: 900;
`

export const CardRating = styled.span`
font-size: 14px;
font-weight: 700;
color: ${({ theme }) => theme.colors.star};
`

export const CardDescription = styled.p`
font-size: 13px;
line-height: 1.5;
opacity: 0.95;
flex: 1;
`

export const CardButton = styled.button`
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.primary};
padding: 10px;
font-weight: 700;
font-size: 14px;
margin-top: 8px;
transition: opacity 0.2s;

&:hover {
opacity: 0.85;
}
`