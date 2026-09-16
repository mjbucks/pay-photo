export const theme = {
  colors: {
    espresso: '#2a2115',
    italy: '#a65d4d',
    willow: '#4f5845',
    denim: '#7e9ba0',
    ivory: '#f6efe2',
    ivoryMuted: 'rgba(246, 239, 226, 0.75)',
  },
  fonts: {
    script: "'Seaweed Script', cursive",
    serif: "'Alegreya', serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },
} as const

export type Theme = typeof theme
