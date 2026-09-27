import styled from 'styled-components'
import { ResponsiveImage } from '../../ResponsiveImage'

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.espresso};
`

export const PhotoStrip = styled.div`
  display: flex;

  // Photo 4's subjects' faces sit near the top of the source frame; the default center crop
  // shows only their shoulders. Shift up so their faces are barely visible at the top edge.
  > :nth-child(4) img {
    object-position: 50% 6%;
  }
`

export const StripImage = styled(ResponsiveImage)`
  flex: 1;
  min-width: 0;
  aspect-ratio: 1;

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

// The outer two columns are equal (1fr) and the middle one hugs the stamp's own width, so each
// outer column spans exactly from the screen edge to the stamp's edge. Centering the nav within
// it (rather than pinning to start/end) lands the links halfway between the two.
export const NavColumn = styled.div<{ $align: 'start' | 'end' }>`
  grid-area: ${({ $align }) => ($align === 'start' ? 'navLeft' : 'navRight')};
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6rem;
  justify-self: center;
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
  gap: clamp(1.25rem, 4vw, 2.5rem);
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;

  a {
    font-size: clamp(1.1rem, 2vw, 1.35rem);
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

// The global img{max-width:100%} rule collapses against this grid column's auto (shrink-to-fit)
// width, capping the seal's width while its explicit height kept growing — max-width: none here
// overrides that so both dimensions actually apply.
export const Seal = styled.img`
  width: clamp(180px, 20vw, 240px);
  height: clamp(180px, 20vw, 240px);
  max-width: none;
  aspect-ratio: 1;
  object-fit: contain;
`

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.ivory};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`

export const Established = styled.p`
  margin: 0;
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ivoryMuted};
`
