import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'
import { ProductModal } from '../../components/ProductModal'
import { products, categories } from '../../data/products'
import { Category as CategoryType, Product } from '../../types'
import { Banner, CategoryContainer, Grid } from './styles'

export function Category() {
const { type } = useParams<{ type: string }>()
const [selected, setSelected] = useState<Product | null>(null)

const category = categories.find((c) => c.id === type)
if (!category) return <Navigate to="/" replace />

const filtered = products.filter((p) => p.category === (type as CategoryType))

return (
<>
    <Banner $image={category.image}>
    <span>{category.title}</span>
    <h1>laMov — Betim, MG</h1>
    </Banner>
    <CategoryContainer>
    <Grid>
        {filtered.map((product) => (
        <ProductCard
            key={product.id}
            product={product}
            onOpen={setSelected}
            buttonLabel="Adicionar ao carrinho"
        />
        ))}
    </Grid>
    </CategoryContainer>
    <ProductModal product={selected} onClose={() => setSelected(null)} />
</>
)
}