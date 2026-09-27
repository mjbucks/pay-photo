import styled from 'styled-components'

export const List = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.75rem;
  z-index: 1;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.85rem;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  a {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 0.3em;
    white-space: nowrap;
  }
`

export const CloseButton = styled.button`
  font-size: 1.6rem;
  line-height: 1;
`
