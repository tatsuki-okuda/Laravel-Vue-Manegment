

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Router Imported
import {routes} from './routes'


const router = new VueRouter({
    routes, // `routes: routes` の短縮表記
    mode: 'history'
})



const app = new Vue({
    el: '#app',
    router
});
