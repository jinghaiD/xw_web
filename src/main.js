import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import Particles from "particles.vue3";
const app = createApp(App)
app.use(VueAxios,axios)
app.use(ElementPlus)
app.use(router)
app.use(Particles)
app.mount('#app')

