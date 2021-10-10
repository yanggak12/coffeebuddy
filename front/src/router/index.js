import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Coffee from "../views/Coffee.vue";
import Beans from "../views/Beans.vue";
import Buddy from "../views/Buddy.vue";
import Commnunity from "../views/Community.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coffee",
    name: "Coffee",
    component: Coffee,
  },
  {
    path: "/beans",
    name: "Beans",
    component: Beans,
  },
  {
    path: "/buddy",
    name: "Buddy",
    component: Buddy,
  },
  {
    path: "/community",
    name: "Commnunity",
    component: Commnunity,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
