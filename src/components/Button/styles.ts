import styled from 'styled-components'

export const ButtonContainer = styled.button<{
variant?: 'primary' | 'secondary' | 'outline'
}>`
padding: 12px 24px;
border-radius: 8px;
font-size: 14px;
font-weight: 700;
transition: all 0.2s ease;
width: 100%;

${({ variant = 'primary', theme }) => {
if (variant === 'primary') {
    return `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover { background-color: ${theme.colors.primaryDark}; }
    `
}
if (variant === 'secondary') {
    return `
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
    &:hover { opacity: 0.9; }
    `
}
return `
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    &:hover { background-color: ${theme.colors.primary}; color: #fff; }
`
}}
`