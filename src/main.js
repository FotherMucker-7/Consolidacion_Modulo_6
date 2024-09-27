import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHeart, 
  faGamepad, 
  faHome, 
  faHouse, 
  faChevronDown, 
  faEdit, 
  faTrash, 
  faPen,
  faCoins,
  faTrophy,
  faMedal   
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faHouse, 
  faHome, 
  faGamepad, 
  faHeart, 
  faChevronDown, 
  faEdit, 
  faTrash, 
  faPen,
  faCoins,
  faTrophy,
  faMedal
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');