import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./firebase/";
import vuetify from './plugins/vuetify'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import 'leaflet/dist/leaflet.css';
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')
