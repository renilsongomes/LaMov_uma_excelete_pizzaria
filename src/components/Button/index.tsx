import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children: ReactNode
variant?: 'primary' | 'secondary' | 'outline'
}

export function Button({ children, variant, ...rest }: ButtonProps) {
return (
<ButtonContainer variant={variant} {...rest}>
    {children}
</ButtonContainer>
)
}