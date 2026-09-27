import { Link } from 'react-router-dom'
import waxSeal from '../../../assets/footer/wax-seal.png'
import { footerImages } from '../../../content/images/footer'
import { primaryNav, galleryNav } from '../../../content/nav'
import { InstagramIcon } from '../../icons/InstagramIcon'
import { PinterestIcon } from '../../icons/PinterestIcon'
import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Footer>
      <S.PhotoStrip>
        {footerImages.map((image, index) => (
          <S.StripImage key={index} picture={image.picture} alt={image.alt} sizes="(min-width: 768px) 14vw, 33vw" />
        ))}
      </S.PhotoStrip>

      <S.Content>
        <S.NavColumn $align="start">
          <S.Rule />
          <S.NavList>
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </S.NavList>
          <S.Rule />
        </S.NavColumn>

        <S.Brand>
          <S.Seal src={waxSeal} alt="Payphotographs wax seal" />
          <S.SocialRow>
            <S.SocialLink href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </S.SocialLink>
            <S.SocialLink href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <PinterestIcon />
            </S.SocialLink>
          </S.SocialRow>
          <S.Established>Est. 2023</S.Established>
        </S.Brand>

        <S.NavColumn $align="end">
          <S.Rule />
          <S.NavList>
            {galleryNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </S.NavList>
          <S.Rule />
        </S.NavColumn>
      </S.Content>
    </S.Footer>
  )
}
