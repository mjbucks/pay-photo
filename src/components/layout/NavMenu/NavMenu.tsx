import { Link } from 'react-router-dom'
import { primaryNav, galleryNav } from '../../../content/nav'
import * as S from './NavMenu.styled'

interface NavMenuProps {
  onClose: () => void
}

// Dropdown anchored where the Explore toggle sits, over the header photo — not a full-screen modal.
export function NavMenu({ onClose }: NavMenuProps) {
  const items = [...primaryNav, ...galleryNav]

  return (
    <S.List>
      {items.map((item, index) => (
        <S.Item key={item.path}>
          {index === 0 && (
            <S.CloseButton type="button" onClick={onClose} aria-label="Close menu">
              ×
            </S.CloseButton>
          )}
          <Link to={item.path} onClick={onClose}>
            {item.label}
          </Link>
        </S.Item>
      ))}
    </S.List>
  )
}
