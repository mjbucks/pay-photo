import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.espresso};
  padding: clamp(2.5rem, 7vw, 4.5rem) clamp(1.5rem, 8vw, 6rem);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 5vw, 2.5rem);
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Photo = styled(ResponsiveImage)`
  display: block;
  flex: none;
  width: clamp(220px, 26vw, 380px);
  aspect-ratio: 5 / 6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Text = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`

export const Heading = styled.h2`
  margin: 0 0 clamp(0.75rem, 2vw, 1.25rem);
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 2.75rem);
`

export const Eyebrow = styled.p`
  margin: 0 0 clamp(1rem, 3vw, 1.5rem);
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  margin: 0 auto 1rem;
  max-width: 30rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const ArrowLinkRow = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`
