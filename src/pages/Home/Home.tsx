import { Header } from '../../components/layout/Header/Header'
import { headerImages } from '../../content/images/headers'
import { CollectionsSection } from './CollectionsSection'
import { IntroSection } from './IntroSection'
import { KindWordsSection } from './KindWordsSection'
import { MemoriesSection } from './MemoriesSection'
import { MomentsSection } from './MomentsSection'

export function Home() {
  return (
    <>
      <Header
        picture={headerImages.home.picture}
        alt={headerImages.home.alt}
        heading="documenting the good stuff"
        eyebrow="Austin, TX + wherever you take me"
      />
      <MomentsSection />
      <CollectionsSection />
      <MemoriesSection />
      <IntroSection />
      <KindWordsSection />
    </>
  )
}
