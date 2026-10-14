import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ConfirmationContainer, Title, Message } from './styles'

export function Confirmation() {
const navigate = useNavigate()
const orderId = Math.floor(Math.random() * 9000) + 1000

return (
<ConfirmationContainer>
    <Title>Pedido realizado - ORDER_ID #{orderId}</Title>
    <Message>
    Estamos felizes em informar que seu pedido já está em processo de
    preparação e, em breve, será entregue no endereço fornecido. <br />
    <br />
    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
    realizar cobranças extras. <br />
    <br />
    Lembre-se da importância de higienizar as mãos após o recebimento do
    pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
    <br />
    <br />
    Esperamos que desfrute de uma deliciosa e agradável experiência
    gastronômica. Bom apetite!
    </Message>
    <Button onClick={() => navigate('/')}>Concluir</Button>
</ConfirmationContainer>
)
}