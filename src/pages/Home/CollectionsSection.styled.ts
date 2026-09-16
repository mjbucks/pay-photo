import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.espresso};
  color: ${({ theme }) => theme.colors.ivory};
  padding: clamp(3rem, 8vw, 5.5rem) 1rem clamp(3.5rem, 9vw, 6rem);
`

export const Heading = styled.div`
  text-align: center;
  margin-bottom: clamp(2.5rem, 7vw, 4.5rem);
`

export const Eyebrow = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
`

export const Title = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.5rem, 7vw, 3.75rem);
`

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(2.5rem, 7vw, 5rem) clamp(1.75rem, 6vw, 4rem);
`

// Rotated at rest like photos fanned in a stack ($rotate, varying per card), and rotated further
// on hover ($hoverRotate) as if being picked up and tilted.
export const Card = styled(Link)<{ $rotate: number; $hoverRotate: number; $front?: boolean }>`
  display: block;
  width: clamp(160px, 22vw, 300px);
  background: ${({ theme }) => theme.colors.ivory};
  padding: clamp(0.6rem, 2vw, 1rem) clamp(0.6rem, 2vw, 1rem) clamp(1.25rem, 3vw, 1.75rem);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  z-index: ${({ $front }) => ($front ? 1 : 0)};

  &:hover,
  &:focus-visible {
    transform: rotate(${({ $hoverRotate }) => $hoverRotate}deg) translateY(-0.4rem) scale(1.04);
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.45);
  }
`

export const Photo = styled(ResponsiveImage)`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Caption = styled.p`
  margin: 0.75rem 0 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: ${({ theme }) => theme.colors.espresso};
`
