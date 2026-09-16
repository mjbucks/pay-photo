import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { NotBuilt } from './pages/NotBuilt'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<NotBuilt />} />
          <Route path="/weddings" element={<NotBuilt />} />
          <Route path="/couples" element={<NotBuilt />} />
          <Route path="/portraits" element={<NotBuilt />} />
          <Route path="*" element={<NotBuilt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
