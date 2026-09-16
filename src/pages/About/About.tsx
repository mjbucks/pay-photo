import { Header } from '../../components/layout/Header/Header'
import { headerImages } from '../../content/images/headers'

export function About() {
  return <Header picture={headerImages.about.picture} alt={headerImages.about.alt} heading="about me" />
}
