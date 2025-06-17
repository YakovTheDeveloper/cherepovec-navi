import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '@/views/map-view/MapView.vue'
import MainView from '@/views/main-view/MainView.vue'
import PointView from '@/views/point-view/PointView.vue'
import RouteView from '@/views/route-view/RouteView.vue'
import QrCodeView from '@/views/qr-code-view/QrCodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
    {
      path: '/point',
      name: 'point',
      component: PointView,
    },
    {
      path: '/route',
      name: 'route',
      component: RouteView,
    },
    {
      path: '/qr-code',
      name: 'qr-code',
      component: QrCodeView,
    },
  ],
})

export default router
