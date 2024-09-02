// Import Vue and other libraries
import Vue from 'vue';
import App from './App.vue';
import Welcome from './views/Welcome.vue';
import router from './router'; // Ensure this path is correct
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';

// Import CSS files

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'semantic-ui-css/semantic.css';

// Axios configuration
axios.defaults.baseURL = 'http://localhost:3000'; // Update base URL as needed
Vue.prototype.$axios = axios;

// Install BootstrapVue and IconsPlugin
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Disable Vue production tip
Vue.config.productionTip = false;

// Create and mount Vue instance
new Vue({
    router, // Use the imported router
    render: h => h(App), 
}).$mount('#app');
