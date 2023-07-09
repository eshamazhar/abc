import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CoursesView from '../views/CoursesView.vue';
import InfoView from '../views/InfoView.vue';
import LogIn from '../views/LogIn.vue';
const routes = [
  {
    path: '/',
     name: 'HomeView',
    component:HomeView
  },
  {
    path:'/course',
    name:'CoursesView',
    component:CoursesView
  },
 {
  path:'/info',
  name:'InfoView',
  component:InfoView
 },
{
  path:'/login',
  name:'LogIn',
  component:LogIn
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;