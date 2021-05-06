import LogIn from "./components/LogIn";
import LogUp from "./components/LogUp";
import LostMessage from "./components/LostMessage";
import My from './components/My'
import {createRouter, createWebHashHistory} from "vue-router";
import MyMessage from "./components/MyMessage";
import MyLost from "./components/MyLost";
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
        path:'/1',
        component: MyMessage
    },
    {
        path:'/my/2',
        component: MyLost
    },
    {
        path:'/my/3',
        component: MySeek
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
