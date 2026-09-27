import { snapshotImages } from '../../content/images/about'
import * as S from './SnapshotsSection.styled'

/** Personal snapshot collage closing out the About page: staggered columns of candid photos and captions. */
export function SnapshotsSection() {
  return (
    <S.Section>
      <S.Columns>
        <S.Column $align="start">
          <S.Item>
            <S.Photo
              picture={snapshotImages.friends.picture}
              alt={snapshotImages.friends.alt}
              $aspect="2 / 3"
              $width="17rem"
              sizes="(min-width: 768px) 25vw, 70vw"
            />
            <S.Caption>lover of Jesus, music, and traveling</S.Caption>
          </S.Item>
          <S.Item>
            <S.Photo
              picture={snapshotImages.boat.picture}
              alt={snapshotImages.boat.alt}
              $aspect="7 / 5"
              $width="20rem"
              sizes="(min-width: 768px) 28vw, 80vw"
            />
            <S.Caption>Roll Clones</S.Caption>
          </S.Item>
          <S.Item>
            <S.Photo
              picture={snapshotImages.selfie.picture}
              alt={snapshotImages.selfie.alt}
              $aspect="4 / 3"
              $width="16rem"
              sizes="(min-width: 768px) 22vw, 70vw"
            />
            <S.Caption>love is love</S.Caption>
          </S.Item>
        </S.Column>

        <S.Column $offset>
          <S.Item>
            <S.Photo
              picture={snapshotImages.austin.picture}
              alt={snapshotImages.austin.alt}
              $aspect="3 / 4"
              $width="20rem"
              sizes="(min-width: 768px) 28vw, 80vw"
            />
            <S.Caption>hi from down south!</S.Caption>
          </S.Item>
          <S.Item>
            <S.Photo
              picture={snapshotImages.hawaii.picture}
              alt={snapshotImages.hawaii.alt}
              $aspect="4 / 3"
              $width="30rem"
              sizes="(min-width: 768px) 42vw, 95vw"
            />
            <S.Caption $wide>
              engagement photos in our favorite place (Hawaii)
              <br />
              edited by me
            </S.Caption>
          </S.Item>
          <S.Item>
            <S.Photo
              picture={snapshotImages.gameday.picture}
              alt={snapshotImages.gameday.alt}
              $aspect="8 / 5"
              $width="20rem"
              sizes="(min-width: 768px) 28vw, 80vw"
            />
          </S.Item>
        </S.Column>

        <S.Column $offset $align="end">
          <S.Caption>reader, media consumer, artist</S.Caption>
          <S.Item>
            <S.Photo
              picture={snapshotImages.graduation.picture}
              alt={snapshotImages.graduation.alt}
              $aspect="4 / 5"
              $width="17rem"
              sizes="(min-width: 768px) 25vw, 70vw"
            />
            <S.Caption>doxie connoisseur</S.Caption>
          </S.Item>
          <S.Item>
            <S.Photo
              picture={snapshotImages.sign.picture}
              alt={snapshotImages.sign.alt}
              $aspect="1 / 1"
              $width="17rem"
              sizes="(min-width: 768px) 25vw, 70vw"
            />
          </S.Item>
        </S.Column>
      </S.Columns>
    </S.Section>
  )
}
