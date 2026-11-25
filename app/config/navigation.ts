export interface NavItem {
  to: string
  key: string
}

export const mainNav: NavItem[] = [
  { to: '/', key: 'nav.home' },
  { to: '/work', key: 'nav.work' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]
