import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/releases',
            name: 'releases',
            component: () => import('../views/Releases.vue')
        },
        {
            path: '/sneakers/:id',
            name: 'sneakerDetail',
            component: () => import('../views/SneakerDetailPage.vue')
        },
        {
            path: '/userpage',
            name: 'userpage',
            component: () => import('../views/UserPage.vue')
        }

    ]
})

export default router