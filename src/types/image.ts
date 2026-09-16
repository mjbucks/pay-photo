export interface Picture {
  img: { src: string; w: number; h: number }
  sources: Record<string, string>
}

export interface ManifestImage {
  picture: Picture
  alt: string
}
