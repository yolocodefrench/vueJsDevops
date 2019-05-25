import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Front from "./views/Front.vue";
import AllCharts from "./views/AllCharts.vue";
import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/:up",
      name: 'up',
      component: Front,
      beforeEnter: (to, from, next) => {
        if(store.state.isConnected) {
          next()
        }        
        else{
          next({name:'login'})
        }
      },
      children: [
        {
          path: ":mesure",
          name: "mesure",
          component:  AllCharts
        }
      ]
    },
    
  ]
});
