import { Header } from '../../components/layout/Header/Header'
import { headerImages } from '../../content/images/headers'
import { BioSection } from './BioSection'
import { ProcessSection } from './ProcessSection'
import { SnapshotsSection } from './SnapshotsSection'

export function About() {
  return (
    <>
      <Header picture={headerImages.about.picture} alt={headerImages.about.alt} heading="about me" />
      <BioSection />
      <ProcessSection />
      <SnapshotsSection />
    </>
  )
}
