import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '../../layouts/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: MainLayout,
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
