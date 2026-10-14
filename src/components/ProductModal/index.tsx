import { Product } from '../../types'
import { useCart } from '../../contexts/CartContext'
import {
Overlay,
ModalContainer,
ModalImage,
ModalBody,
ModalTitle,
ModalDescription,
ModalServes,
ModalButton,
CloseButton,
} from './styles'

interface Props {
product: Product | null
onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
const { addItem } = useCart()

if (!product) return null

const handleAdd = () => {
addItem(product)
onClose()
}

return (
<Overlay onClick={onClose}>
    <ModalContainer onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClose}>✕</CloseButton>
    <ModalImage src={product.image} alt={product.name} />
    <ModalBody>
        <ModalTitle>{product.name}</ModalTitle>
        <ModalDescription>{product.description}</ModalDescription>
        {product.serves && <ModalServes>{product.serves}</ModalServes>}
        <ModalButton onClick={handleAdd}>
        Adicionar ao carrinho - R$ {product.price.toFixed(2).replace('.', ',')}
        </ModalButton>
    </ModalBody>
    </ModalContainer>
</Overlay>
)
}