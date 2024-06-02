import {createRouter, createWebHashHistory} from "vue-router";
//导入组件
import Login from '@/views/Login.vue';
import Layout from '@/views/Layout.vue';
import ArticleCategory from "@/views/article/ArticleCategory.vue";
import ArticleManage from "@/views/article/ArticleManage.vue";
import UserAvatar from "@/views/user/UserAvatar.vue";
import UserInfo from "@/views/user/UserInfo.vue";
import UserResetPassword from "@/views/user/UserResetPassword.vue";

//定义路由关系
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/layout',
        component: Layout
        ,
        children: [
            {
                path: '',
                redirect: '/article/manage'
            },
            {
                path: '/article/category',
                component: ArticleCategory
            },
            {
                path: '/article/manage',
                component: ArticleManage
            },
            {
                path: '/user/info',
                component: UserInfo
            },
            {
                path: '/user/avatar',
                component: UserAvatar
            },
            {
                path: '/user/resetPassword',
                component: UserResetPassword
            }
        ]
    }
]

//创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


//导出路由实例
export default router