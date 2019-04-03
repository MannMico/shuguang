import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Plan from '@/pages/plan/plan';
import Issue from '@/pages/issue/issue';
import IssueDone from '@/pages/issue/issue-done';
import CaseList from '@/pages/case/';
import CaseDetail from '@/pages/case/detail';
import About from '@/pages/about/';
import PlanMobile from '@/pages/plan/plan-mobile';
// import Index from '@/pages/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan,
      meta: {
        title: '预览'
      }
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue,
      meta: {
        title: '需求提交'
      }
    },
    {
      path: '/issue-done',
      name: 'IssueDone',
      component: IssueDone,
      meta: {
        title: '需求提交成功'
      }
    },
    {
      path: '/case-list',
      name: 'CaseList',
      component: CaseList,
      meta: {
        title: '全部成功案例'
      }
    },
    {
      path: `/case-detail/:tid`,
      name: 'CaseDetail',
      component: CaseDetail,
      meta: {
        title: '案例详情'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/plan-mobile',
      name: 'PlanMobile',
      component: PlanMobile,
      meta: {
        title: '预览',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0'
      }
    },
    {
      path: '/pdf',
      name: 'PDF',
      component: () => import('@/components/pdf.vue')
    }
  ]
});
