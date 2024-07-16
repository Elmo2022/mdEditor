import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/homePage.vue';
import mdEditor from '../views/mdEditor.vue';
import VideoPlayer from '../views/videoPlayer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomeView,
  },
  {
    path: '/VideoPlayer',
    name: 'VideoPlayer',
    component: VideoPlayer,
  },
  {
    path: '/mdEditor',
    name: 'mdEditor',
    component: mdEditor,
  },
  // 你可以添加更多的路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;