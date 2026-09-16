import { ArrowLink } from '../../components/ArrowLink'
import { memoriesImages } from '../../content/images/home'
import * as S from './MemoriesSection.styled'

/** Closing section of the home page: four scattered photos framing a centered call to contact. */
export function MemoriesSection() {
  return (
    <S.Section>
      <S.TopLeftPhoto
        picture={memoriesImages.garden.picture}
        alt={memoriesImages.garden.alt}
        sizes="(min-width: 768px) 15vw, 35vw"
      />
      <S.TopRightPhoto
        picture={memoriesImages.senior.picture}
        alt={memoriesImages.senior.alt}
        sizes="(min-width: 768px) 13vw, 35vw"
      />
      <S.BottomLeftPhoto
        picture={memoriesImages.weddingAlter.picture}
        alt={memoriesImages.weddingAlter.alt}
        sizes="(min-width: 768px) 17vw, 35vw"
      />
      <S.BottomRightPhoto
        picture={memoriesImages.allie.picture}
        alt={memoriesImages.allie.alt}
        sizes="(min-width: 768px) 30vw, 70vw"
      />
      <S.Center>
        <S.Heading>let&rsquo;s make some memories</S.Heading>
        <ArrowLink to="/contact">Contact</ArrowLink>
      </S.Center>
    </S.Section>
  )
}
