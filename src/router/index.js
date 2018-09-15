import Vue from 'vue';
import Router from 'vue-router';
import CreateAED from '@/components/Create-AED';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Create',
      name: 'HelloWorld',
      component: CreateAED,
    },
  ],
});
