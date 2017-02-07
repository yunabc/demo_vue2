// https://gold.xitu.io/post/583d1fe00ce463006baca2fa
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import TimeEntries from './components/TimeEntries'

// import router from './router'

/* eslint-disable no-new */

Vue.use(VueRouter)
Vue.use(VueResource)

const routes=[{
	path : '/',
	component : Home
},{
	path : '/home',
	component : Home
},{
	path : '/time-entries',
	component : TimeEntries,
	children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}]
// vue-router路由参数由对象统一变成了数组（与vue1.0不同）
const router = new VueRouter({
	routes
})


// el参数已经不能设置成html，body了
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App)
  ...App
})
