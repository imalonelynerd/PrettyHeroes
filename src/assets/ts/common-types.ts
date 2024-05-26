export type PixelSize = `${number}px`

export interface PrideFlag {
  img: string
  name: string
}

export interface FetchableUrl {
  name: string
  type: string
  url: string
}

export interface LinkDescriber {
  title: string
  url: string
}

export interface EmbedFetchedData {
  thumbnail_url?: string
  title?: string
  author_name?: string
  author_url?: string
  provider_name?: string
  provider_url?: string
  url?: string
}

export enum LoadingState {
  IDLE,
  LOADING,
  RESOLVED,
  ERROR
}
