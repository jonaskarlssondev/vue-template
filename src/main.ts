import { createApp } from 'vue'
import { store } from '@/store'
import { router } from '@/router/router'
import App from '@/App.vue'
import '@/index.css'

const app = createApp(App);

app.use(store)
app.use(router)

app.mount('#app')
