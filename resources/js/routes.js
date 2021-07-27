
let login = require('./components/Auth/login.vue').default;
let register = require('./components/Auth/register.vue').default;

export const routes = [
  { 
    path: '/', 
    component: login, 
    name: '/' 
  },
  { 
    path: '/register', 
    component: register,
    name: 'register'
  }
]