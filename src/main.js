import { createApp } from 'vue'
import jspp from './libs/JsppUI'
import App from './App.vue'

const app = createApp(App)
app.use(jspp)
app.mount('#app')
