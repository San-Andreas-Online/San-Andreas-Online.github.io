import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import i18n, { initI18n } from './services/i18n'

await initI18n()

createApp(App).use(i18n).mount('#app')