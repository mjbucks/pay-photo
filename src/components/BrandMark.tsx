import { useId } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
  width: clamp(220px, 26vw, 340px);
  height: auto;
  overflow: visible;

  text {
    font-family: ${({ theme }) => theme.fonts.script};
    font-size: 26px;
    fill: ${({ theme }) => theme.colors.ivory};
  }
`

// The wordmark sits on a gentle upward arc, per the Figma mockup — plain centered text doesn't match.
export function BrandMark() {
  const arcId = useId()

  return (
    <Link to="/" aria-label="payphotographs — home">
      <Svg viewBox="0 0 300 70">
        <path id={arcId} d="M 5 58 Q 150 8 295 58" fill="none" />
        <text textAnchor="middle">
          <textPath href={`#${arcId}`} startOffset="50%">
            payphotographs
          </textPath>
        </text>
      </Svg>
    </Link>
  )
}
