import LogIn from "./components/LogIn";
import LogUp from "./components/LogUp";
import LostMessage from "./components/LostMessage";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        name: 'LogIn',
        component: LogIn
    },
    {
        path:'/LogUp',
        name: 'LogUp',
        component: LogUp
    },
    {
        path:'/Hall',
        component: LostMessage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    mode: 'history'
})

export default router
