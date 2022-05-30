import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "@/views/Login";


Vue.use(VueRouter);

const routes = [
    {path: '/login', name: 'Login', component: Login},
];

export const router = new VueRouter({
    mode: 'history',
    routes
})