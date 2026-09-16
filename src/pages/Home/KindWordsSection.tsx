import { useState } from 'react'
import { ArrowRightIcon } from '../../components/icons/ArrowRightIcon'
import { testimonialPairs } from '../../content/testimonials'
import * as S from './KindWordsSection.styled'

const MIN_QUOTE_FONT_REM = 0.8
const MAX_QUOTE_FONT_REM = 1.5

// Every card is the same fixed height, so a quote's font size is picked from its length: long
// reviews shrink to fit that height, short ones grow to fill it rather than leaving it half-empty.
function quoteFontSize(quote: string): string {
  const fitRem = Math.sqrt(190000 / quote.length) / 16
  const rem = Math.min(MAX_QUOTE_FONT_REM, Math.max(MIN_QUOTE_FONT_REM, fitRem))
  return `${rem.toFixed(2)}rem`
}

/** "Kind words" testimonials carousel: prev/next arrows swipe between review pairs by shoot type. */
export function KindWordsSection() {
  const [pairIndex, setPairIndex] = useState(0)

  const showPrev = () => setPairIndex((index) => (index - 1 + testimonialPairs.length) % testimonialPairs.length)
  const showNext = () => setPairIndex((index) => (index + 1) % testimonialPairs.length)

  return (
    <S.Section>
      <S.Heading>kind words</S.Heading>
      <S.ReviewLink>
        leave a review{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSel-cbRTeSeAhMQUvVd0vjMSDhH5DPinOy2aJcz1nVyDdPD4A/viewform"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </S.ReviewLink>

      <S.Carousel>
        <S.NavButton type="button" $direction="prev" onClick={showPrev} aria-label="Show previous reviews">
          <ArrowRightIcon />
        </S.NavButton>
        <S.NavButton type="button" $direction="next" onClick={showNext} aria-label="Show next reviews">
          <ArrowRightIcon />
        </S.NavButton>

        <S.Cards>
          {testimonialPairs[pairIndex].map((testimonial, index) => (
            <S.Card key={index}>
              <S.Category>{testimonial.category}</S.Category>
              <S.Quote $fontSize={quoteFontSize(testimonial.quote)}>{testimonial.quote}</S.Quote>
            </S.Card>
          ))}
        </S.Cards>
      </S.Carousel>
    </S.Section>
  )
}
