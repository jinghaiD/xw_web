import LogIn from "./components/LogIn";
import LogUp from "./components/LogUp";
import LostMessage from "./components/LostMessage";
import My from './components/My'
import {createRouter, createWebHashHistory} from "vue-router";
import MySeek from "./components/MySeek";

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
    },
    {
        path:'/my/:username',
        component: My
    },
    {
        path:'/myseek',
        component: MySeek
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
