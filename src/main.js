import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// import env from './env'

// mock开关
const mock =true;
if(mock){
  // import是预编译加载，require运行时加载
  require('./mock/api')
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL='/api';
axios.defaults.timeout = 8000;

// axios.defaults.baseURL=env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res= response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 未登录状态码10
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});
// 加载插件
Vue.use(VueAxios,axios);
// 生产环境的提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
