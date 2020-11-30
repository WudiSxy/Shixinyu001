import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
import Home from '../views/Home/index.vue'

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        return push.call(this, location, onComplete, onAbort);
    }
    return push.call(this, location, onComplete, () => { });
};
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        return replace.call(this, location, onComplete, onAbort);
    }
    return replace.call(this, location, onComplete, () => { });
};

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component:Home
        },
         {
            path: '/login',
             component: Login,
             meta: {
                 isFooterHide:true,
             }
        },
          {
            path: '/register',
            component: Register,
            meta: {
                 isFooterHide:true,
             }
        },
        {
            name:"search",
            path: '/search/:searchText?',
            component: Search,
        },

    ]
})