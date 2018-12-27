import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import( /* webpackChunkName: 'Home' */ '@/views/Home');




Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    
    component: Home,
    children: [
        {
            path: '/home',
            component: Home
        }
    ] 
  }]
})
