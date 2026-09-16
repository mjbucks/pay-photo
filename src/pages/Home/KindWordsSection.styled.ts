import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.espresso};
  color: ${({ theme }) => theme.colors.ivory};
  padding: clamp(2.5rem, 7vw, 4.5rem) clamp(1.5rem, 6vw, 3rem);
  text-align: center;
`

export const Heading = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.75rem, 8vw, 4.5rem);
`

export const ReviewLink = styled.p`
  margin: 0.5rem 0 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);

  a {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }
`

export const Carousel = styled.div`
  position: relative;
  margin-top: clamp(2rem, 6vw, 3.5rem);
`

export const NavButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${({ $direction }) => ($direction === 'prev' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  z-index: 1;
  color: ${({ theme }) => theme.colors.denim};

  svg {
    width: clamp(1.5rem, 3vw, 2rem);
    height: auto;
    ${({ $direction }) => ($direction === 'prev' ? 'transform: rotate(180deg);' : '')}
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding: 0 clamp(2.5rem, 8vw, 4.5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 40rem;
  height: clamp(22rem, 48vw, 30rem);
  overflow: hidden;
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.espresso};
  border-radius: 0.25rem;
  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.5rem, 4vw, 2.5rem);
`

export const Category = styled.p`
  margin: 0 0 clamp(1.25rem, 4vw, 2rem);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(1.15rem, 2.5vw, 1.4rem);
`

// Font size is set per-quote (see quoteFontSize in KindWordsSection.tsx) so every card can share
// the same fixed height: long reviews shrink to fit it, short ones grow to fill it.
export const Quote = styled.p<{ $fontSize: string }>`
  margin: 0;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: ${({ $fontSize }) => $fontSize};
  line-height: 1.6;
`
