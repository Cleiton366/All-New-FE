import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './routes'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')