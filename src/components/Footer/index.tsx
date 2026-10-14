import { FooterContainer, FooterLogo, Socials, Legal } from './styles'

export function Footer() {
return (
<FooterContainer>
    <FooterLogo>laMov</FooterLogo>
    <Socials>
    <span>IG</span>
    <span>FB</span>
    <span>TW</span>
    </Socials>
    <Legal>
    laMov © 2025 — Todos os direitos reservados. <br />
    Betim - MG | A laMov é um serviço de delivery e não possui
    estabelecimento físico para consumo no local.
    </Legal>
</FooterContainer>
)
}