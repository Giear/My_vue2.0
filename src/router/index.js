import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/unifieMenu",
    name: "UnifieMenu",
    component: () => import("../views/unifieMenu")
  },
  {
    path: "/unifieQuery",
    name: "UnifieQuery",
    component: () => import("../views/unifieQuery")
  },
  {
    path: "/unifieQuery",
    name: "UnifieQuery",
    component: () => import("../views/unifieQuery")
  },
  {
    path: "/unifieRemark",
    name: "UnifieRemark",
    component: () => import("../views/unifieRemark")
  }
];

const router = new VueRouter({
  routes
});

export default router;
