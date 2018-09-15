import Vue from 'vue';
import Router from 'vue-router';
import OptimzeAED from '@/components/Optmize-AED';
import CreateAED from '@/components/Create-AED';
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/create',
      name: 'create',
      component: CreateAED,
    },
    {
      path: '/optimize',
      name: 'optimize',
      component: OptimzeAED,
    },
    {
      path: '/',
      name: 'about',
      component: About,
    },
  ],
});
