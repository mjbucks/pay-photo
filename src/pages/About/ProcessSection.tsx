import { processImages } from '../../content/images/about'
import * as S from './ProcessSection.styled'

const steps = [
  {
    image: processImages.chat,
    caption: "let’s chat",
    text: "Head to my contact page and tell me what you’re dreaming up, and we figure out the details together. We’ll discuss pricing, sign a contract, and set your vision.",
  },
  {
    image: processImages.dayOf,
    caption: 'day of',
    text: "I’ll guide you when you need it and disappear into the background when you don’t. I usually do a mix of prompting & posing to help guide.",
  },
  {
    image: processImages.gallery,
    caption: 'gallery',
    text: 'Within just a few weeks you will receive a fully edited gallery link where you can save all your new beautiful photos.',
  },
] as const

/** "What to expect / working with me" three-step process section on the About page. */
export function ProcessSection() {
  return (
    <S.Section>
      <S.Heading>
        <S.Eyebrow>what to expect</S.Eyebrow>
        <S.Title>working with me</S.Title>
      </S.Heading>
      <S.Grid>
        {steps.map((step) => (
          <S.Item key={step.caption}>
            <S.Photo picture={step.image.picture} alt={step.image.alt} sizes="(min-width: 768px) 30vw, 80vw" />
            <S.Caption>{step.caption}</S.Caption>
            <S.Paragraph>{step.text}</S.Paragraph>
          </S.Item>
        ))}
      </S.Grid>
    </S.Section>
  )
}
