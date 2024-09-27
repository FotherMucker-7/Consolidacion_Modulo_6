import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/NotFound.vue';
import HomeView from '@/views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    name: 'HomeView', 
    component: HomeView 
  },
  { 
    path: '/opinions/:gameName',
    name: 'GameOpinions',
    component: () => import(/* webpackChunkName: "gameOpinions" */ '../views/GameOpinions.vue')
  },
  { 
    path: '*', 
    name: 'NotFound', 
    component: NotFound 
  },
  
  {
    path: '/admin/:gameName',
    name: 'AdminView',
    component: () => import(/* webpackChunkName: "adminView" */ '../views/AdminView.vue'),
    props: true
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;