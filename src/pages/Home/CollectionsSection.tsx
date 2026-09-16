import { collectionsImages } from '../../content/images/home'
import * as S from './CollectionsSection.styled'

const cards = [
  { path: '/weddings', caption: 'weddings', image: collectionsImages.weddings, rotate: -6, hoverRotate: -10, front: false },
  { path: '/portraits', caption: 'portraits', image: collectionsImages.portraits, rotate: 0, hoverRotate: -5, front: true },
  { path: '/couples', caption: 'couples', image: collectionsImages.couples, rotate: 6, hoverRotate: 10, front: false },
] as const

/** "The collections" teaser below the home page's intro: three tilted polaroid links to the gallery pages. */
export function CollectionsSection() {
  return (
    <S.Section>
      <S.Heading>
        <S.Eyebrow>the</S.Eyebrow>
        <S.Title>collections</S.Title>
      </S.Heading>
      <S.CardRow>
        {cards.map((card) => (
          <S.Card
            key={card.path}
            to={card.path}
            $rotate={card.rotate}
            $hoverRotate={card.hoverRotate}
            $front={card.front}
          >
            <S.Photo picture={card.image.picture} alt={card.image.alt} sizes="(min-width: 768px) 22vw, 45vw" />
            <S.Caption>{card.caption}</S.Caption>
          </S.Card>
        ))}
      </S.CardRow>
    </S.Section>
  )
}
