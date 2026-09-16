import type { ReactNode } from 'react'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { StyledLink } from './ArrowLink.styled'

interface ArrowLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Small uppercase link with a trailing arrow — used for the site's "go somewhere" calls to action. */
export function ArrowLink({ to, children, className }: ArrowLinkProps) {
  return (
    <StyledLink to={to} className={className}>
      {children} <ArrowRightIcon />
    </StyledLink>
  )
}
