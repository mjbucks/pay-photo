import josie from '../../assets/home/josie.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import meg from '../../assets/home/meg.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import truck from '../../assets/home/truck.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import weddings from '../../assets/home/weddings.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import portraits from '../../assets/home/portraits.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import couples from '../../assets/home/couples.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import garden from '../../assets/home/garden.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import senior from '../../assets/home/senior.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import weddingAlter from '../../assets/home/wedding-alter.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import allie from '../../assets/home/allie.jpg?w=400;800;1400&format=avif;webp;jpg&as=picture'
import payton from '../../assets/home/payton.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import type { ManifestImage } from '../../types/image'

// Images for the "your moments matter" intro section on the home page.
export const momentsImages = {
  josie: { picture: josie, alt: 'Bride reaching toward the light in a pine forest' } satisfies ManifestImage,
  meg: { picture: meg, alt: 'Couple laughing together in falling snow' } satisfies ManifestImage,
  truck: { picture: truck, alt: 'Couple embracing outside a truck, seen through the open door' } satisfies ManifestImage,
}

// Teaser thumbnails for the "the collections" cards on the home page — one per gallery page.
export const collectionsImages = {
  weddings: { picture: weddings, alt: 'Newlyweds cheering as they walk down the aisle' } satisfies ManifestImage,
  portraits: { picture: portraits, alt: 'Portrait of a woman leaning on a wooden fence at golden hour' } satisfies ManifestImage,
  couples: { picture: couples, alt: 'Couple walking hand in hand down a wooded road' } satisfies ManifestImage,
}

// The four scattered photos framing the "let's make some memories" closing section.
export const memoriesImages = {
  garden: { picture: garden, alt: 'Couple dancing together in a garden' } satisfies ManifestImage,
  senior: { picture: senior, alt: 'Senior portrait of a woman standing in a grassy field' } satisfies ManifestImage,
  weddingAlter: { picture: weddingAlter, alt: 'Bride and groom exchanging vows at the altar' } satisfies ManifestImage,
  allie: { picture: allie, alt: 'Couple embracing and smiling in a sunlit field' } satisfies ManifestImage,
}

// Portrait of Payton for the "Hi! I'm Payton" intro section on the home page.
export const introImage = { picture: payton, alt: 'Payton holding her camera at an evening event' } satisfies ManifestImage
