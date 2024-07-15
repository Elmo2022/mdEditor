import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/myHome.vue';
import mdEditor from '../views/mdEditor.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: mdEditor,
  },
  // 你可以添加更多的路由配置
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;