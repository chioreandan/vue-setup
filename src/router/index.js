import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sub1 from '@/components/Sub1'
// import Sub2 from '@/components/Sub2'
// import Sub3 from '@/components/Sub3'
import Publish from '@/components/Publish'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sub1',
      name: 'Sub1',
      component: Sub1
    },
    // {
    //   path: '/sub2',
    //   name: 'Sub2',
    //   component: Sub2
    // },
    // {
    //   path: '/sub3',
    //   name: 'Sub3',
    //   component: Sub3
    // },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
