import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.espresso};
  color: ${({ theme }) => theme.colors.ivory};
  padding: clamp(3.5rem, 9vw, 6.5rem) clamp(1.5rem, 8vw, 6rem);
`

export const Heading = styled.div`
  text-align: center;
  margin-bottom: clamp(2.5rem, 7vw, 4rem);
`

export const Eyebrow = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1rem, 2vw, 1.25rem);
`

export const Title = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.5rem, 6vw, 4rem);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 6vw, 3rem);
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5rem, 4vw, 2.5rem);
  }
`

export const Item = styled.div``

export const Photo = styled(ResponsiveImage)`
  display: block;
  width: 100%;
  aspect-ratio: 6 / 7;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Caption = styled.p`
  margin: 0 0 0.5rem;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
`

export const Paragraph = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`
