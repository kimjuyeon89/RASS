import '@/css/reset.scss'
import '@/css/app.scss'

import '@/css/sub/sub.scss'
import '@/css/sub/ibsheet.scss'
import '@/css/sub/topArea.scss'
import '@/css/sub/breadCrumbs.scss'
import '@/css/login/login.scss'
import '@/css/component/button.scss'
import '@/css/component/form.scss'
import '@/css/component/pagination-default.scss'
import '@/css/component/tabs.scss'
import '@/css/component/table.scss'
import '@/css/component/icons.scss'
import '@/css/component/accordion.scss'
import '@/css/component/popup.scss'
import '@/css/component/comment.scss'
import '@/css/layouts/sidebar.scss'

import '@/css/main/card.scss'
import '@/css/main/menubox.scss'
import '@/css/main/notice.scss'

import '@/css/layouts/header.scss'
import '@/css/layouts/footer.scss'

import '@/css/main/integratedSearch.scss'

import '@/css/gis/gis.scss'

import 'vue3-openlayers/dist/vue3-openlayers.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OpenLayersMap from 'vue3-openlayers'
import { Map } from 'vue3-openlayers'

const app = createApp(App)

app.use(router)
app.use(OpenLayersMap)
app.use(Map)
app.mount('#app')
