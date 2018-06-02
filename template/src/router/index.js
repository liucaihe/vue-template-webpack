import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'

const HelloWorld = () => import('@/views/index/HelloWorld')

Vue.use(VueRouter)

const appRouter = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {}
  }
]

const router = new VueRouter({
  mode: config.RMODE,
  base: config.RBASE,
  routes: appRouter
})

export default router