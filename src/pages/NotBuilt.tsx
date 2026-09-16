import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`

// Route exists so nav links resolve; page design hasn't been provided yet.
export function NotBuilt() {
  return (
    <Wrapper>
      <p>Page not built yet.</p>
    </Wrapper>
  )
}
