import styled from 'styled-components'

export const PaymentContainer = styled.main`
max-width: 640px;
margin: 0 auto;
padding: 48px 24px;
`

export const Title = styled.h1`
font-size: 18px;
font-weight: 900;
color: ${({ theme }) => theme.colors.primary};
margin-bottom: 16px;
`

export const Total = styled.div`
display: flex;
justify-content: space-between;
font-size: 16px;
font-weight: 700;
color: ${({ theme }) => theme.colors.primary};
margin-bottom: 24px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
`

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 6px;

label {
font-size: 14px;
font-weight: 700;
color: ${({ theme }) => theme.colors.text};
}

input {
padding: 10px 12px;
border: 1px solid #ddd;
font-size: 14px;
background-color: white;
color: ${({ theme }) => theme.colors.text};

&:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
}
}
`

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
`

export const Actions = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin-top: 16px;
`