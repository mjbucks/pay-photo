import styled from 'styled-components'
import { ResponsiveImage } from '../../components/ResponsiveImage'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.espresso};
  color: ${({ theme }) => theme.colors.ivory};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(160px, 25%) 1fr;
    grid-template-rows: auto auto;
    row-gap: clamp(2rem, 6vw, 4rem);
  }
`

// Flush against the section's top-left corner — no padding/gap around it — and, at tablet+,
// stretched to span both grid rows so it matches the combined height of the middle/heading row and
// the photo/blurb row instead of its own aspect ratio.
export const JosieImage = styled(ResponsiveImage)`
  display: block;
  aspect-ratio: 2 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: auto;
    height: 100%;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`

// Groups the car photo, heading, and bottom row for mobile stacking (its own padding/gap). At
// tablet+ it becomes a transparent `display: contents` wrapper so those children are placed
// directly on the Section grid — needed for the heading and bottom row to center on the *whole*
// section width, not just this column.
export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding: clamp(1.5rem, 4vw, 2.5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: contents;
  }
`

// Flush against the section's top-right corner at tablet+, matching the left photo's top-left placement.
export const TruckImage = styled(ResponsiveImage)`
  align-self: flex-end;
  width: clamp(160px, 22vw, 440px);
  aspect-ratio: 3 / 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    align-self: start;
  }
`

// Centered on the full section width at tablet+ (spans both grid columns), sharing a row with the
// car photo without visually overlapping it, since the centered text lands to the right of the
// narrower forest/car column.
export const Heading = styled.h2`
  margin: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-weight: 400;
  font-size: clamp(2.5rem, 6vw, 4rem);
  padding: 0 clamp(1rem, 5vw, 2rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
    padding: 0;
  }
`

// Centered on the full section width at tablet+ and, as the grid's last row with no trailing
// padding, flush against the section's bottom edge.
export const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 clamp(1rem, 5vw, 2rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 0;
  }
`

export const PhotoFrame = styled.div`
  position: relative;
  width: clamp(220px, 22vw, 440px);
`

export const MegImage = styled(ResponsiveImage)`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

// On mobile it sits in normal flow below the photo; at tablet+ it's pinned partway down the
// photo's height and pulled left so it overlaps the photo's edge. A fixed width (rather than
// relying on shrink-to-fit) keeps it from collapsing to min-content: an absolutely positioned box
// with `left` set but no `right` has zero available width to shrink-fit against, so it wraps to
// one word per line without an explicit width.
export const Blurb = styled.p`
  margin: 1rem 0 0;
  width: 100%;
  max-width: 26rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    z-index: 1;
    top: 60%;
    left: 100%;
    width: clamp(17rem, 24vw, 23rem);
    max-width: none;
    margin: 0 0 0 -2.5rem;
    text-align: left;
  }
`
