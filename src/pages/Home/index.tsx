import { useState } from 'react'
import { Hero } from '../../components/Hero'
import { ProductCard } from '../../components/ProductCard'
import { ProductModal } from '../../components/ProductModal'
import { products } from '../../data/products'
import { Product } from '../../types'
import { HomeContainer, Grid } from './styles'

export function Home() {
const [selected, setSelected] = useState<Product | null>(null)

return (
<>
    <Hero />
    <HomeContainer>
    <Grid>
        {products.slice(0, 6).map((product) => (
        <ProductCard
            key={product.id}
            product={product}
            onOpen={setSelected}
        />
        ))}
    </Grid>
    </HomeContainer>
    <ProductModal product={selected} onClose={() => setSelected(null)} />
</>
)
}