// --- Version : ROSA

import type { LinkDescriber } from '@/assets/code/common-types'

export interface TitleSection {
  image: string
  title: string
  subtitle: string
  age: string
  catchphrase: string
  pronouns: string
}

export interface AboutSection {
  work: string
  location: string
  timezone: string
  status: string
  flags: Array<string>
  proPage: string
  desc: string
  isExternal: boolean
}

export interface ColorsSection {
  bgimg: string
  background: string
  widget: string
  hover: string
  title: string
  text: string
}

export interface OnlineSection {
  videos: Array<LinkDescriber>
  links: Array<LinkDescriber>
}

export interface ExtrasSection {
  pronounceCompat: boolean
  enableSnapshot: boolean
  enableSharing: boolean
  version: string
}

export interface Hero {
  title: TitleSection
  about: AboutSection
  colors: ColorsSection
  online: OnlineSection
  extras: ExtrasSection
}

export const getGenericHero = (): Hero => {
  return genericHero
}

export const genericHero: Hero = {
  title: {
    image:
      'https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Jane',
    subtitle: 'Doe',
    age: '42',
    catchphrase: 'Greetings from PrettyHeroes',
    pronouns: 'They/them'
  },
  about: {
    work: 'Photographer',
    location: 'London, UK',
    timezone: 'UTC+0',
    status: 'Away',
    flags: ['nb'],
    proPage: '',
    desc: 'Type **anything** here !',
    isExternal: false
  },
  colors: {
    bgimg: '',
    background: '#202020',
    widget: '#404040',
    hover: '#808080',
    title: '#FFFFFF',
    text: '#FFFFFF'
  },
  online: {
    videos: [
      {
        title: 'Favourite music',
        url: 'https://www.youtu.be/DLzxrzFCyOs'
      },
      {
        title: 'Favourite video',
        url: 'https://www.youtu.be/3r-IjzlOcek'
      }
    ],
    links: [
      {
        title: 'Best website in the Universe',
        url: 'http://localhost'
      }
    ]
  },
  extras: {
    pronounceCompat: false,
    enableSnapshot: true,
    enableSharing: true,
    version: ''
  }
}
