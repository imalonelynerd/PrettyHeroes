/// <reference types="vite/client" />

import { ColorPalette } from '@/assets/code/color-palette'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $colorPalette: ColorPalette
  }
}
