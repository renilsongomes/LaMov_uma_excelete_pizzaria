import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { DeliveryInfo } from '../../types'
import {
CheckoutContainer,
Title,
Form,
Field,
Row,
Actions,
} from './styles'

export function Checkout() {
const navigate = useNavigate()
const [form, setForm] = useState<DeliveryInfo>({
name: 'João Paulo de Souza',
address: '',
city: '',
cep: '',
number: '',
complement: '',
})

const handleChange = (field: keyof DeliveryInfo, value: string) => {
setForm((prev) => ({ ...prev, [field]: value }))
}

const handleSubmit = (e: FormEvent) => {
e.preventDefault()
navigate('/pagamento')
}

return (
<CheckoutContainer>
    <Title>Entrega</Title>
    <Form onSubmit={handleSubmit}>
    <Field>
        <label>Quem irá receber</label>
        <input
        value={form.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
        />
    </Field>
    <Field>
        <label>Endereço</label>
        <input
        value={form.address}
        onChange={(e) => handleChange('address', e.target.value)}
        required
        />
    </Field>
    <Field>
        <label>Cidade</label>
        <input
        value={form.city}
        onChange={(e) => handleChange('city', e.target.value)}
        required
        />
    </Field>
    <Row>
        <Field>
        <label>CEP</label>
        <input
            value={form.cep}
            onChange={(e) => handleChange('cep', e.target.value)}
            placeholder="00000-000"
            required
        />
        </Field>
        <Field>
        <label>Número</label>
        <input
            value={form.number}
            onChange={(e) => handleChange('number', e.target.value)}
            required
        />
        </Field>
    </Row>
    <Field>
        <label>Complemento (opcional)</label>
        <input
        value={form.complement}
        onChange={(e) => handleChange('complement', e.target.value)}
        />
    </Field>
    <Actions>
        <Button type="submit">Continuar com o pagamento</Button>
        <Button
        type="button"
        variant="outline"
        onClick={() => navigate(-1)}
        >
        Voltar para o carrinho
        </Button>
    </Actions>
    </Form>
</CheckoutContainer>
)
}