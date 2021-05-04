import LogIn from "./components/LogIn";
import LogUp from "./components/LogUp";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        name: 'LogIn',
        component: LogIn
    },
    {
        path:'/rrrr',
        name: 'Logup',
        component: LogUp
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    mode: 'history'
})

export default router
