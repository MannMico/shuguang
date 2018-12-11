import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Plan from '@/pages/plan/plan';
import Issue from '@/pages/issue/issue';
import IssueDone from '@/pages/issue/issue-done';
// import Index from '@/pages/index';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/issue-done',
      name: 'IssueDone',
      component: IssueDone
    }
  ]
});
