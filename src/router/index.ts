import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import SalesView from '../views/SalesView.vue'
import OrdersView from '../views/OrdersView.vue'
import ProductsView from '../views/ProductsView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/sales',
            name: 'sales',
            component: SalesView
            // component: () => import('../views/SalesView.vue')
        },
        {
            path: '/orders',
            name: 'orders',
            component: OrdersView
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView
        },
    ]
})

export default router
