import type {
  AboutSection,
  ColorsSection,
  ExtrasSection,
  Hero,
  OnlineSection,
  TitleSection
} from '@/assets/code/hero/hero-factory'
import {
  isValidArray,
  isValidBoolean,
  isValidColor,
  isValidString
} from '@/assets/code/common-tools'

export const isTitleSection = (section: any): section is TitleSection =>
  isValidString(section, 'image') &&
  isValidString(section, 'title') &&
  isValidString(section, 'subtitle') &&
  isValidString(section, 'age') &&
  isValidString(section, 'catchphrase') &&
  isValidString(section, 'pronouns')

export const isAboutSelection = (section: any): section is AboutSection =>
  isValidString(section, 'work') &&
  isValidString(section, 'location') &&
  isValidString(section, 'timezone') &&
  isValidString(section, 'status') &&
  isValidArray(section, 'flags') &&
  isValidString(section, 'proPage') &&
  isValidString(section, 'desc') &&
  isValidBoolean(section, 'isExternal')

export const isColorsSection = (section: any): section is ColorsSection =>
  isValidString(section, 'bgimg') &&
  isValidColor(section, 'background') &&
  isValidColor(section, 'widget') &&
  isValidColor(section, 'hover') &&
  isValidColor(section, 'title') &&
  isValidColor(section, 'text')

export const isOnlineSection = (section: any): section is OnlineSection =>
  isValidArray(section, 'videos') && isValidArray(section, 'links')

export const isExtrasSection = (section: any): section is ExtrasSection =>
  isValidBoolean(section, 'pronounceCompat') &&
  isValidBoolean(section, 'enableSnapshot') &&
  isValidBoolean(section, 'enableSharing') &&
  isValidString(section, 'version')

export const isHero = (object: any): object is Hero =>
  'title' in object &&
  isTitleSection(object.title) &&
  'about' in object &&
  isAboutSelection(object.about) &&
  'colors' in object &&
  isColorsSection(object.colors) &&
  'online' in object &&
  isOnlineSection(object.online) &&
  'extras' in object &&
  isExtrasSection(object.extras)
