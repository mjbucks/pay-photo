import homeHeader from '../../assets/headers/home.jpg?w=640;1200;1920;2560&format=avif;webp;jpg&as=picture'
import aboutHeader from '../../assets/headers/about.jpg?w=640;1200;1920;2560&format=avif;webp;jpg&as=picture'
import type { ManifestImage } from '../../types/image'

// One entry per page's header background. Swap a photo by replacing its file at the path below.
export const headerImages = {
  home: { picture: homeHeader, alt: 'Couple walking arm in arm down a sunlit path at dusk' } satisfies ManifestImage,
  about: {
    picture: aboutHeader,
    alt: 'Couple laughing and holding hands in the ocean shallows at sunset',
  } satisfies ManifestImage,
}
