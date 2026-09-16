export interface NavItem {
  label: string
  path: string
}

export const primaryNav: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const galleryNav: NavItem[] = [
  { label: 'Wedding', path: '/weddings' },
  { label: 'Couple', path: '/couples' },
  { label: 'Portrait', path: '/portraits' },
]
