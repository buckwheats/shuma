import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './vuerouter/index.js'
import store from './STOTR/index.js'

Vue.use(ElementUI)
Vue.prototype.a=true
new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
