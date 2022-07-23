import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { elComponents, elPlugins } from './plugin/elementui'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// Bind icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// Bind component & plugin (Element plus)
elComponents.forEach((c) => app.component(c.name, c))
elPlugins.forEach((p) => app.use(p))

app.use(router)
app.mount('#app')
