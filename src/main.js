import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router'
import './index.css'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
