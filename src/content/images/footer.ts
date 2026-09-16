import footer1 from '../../assets/footer/footer-1.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer2 from '../../assets/footer/footer-2.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer3 from '../../assets/footer/footer-3.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer4 from '../../assets/footer/footer-4.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer5 from '../../assets/footer/footer-5.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer6 from '../../assets/footer/footer-6.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import footer7 from '../../assets/footer/footer-7.jpg?w=200;400;900&format=avif;webp;jpg&as=picture'
import type { ManifestImage } from '../../types/image'

// Fixed strip, same on every page. Swap a photo by replacing its file at the path below —
// the import (and therefore the responsive output) updates automatically.
export const footerImages: ManifestImage[] = [
  { picture: footer1, alt: 'Photo from a recent shoot' },
  { picture: footer2, alt: 'Photo from a recent shoot' },
  { picture: footer3, alt: 'Photo from a recent shoot' },
  { picture: footer4, alt: 'Photo from a recent shoot' },
  { picture: footer5, alt: 'Photo from a recent shoot' },
  { picture: footer6, alt: 'Photo from a recent shoot' },
  { picture: footer7, alt: 'Photo from a recent shoot' },
]
