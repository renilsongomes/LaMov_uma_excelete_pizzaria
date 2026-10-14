import styled from 'styled-components'

export const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.7);
opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
transition: opacity 0.3s;
z-index: 900;
`

export const DrawerContainer = styled.aside<{ $isOpen: boolean }>`
position: fixed;
top: 0;
right: 0;
height: 100vh;
width: 380px;
max-width: 90vw;
background-color: ${({ theme }) => theme.colors.primary};
color: white;
padding: 24px;
display: flex;
flex-direction: column;
gap: 16px;
transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
transition: transform 0.3s ease;
z-index: 1000;
overflow-y: auto;
`

export const DrawerItem = styled.div`
display: flex;
gap: 12px;
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
padding: 12px;
position: relative;
`

export const DrawerItemImage = styled.img`
width: 80px;
height: 80px;
object-fit: cover;
`

export const DrawerItemInfo = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 4px;

h4 {
font-size: 14px;
font-weight: 900;
}

span {
font-size: 13px;
}

small {
font-size: 11px;
color: ${({ theme }) => theme.colors.textLight};
}
`

export const RemoveButton = styled.button`
position: absolute;
bottom: 8px;
right: 8px;
font-size: 14px;
`

export const DrawerTotal = styled.div`
display: flex;
justify-content: space-between;
font-size: 16px;
font-weight: 700;
margin-top: auto;
padding-top: 16px;
border-top: 1px solid rgba(255, 255, 255, 0.3);
`

export const DrawerButton = styled.button`
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.primary};
padding: 14px;
font-weight: 700;
font-size: 14px;

&:hover {
opacity: 0.9;
}
`

export const EmptyMessage = styled.p`
text-align: center;
font-size: 14px;
margin-top: 32px;
opacity: 0.9;
`