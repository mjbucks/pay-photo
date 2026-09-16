import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 0.3em;
  color: ${({ theme }) => theme.colors.denim};

  svg {
    width: 1.1rem;
    height: auto;
  }
`
