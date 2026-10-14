import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'
import { Header } from './components/Header'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'
import { AppRoutes } from './routes/AppRoutes'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export default function App() {
return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <CartDrawer />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </ThemeProvider>
)
}