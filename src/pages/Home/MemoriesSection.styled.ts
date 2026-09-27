import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: clamp(3rem, 9vw, 6rem) 0;
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.espresso};
  padding: clamp(1.5rem, 6vw, 3.5rem) clamp(1.5rem, 8vw, 6rem);
`

const Photo = styled(ResponsiveImage)`
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TopLeftPhoto = styled(Photo)`
  justify-self: start;
  width: clamp(140px, 15vw, 280px);
  aspect-ratio: 2 / 3;
`

export const TopRightPhoto = styled(Photo)`
  justify-self: end;
  width: clamp(120px, 13vw, 240px);
  aspect-ratio: 3 / 4;
`

export const BottomLeftPhoto = styled(Photo)`
  justify-self: start;
  width: clamp(150px, 17vw, 300px);
  aspect-ratio: 5 / 7;
`

export const BottomRightPhoto = styled(Photo)`
  justify-self: end;
  width: clamp(220px, 30vw, 500px);
  aspect-ratio: 17 / 9;
`

// Centered on the whole section regardless of the photo grid around it.
export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: min(90%, 34rem);
  text-align: center;
`

export const Heading = styled.p`
  margin: 0 0 clamp(0.75rem, 2vw, 1.25rem);
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.5rem, 6vw, 4rem);
`
