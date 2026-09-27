import { bioImages } from '../../content/images/about'
import * as S from './BioSection.styled'

/** Payton's extended bio on the About page: three alternating polaroid photos and story text. */
export function BioSection() {
  return (
    <S.Section>
      <S.Row>
        <S.PhotoFrame $rotate="-4deg" $aspect="4 / 5">
          <S.Photo picture={bioImages.studio.picture} alt={bioImages.studio.alt} sizes="(min-width: 768px) 26vw, 60vw" />
        </S.PhotoFrame>
        <S.Text>
          <S.Heading>Hi ! I&rsquo;m Payton</S.Heading>
          <S.Subtitle>Your next photographer;)</S.Subtitle>
          <S.Paragraph>
            I&rsquo;ve pretty much always been the friend with the camera. The one with the random photo from three
            years ago. Photography really started to become my thing during college when I was a social media
            intern and studying graphic design. In 2023, I figured I&rsquo;d chase after it and what I thought would
            be a fun side hustle slowly became something I couldn&rsquo;t imagine not doing.
          </S.Paragraph>
        </S.Text>
      </S.Row>

      <S.Row $reverse>
        <S.PhotoFrame $rotate="3deg" $aspect="4 / 5">
          <S.Photo picture={bioImages.nyc.picture} alt={bioImages.nyc.alt} sizes="(min-width: 768px) 26vw, 60vw" />
        </S.PhotoFrame>
        <S.Text>
          <S.Paragraph>
            Photos have always been my way of holding onto the little moments I would otherwise forget. I love that
            a photo can bring you right back to how something felt. I&rsquo;m also a huge rom-com girl and The
            Notebook has always been one of my favorites. The idea of documenting a whole love story so you can
            look back on it years later is pretty special to me.
          </S.Paragraph>
          <S.Paragraph>
            That&rsquo;s probably why I love weddings and couples so much. I get to be a fly on the wall and see
            your story up close. Every couple is different and I love finding the little things that make your
            relationship yours. The quiet moments matter just as much as the big ones.
          </S.Paragraph>
          <S.Paragraph>
            I&rsquo;m here for both sides of the camera. If you&rsquo;re awkward in front of it, I&rsquo;ll guide
            you. If you&rsquo;d rather just forget I&rsquo;m there, I&rsquo;ll step back and let things happen. Some
            of my favorite photos are the ones you didn&rsquo;t even know I was taking.
          </S.Paragraph>
        </S.Text>
      </S.Row>

      <S.Row>
        <S.PhotoFrame $rotate="-3deg" $aspect="4 / 5">
          <S.Photo picture={bioImages.smokies.picture} alt={bioImages.smokies.alt} sizes="(min-width: 768px) 26vw, 60vw" />
        </S.PhotoFrame>
        <S.Text>
          <S.Paragraph>
            My work is inspired by old photographs and that nostalgic feeling of looking through an album years
            later. I love mixing that feeling with the quality of digital photography to create images that feel
            both timeless and current.
          </S.Paragraph>
          <S.Paragraph>
            When I&rsquo;m not behind my camera, I&rsquo;m probably with my fianc&eacute;, planning a beach trip,
            binge-watching the latest coming of age show or taking pictures of my blonde mini dachshund, Honey.
            I&rsquo;m a Jesus lover, a big fan of a sweet treat, and the friend who will hype you up for just about
            anything.
          </S.Paragraph>
          <S.Paragraph>
            At the end of the day, I want to be more than the person taking your photos. I want to be in your
            corner, make you feel comfortable, and help you remember exactly what this season of your life felt
            like.
          </S.Paragraph>
          <S.Paragraph>I&rsquo;d love to tell your story &hearts;</S.Paragraph>
        </S.Text>
      </S.Row>
    </S.Section>
  )
}
