import { Product } from '../../types'
import {
CardContainer,
CardImage,
CardBody,
CardHeader,
CardTitle,
CardRating,
CardDescription,
CardButton,
} from './styles'

interface Props {
product: Product
onOpen: (product: Product) => void
buttonLabel?: string
}

export function ProductCard({
product,
onOpen,
buttonLabel = 'Saiba mais',
}: Props) {
return (
<CardContainer>
    <CardImage src={product.image} alt={product.name} />
    <CardBody>
    <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardRating>{product.rating} ★</CardRating>
    </CardHeader>
    <CardDescription>{product.description}</CardDescription>
    <CardButton onClick={() => onOpen(product)}>{buttonLabel}</CardButton>
    </CardBody>
</CardContainer>
)
}