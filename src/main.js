import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueWindowSize from 'vue-window-size'
import VueGeolocation from 'vue-browser-geolocation'
import * as geolib from 'geolib'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueWindowSize);
Vue.use(geolib);
Vue.use(VueGeolocation);

Vue.http.options.root = 'http://localhost:3000'


const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
