import Vue from "vue";
import Router from "vue-router";

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
  ],
});

export default router;
