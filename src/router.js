import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import Home from './components/pages/home'
import Product from './components/pages/product/product'


const router = createRouter({
    history: routerHistory,
    routes:[
       {
        path:'/',
        component:Home
       },
       {
        path:'/product/:id',
        component:Product,
        name:'product',
        props:true,
       }
    ]
})

export default router;