import studio from '../../assets/about/studio.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import nyc from '../../assets/about/nyc.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import smokies from '../../assets/about/smokies.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import chat from '../../assets/about/chat.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import dayOf from '../../assets/about/day-of.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import gallery from '../../assets/about/gallery.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import friends from '../../assets/about/friends.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import austin from '../../assets/about/austin.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import graduation from '../../assets/about/graduation.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import boat from '../../assets/about/boat.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import hawaii from '../../assets/about/hawaii.jpg?w=400;800;1200&format=avif;webp;jpg&as=picture'
import selfie from '../../assets/about/selfie.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import gameday from '../../assets/about/gameday.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import sign from '../../assets/about/sign.jpg?w=300;600;900&format=avif;webp;jpg&as=picture'
import type { ManifestImage } from '../../types/image'

// The three polaroid-style photos in the About page bio section, top to bottom.
export const bioImages = {
  studio: { picture: studio, alt: 'Payton smiling and holding her camera, sitting on a stool in front of a curtain' } satisfies ManifestImage,
  nyc: { picture: nyc, alt: 'Payton smiling in Times Square at night, surrounded by billboards' } satisfies ManifestImage,
  smokies: { picture: smokies, alt: 'Payton laughing in a grassy field with the Smoky Mountains behind her' } satisfies ManifestImage,
}

// The three "what to expect" photos on the About page, left to right.
export const processImages = {
  chat: { picture: chat, alt: 'Close-up of a bride holding a colorful bouquet beside the groom' } satisfies ManifestImage,
  dayOf: { picture: dayOf, alt: 'Close-up of a mirrored disco ball' } satisfies ManifestImage,
  gallery: { picture: gallery, alt: "Close-up of a couple's hands showing their wedding rings" } satisfies ManifestImage,
}

// The personal snapshot collage at the end of the About page.
export const snapshotImages = {
  friends: { picture: friends, alt: 'Payton with friends outside a building' } satisfies ManifestImage,
  austin: { picture: austin, alt: 'Payton and her partner in front of a colorful "Hello Austin" mural' } satisfies ManifestImage,
  graduation: {
    picture: graduation,
    alt: 'Payton in her graduation gown holding her dachshund on the stadium steps',
  } satisfies ManifestImage,
  boat: { picture: boat, alt: 'Payton and a friend taking a selfie at a boat dock' } satisfies ManifestImage,
  hawaii: { picture: hawaii, alt: 'Engaged couple holding hands on a road in Hawaii' } satisfies ManifestImage,
  selfie: { picture: selfie, alt: 'Blurry close-up selfie of Payton and a friend smiling' } satisfies ManifestImage,
  gameday: { picture: gameday, alt: 'Payton and friends at an Iowa State game day' } satisfies ManifestImage,
  sign: { picture: sign, alt: 'Payton and a friend in front of a hand-painted "Sunshine" sign' } satisfies ManifestImage,
}
