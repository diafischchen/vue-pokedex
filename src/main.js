import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import 'aos/dist/aos.css'

createApp(App).use(store).mount('#app')
