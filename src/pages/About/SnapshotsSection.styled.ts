import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.espresso};
  padding: clamp(4.5rem, 13vw, 9rem) clamp(0.75rem, 3vw, 2rem);
`

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 9vw, 5rem);
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: clamp(1.5rem, 4vw, 3rem);
  }
`

export const Column = styled.div<{ $offset?: boolean; $align?: 'start' | 'end' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3.5rem, 10vw, 6.5rem);
  flex: 1;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: ${({ $align }) => ($align === 'start' ? 'flex-start' : $align === 'end' ? 'flex-end' : 'center')};
    margin-top: ${({ $offset }) => ($offset ? 'clamp(4rem, 12vw, 8.5rem)' : '0')};
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
`

export const Photo = styled(ResponsiveImage)<{ $aspect: string; $width: string }>`
  display: block;
  width: ${({ $width }) => $width};
  max-width: 100%;
  aspect-ratio: ${({ $aspect }) => $aspect};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Caption = styled.p<{ $wide?: boolean }>`
  margin: 0;
  max-width: ${({ $wide }) => ($wide ? '28rem' : '18rem')};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-weight: 500;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  line-height: 1.4;
`
