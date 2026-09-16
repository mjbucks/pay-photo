import type { Picture } from '../types/image'

interface ResponsiveImageProps {
  picture: Picture
  alt: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  className?: string
}

/** Renders an imagetools `Picture` as a <picture> with format sources and a sized, lazy-loadable fallback <img>. */
export function ResponsiveImage({
  picture,
  alt,
  sizes = '100vw',
  loading = 'lazy',
  className,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={loading}
        decoding="async"
      />
    </picture>
  )
}
