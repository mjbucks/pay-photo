import { ArrowLink } from '../../components/ArrowLink'
import { introImage } from '../../content/images/home'
import * as S from './IntroSection.styled'

/** "Hi! I'm Payton" bio section on the home page: portrait beside a short intro and a link to About. */
export function IntroSection() {
  return (
    <S.Section>
      <S.Content>
        <S.Photo picture={introImage.picture} alt={introImage.alt} sizes="(min-width: 768px) 26vw, 60vw" />
        <S.Text>
          <S.Heading>Hi ! I&rsquo;m Payton</S.Heading>
          <S.Eyebrow>Professional third wheel.</S.Eyebrow>
          <S.Paragraph>
            Some people call me pay, others pb, I just want you to call me for a photo shoot;)
          </S.Paragraph>
          <S.Paragraph>
            I&rsquo;m a lifestyle/milestone photographer based in Austin, Texas, but I&rsquo;m always down to hop on
            a plane for a chance to share your story.
          </S.Paragraph>
          <S.Paragraph>
            I love photographs that feel like memories. The goal is to have a fun evening capturing photos that can
            be found in a box in 30 years. Maybe a little imperfect, definitely nostalgic, and full of life.
          </S.Paragraph>
          <S.ArrowLinkRow>
            <ArrowLink to="/about">About Me</ArrowLink>
          </S.ArrowLinkRow>
        </S.Text>
      </S.Content>
    </S.Section>
  )
}
