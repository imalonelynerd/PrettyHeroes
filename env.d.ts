/// <reference types="vite/client" />

import { ColorPalette } from '@/assets/ts/color-palette'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $colorPalette: ColorPalette
  }
}
