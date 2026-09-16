import styled from 'styled-components'
import { ResponsiveImage } from '../../ResponsiveImage'

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.espresso};
`

export const PhotoStrip = styled.div`
  display: flex;
  height: clamp(90px, 14vw, 150px);
`

export const StripImage = styled(ResponsiveImage)`
  flex: 1;
  height: 100%;
  min-width: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'brand' 'navLeft' 'navRight';
  justify-items: center;
  gap: 2.5rem;
  padding: clamp(2.5rem, 6vw, 3.5rem) clamp(1.5rem, 5vw, 4rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: 'navLeft brand navRight';
    align-items: center;
  }
`

export const NavColumn = styled.div<{ $align: 'start' | 'end' }>`
  grid-area: ${({ $align }) => ($align === 'start' ? 'navLeft' : 'navRight')};
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6rem;
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-self: ${({ $align }) => $align};
  }
`

// Stretches to match the NavList's own width (via the column's align-items: stretch),
// so it reads as one flat rule under that group of pages — not an underline per page.
export const Rule = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.ivory};
  opacity: 0.4;
`

export const NavList = styled.ul`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;

  a {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
  }
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Seal = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.ivory};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.75rem;

  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 1px dashed ${({ theme }) => theme.colors.ivory};
    border-radius: 50%;
    opacity: 0.5;
  }
`

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SocialLink = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.ivory};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
  }
`

export const Established = styled.p`
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ivoryMuted};
`
