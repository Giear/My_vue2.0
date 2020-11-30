import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '../theme/index.css'
import { NavBar } from "vant";
import { PullRefresh } from 'vant';
import { Loading } from 'vant';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(NavBar);
Vue.use(Loading);
Vue.use(PullRefresh);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
