import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import UploadDialog from "./components/UploadDialog";
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

Vue.use(ElementUI);
Vue.component('upload-dialog',UploadDialog);
Vue.config.productionTip = false

Vue.prototype.$qs = qs
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "/api"
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')