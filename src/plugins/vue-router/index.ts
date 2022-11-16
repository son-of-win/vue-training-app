import { PageName } from '@/common/constants';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '../../layouts/MainLayout.vue';
import HomePage from '@/pages/HomePage/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/home',
                name: PageName.HOME_PAGE,
                component: HomePage,
            },
        ],
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
