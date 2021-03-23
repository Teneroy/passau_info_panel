import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import Home from "@/components/Home";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: "/", component: Home },
  { path: "*", component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
