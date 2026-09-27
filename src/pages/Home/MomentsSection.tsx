import { momentsImages } from '../../content/images/home'
import * as S from './MomentsSection.styled'

/** Intro section below the home page header: tall forest photo, tagline, and a couples photo with copy. */
export function MomentsSection() {
  return (
    <S.Section>
      <S.JosieImage
        picture={momentsImages.josie.picture}
        alt={momentsImages.josie.alt}
        sizes="(min-width: 768px) 25vw, 100vw"
      />
      <S.RightCol>
        <S.TruckImage
          picture={momentsImages.truck.picture}
          alt={momentsImages.truck.alt}
          sizes="(min-width: 768px) 22vw, 45vw"
        />
        <S.Heading>your moments matter.</S.Heading>
        <S.BottomRow>
          <S.PhotoFrame>
            <S.MegImage
              picture={momentsImages.meg.picture}
              alt={momentsImages.meg.alt}
              sizes="(min-width: 768px) 22vw, 60vw"
            />
            <S.Blurb>
              The best photographs happen when you&rsquo;re fully present, not worrying about the camera. I&rsquo;ll
              guide you when you need direction and step back when the moment deserves to unfold naturally.
            </S.Blurb>
          </S.PhotoFrame>
        </S.BottomRow>
      </S.RightCol>
    </S.Section>
  )
}
