import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { HeaderContainer, NavLink, Logo, CartButton } from './styles'

export function Header() {
const navigate = useNavigate()
const { itemCount, openCart } = useCart()

return (
<HeaderContainer>
    <NavLink onClick={() => navigate('/')}>Restaurantes</NavLink>
    <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
    laMov
    </Logo>
    <CartButton onClick={openCart}>
    {itemCount} produto(s) no carrinho
    </CartButton>
</HeaderContainer>
)
}