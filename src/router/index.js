import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/riddles',
    name: 'riddles',
    component: () => import('@/components/games/RiddlesComp.vue')
  },
  {
    path: '/guess-one',
    name: 'guess-one',
    component: () => import('@/components/games/GuessNumComp.vue')
  },
  {
    path: '/guess-two',
    name: 'guess-two',
    component: () => import('@/components/games/GuessMultComp.vue')
  },
  {
    path: '/gen-psw',
    name: 'gen-psw',
    component: () => import('@/components/diff/GenPswComp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
