import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'

// Footer is identical on every route; each page renders its own Header with page-specific content.
export function SiteLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
