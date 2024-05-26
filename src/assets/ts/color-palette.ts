import { type Ref, ref } from 'vue'
import { type ColorsSection, getGenericHero } from '@/assets/ts/hero/hero-factory'

export class ColorPalette {
  background: string
  widget: string
  hover: string
  title: string
  text: string

  constructor(params: ColorsSection) {
    this.background = params.background
    this.widget = params.widget
    this.hover = params.hover
    this.title = params.title
    this.text = params.text
  }

  fromHeroColors(params: ColorsSection) {
    this.background = params.background
    this.widget = params.widget
    this.hover = params.hover
    this.title = params.title
    this.text = params.text
  }
}

const commonColorPalette: Ref<ColorPalette> = ref(new ColorPalette(getGenericHero().colors))
export const getColorPalette = (): ColorPalette => commonColorPalette.value
