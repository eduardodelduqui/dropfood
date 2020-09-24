import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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
