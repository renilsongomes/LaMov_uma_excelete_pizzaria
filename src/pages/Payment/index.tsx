import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useCart } from '../../contexts/CartContext'
import { PaymentInfo } from '../../types'
import {
PaymentContainer,
Title,
Total,
Form,
Field,
Row,
Actions,
} from './styles'

export function Payment() {
const navigate = useNavigate()
const { total, clearCart } = useCart()
const [form, setForm] = useState<PaymentInfo>({
cardName: 'João Paulo de Souza',
cardNumber: '',
cvv: '',
expiryMonth: '',
expiryYear: '',
})

const handleChange = (field: keyof PaymentInfo, value: string) => {
setForm((prev) => ({ ...prev, [field]: value }))
}

const handleSubmit = (e: FormEvent) => {
e.preventDefault()
clearCart()
navigate('/confirmacao')
}

return (
<PaymentContainer>
    <Title>
    Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}
    </Title>
    <Total>
    <span>Valor a pagar</span>
    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
    </Total>
    <Form onSubmit={handleSubmit}>
    <Field>
        <label>Nome no cartão</label>
        <input
        value={form.cardName}
        onChange={(e) => handleChange('cardName', e.target.value)}
        required
        />
    </Field>
    <Row>
        <Field>
        <label>Número do cartão</label>
        <input
            value={form.cardNumber}
            onChange={(e) => handleChange('cardNumber', e.target.value)}
            placeholder="0000 0000 0000 0000"
            required
        />
        </Field>
        <Field>
        <label>CVV</label>
        <input
            value={form.cvv}
            onChange={(e) => handleChange('cvv', e.target.value)}
            placeholder="123"
            required
        />
        </Field>
    </Row>
    <Row>
        <Field>
        <label>Mês de vencimento</label>
        <input
            value={form.expiryMonth}
            onChange={(e) => handleChange('expiryMonth', e.target.value)}
            placeholder="MM"
            required
        />
        </Field>
        <Field>
        <label>Ano de vencimento</label>
        <input
            value={form.expiryYear}
            onChange={(e) => handleChange('expiryYear', e.target.value)}
            placeholder="AAAA"
            required
        />
        </Field>
    </Row>
    <Actions>
        <Button type="submit">Finalizar pagamento</Button>
        <Button
        type="button"
        variant="outline"
        onClick={() => navigate('/checkout')}
        >
        Voltar para a edição de endereço
        </Button>
    </Actions>
    </Form>
</PaymentContainer>
)
}