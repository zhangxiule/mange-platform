// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //默认主题
// import 'element-ui/lib/theme-green/index.css'  //浅绿色主题
// import SIdentify from './components/Identify'
import 'babel-polyfill'
import '../static/iconfont/iconfont.css'

// Vue.config.productionTip = false
// Vue.component("SIdentify",SIdentify);
Vue.use(ElementUI);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios

// Vue.use(axios);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


