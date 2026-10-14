import {
createContext,
useContext,
useState,
ReactNode,
useMemo,
} from 'react'
import { CartItem, Product } from '../types'

interface CartContextData {
items: CartItem[]
addItem: (product: Product) => void
removeItem: (id: number) => void
updateQuantity: (id: number, quantity: number) => void
clearCart: () => void
total: number
itemCount: number
isOpen: boolean
openCart: () => void
closeCart: () => void
}

const CartContext = createContext<CartContextData | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
const [items, setItems] = useState<CartItem[]>([])
const [isOpen, setIsOpen] = useState(false)

const addItem = (product: Product) => {
setItems((prev) => {
    const existing = prev.find((item) => item.id === product.id)
    if (existing) {
    return prev.map((item) =>
        item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    }
    return [...prev, { ...product, quantity: 1 }]
})
setIsOpen(true)
}

const removeItem = (id: number) => {
setItems((prev) => prev.filter((item) => item.id !== id))
}

const updateQuantity = (id: number, quantity: number) => {
if (quantity <= 0) {
    removeItem(id)
    return
}
setItems((prev) =>
    prev.map((item) => (item.id === id ? { ...item, quantity } : item))
)
}

const clearCart = () => setItems([])

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)

const total = useMemo(
() => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
[items]
)

const itemCount = useMemo(
() => items.reduce((acc, item) => acc + item.quantity, 0),
[items]
)

return (
<CartContext.Provider
    value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    isOpen,
    openCart,
    closeCart,
    }}
>
    {children}
</CartContext.Provider>
)
}

export function useCart() {
const context = useContext(CartContext)
if (!context) {
throw new Error('useCart must be used within CartProvider')
}
return context
}