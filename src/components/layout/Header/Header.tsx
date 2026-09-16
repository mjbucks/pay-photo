import { useState } from 'react'
import { BrandMark } from '../../BrandMark'
import type { Picture } from '../../../types/image'
import { NavMenu } from '../NavMenu/NavMenu'
import * as S from './Header.styled'

interface HeaderProps {
  picture: Picture
  alt: string
  heading: string
  eyebrow?: string
}

/** Full-bleed page banner: arched brand mark, explore toggle, and a centered heading over a per-page photo. */
export function Header({ picture, alt, heading, eyebrow }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.Banner>
      <S.BannerImage picture={picture} alt={alt} loading="eager" sizes="100vw" />
      <S.BrandWrap>
        <BrandMark />
      </S.BrandWrap>
      <S.TopBar>
        <S.MenuAnchor>
          {menuOpen ? (
            <NavMenu onClose={() => setMenuOpen(false)} />
          ) : (
            <S.ExploreButton type="button" onClick={() => setMenuOpen(true)}>
              <span aria-hidden="true">☰</span> Explore
            </S.ExploreButton>
          )}
        </S.MenuAnchor>
      </S.TopBar>
      <S.Heading>{heading}</S.Heading>
      {eyebrow && <S.Eyebrow>{eyebrow}</S.Eyebrow>}
    </S.Banner>
  )
}
