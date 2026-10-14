export const theme = {
colors: {
primary: '#E66767',
primaryDark: '#C44E4E',
background: '#FFF8F2',
white: '#FFFFFF',
text: '#2B2B2B',
textLight: '#7A7A7A',
border: '#E66767',
star: '#FFB930',
},
fonts: {
primary: "'Roboto', sans-serif",
},
breakpoints: {
mobile: '768px',
tablet: '1024px',
},
} as const

export type Theme = typeof theme