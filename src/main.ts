import '@/assets/style/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getColorPalette } from '@/assets/code/color-palette'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$colorPalette = getColorPalette()
app.mount('#app')
