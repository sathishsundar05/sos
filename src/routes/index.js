import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../LoginView.vue';
import Dashboard from '../Dashboard.vue';
import AdminDashboard from '@/AdminDashboard.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: Dashboard },
  { path: '/admin', component: AdminDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
