// --- Version : ROSA

import genericHero from '@/assets/json/genericHero.json'
import { ObjectStructure } from '@/assets/js/classTools/ObjectStructure.js'

export const getEmptyHero = () => ({
  title: {
    image: '',
    firstName: '',
    lastName: '',
    age: '',
    catchphrase: '',
    pronouns: ''
  },
  about: {
    work: '',
    location: '',
    timezone: '',
    status: '',
    flags: [],
    propage: '',
    desc: ''
  },
  colors: {
    bgimg: '',
    background: '',
    widget: '',
    hover: '',
    title: '',
    text: ''
  },
  online: {
    videos: [],
    links: []
  },
  extras: {
    pronounceCompat: false,
    enableSnapshot: false,
    version: ''
  }
})

export const getGenericHero = () => genericHero

export const getHeroStructure = () => new ObjectStructure(getEmptyHero())
