import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import {
DrawerOverlay,
DrawerContainer,
DrawerItem,
DrawerItemImage,
DrawerItemInfo,
RemoveButton,
DrawerTotal,
DrawerButton,
EmptyMessage,
} from './styles'

export function CartDrawer() {
const { items, isOpen, closeCart, removeItem, total } = useCart()
const navigate = useNavigate()

const handleCheckout = () => {
closeCart()
navigate('/checkout')
}

return (
<>
    <DrawerOverlay $isOpen={isOpen} onClick={closeCart} />
    <DrawerContainer $isOpen={isOpen}>
    {items.length === 0 ? (
        <EmptyMessage>Seu carrinho está vazio 🛒</EmptyMessage>
    ) : (
        <>
        {items.map((item) => (
            <DrawerItem key={item.id}>
            <DrawerItemImage src={item.image} alt={item.name} />
            <DrawerItemInfo>
                <h4>{item.name}</h4>
                <span>
                R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
                <small>Qtd: {item.quantity}</small>
            </DrawerItemInfo>
            <RemoveButton onClick={() => removeItem(item.id)}>🗑️</RemoveButton>
            </DrawerItem>
        ))}
        <DrawerTotal>
            <span>Valor total</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </DrawerTotal>
        <DrawerButton onClick={handleCheckout}>
            Continuar com a entrega
        </DrawerButton>
        </>
    )}
    </DrawerContainer>
</>
)
}