import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.espresso};
  padding: clamp(2.5rem, 7vw, 4.5rem) clamp(1.5rem, 8vw, 6rem);
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vw, 5rem);
`

export const Row = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 6vw, 3rem);
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
    align-items: flex-start;
  }
`

export const PhotoFrame = styled.div<{ $rotate: string; $aspect: string }>`
  flex: none;
  width: clamp(200px, 26vw, 320px);
  padding: 0.6rem;
  background: #fff;
  box-shadow: 0 12px 24px rgba(42, 33, 21, 0.25);
  transform: rotate(${({ $rotate }) => $rotate});
  --aspect: ${({ $aspect }) => $aspect};
`

export const Photo = styled(ResponsiveImage)`
  display: block;
  width: 100%;
  aspect-ratio: var(--aspect);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Text = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`

export const Heading = styled.h2`
  margin: 0 0 clamp(0.5rem, 2vw, 0.75rem);
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${({ theme }) => theme.colors.denim};
`

export const Subtitle = styled.p`
  margin: 0 0 clamp(1rem, 3vw, 1.5rem);
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
`

export const Paragraph = styled.p`
  margin: 0 auto 1rem;
  max-width: 32rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-right: 0;
  }
`
