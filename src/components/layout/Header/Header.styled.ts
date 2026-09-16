import styled from 'styled-components'
import { ResponsiveImage } from '../../ResponsiveImage'

export const Banner = styled.header`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
`

export const BannerImage = styled(ResponsiveImage)`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const BrandWrap = styled.div`
  position: absolute;
  top: clamp(1.25rem, 3.5vw, 2.25rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

export const TopBar = styled.div`
  position: absolute;
  top: clamp(1.5rem, 4vw, 2.5rem);
  left: clamp(1.5rem, 5vw, 4rem);
  right: clamp(1.5rem, 5vw, 4rem);
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`

export const MenuAnchor = styled.div`
  position: relative;
`

export const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin: 0;
  width: min(92%, 60rem);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2rem, 6vw, 3.75rem);
`

export const Eyebrow = styled.p`
  position: absolute;
  left: 50%;
  bottom: clamp(2rem, 7vw, 3.75rem);
  transform: translateX(-50%);
  z-index: 1;
  margin: 0;
  width: 90%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(0.9rem, 1.5vw, 1.125rem);
  color: ${({ theme }) => theme.colors.ivory};
`
