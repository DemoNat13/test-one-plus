import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SearchPage from '../views/SearchPage.vue';
import CurrencyTable from '../views/CurrencyTable.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
  },
  {
    path: '/currency',
    name: 'currency',
    component: CurrencyTable,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
