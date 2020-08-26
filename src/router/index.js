import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/layout"),
      children: [
        {
          path: "",
          component: () => import("@/views/auth/login"),
        },
      ],
    },
    {
      path:'/refresh',
      component:()=>import('@/components/layout'),
      children: [
        {
          path: "",
          component: () => import("@/views/auth/refresh"),
        },
      ],
    }
  ],
});

//拦截退出路由 进行退出处理
router.beforeEach((to, from, next) => {
  if (to.path === "/logout") {
    //退出
    store.dispatch("UserLogout", to.query.redirectURL);
  } else {
    next();
  }
});

export default router;
