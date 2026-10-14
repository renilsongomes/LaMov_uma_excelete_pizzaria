import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Category } from '../pages/Category'
import { Checkout } from '../pages/Checkout'
import { Payment } from '../pages/Payment'
import { Confirmation } from '../pages/Confirmation'

export function AppRoutes() {
return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categoria/:type" element={<Category />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/pagamento" element={<Payment />} />
    <Route path="/confirmacao" element={<Confirmation />} />
</Routes>
)
}