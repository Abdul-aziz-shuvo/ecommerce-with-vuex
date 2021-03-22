import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import Home from './components/pages/home'


const router = createRouter({
    history: routerHistory,
    routes:[
       {
        path:'/',
        component:Home
       }
    ]
})

export default router;