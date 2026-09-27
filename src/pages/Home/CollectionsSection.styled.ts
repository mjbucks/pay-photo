import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.espresso};
  color: ${({ theme }) => theme.colors.ivory};
  padding: clamp(3.5rem, 9vw, 6.5rem) 1rem clamp(4rem, 10vw, 7rem);
`

export const Heading = styled.div`
  text-align: center;
  margin-bottom: clamp(3rem, 8vw, 5rem);
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
  font-size: clamp(2.5rem, 6vw, 4rem);
`

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(3rem, 8vw, 6rem) clamp(2.25rem, 7vw, 5rem);
`

// Rotated at rest like photos fanned in a stack ($rotate, varying per card), and rotated further
// on hover ($hoverRotate) as if being picked up and tilted.
export const Card = styled(Link)<{ $rotate: number; $hoverRotate: number; $front?: boolean }>`
  display: block;
  width: clamp(180px, 24vw, 340px);
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

export const Photo = styled(ResponsiveImage)<{ $focus?: string }>`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $focus }) => $focus ?? 'center'};
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
