import styled from 'styled-components'

export const Overlay = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.75);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 24px;
`

export const ModalContainer = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
color: white;
display: grid;
grid-template-columns: 280px 1fr;
max-width: 880px;
width: 100%;
position: relative;

@media (max-width: 768px) {
grid-template-columns: 1fr;
}
`

export const ModalImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
min-height: 280px;
`

export const ModalBody = styled.div`
padding: 32px;
display: flex;
flex-direction: column;
gap: 16px;
`

export const ModalTitle = styled.h2`
font-size: 24px;
font-weight: 900;
`

export const ModalDescription = styled.p`
font-size: 14px;
line-height: 1.6;
`

export const ModalServes = styled.p`
font-size: 14px;
font-weight: 700;
margin-top: auto;
`

export const ModalButton = styled.button`
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.primary};
padding: 12px;
font-weight: 700;
font-size: 14px;
margin-top: 16px;

&:hover {
opacity: 0.9;
}
`

export const CloseButton = styled.button`
position: absolute;
top: 12px;
right: 12px;
color: white;
font-size: 20px;
font-weight: 700;
z-index: 2;
`