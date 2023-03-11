import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  const loggedIn = localStorage.getItem("user-sentimetric");
  if (!loggedIn) {
    if (routeTo.name == "signin" || routeTo.name == "signup") {
      return next();
    } else {
      next({ name: "signin" });
    }
  } else {
    if (routeTo.name == "signin" || routeTo.name == "signup") {
      next({ name: "dashboard" });
    } else {
      next();
    }
  } 
  // if (
  //   (!token && loggedIn) ||
  //   routeTo.name === "login" ||
  //   routeTo.name === "auth.register" ||
  //   routeTo.name === "auth.verify"
  // ) {
  //   if (
  //     loggedIn &&
  //     (routeTo.name === "login" ||
  //       routeTo.name === "workspace" ||
  //       routeTo.name === "auth.register" ||
  //       routeTo.name === "auth.verify")
  //   ) {
  //     store.dispatch("layout/changeLayoutType", {
  //       layoutType: "horizontal",
  //     });
  //     next({ name: "auth.workspace" });
  //   }
  //   store.dispatch("layout/changeLayoutType", {
  //     layoutType: "twocolumn",
  //   });
  //   return next();
  // } else {
  //   next({ name: "login" });
  // }
  // if (routeTo.name !== "login" || routeTo.name !== "auth.workspace") {
  //   store.dispatch("layout/changeLayoutType", {
  //     layoutType: "twocolumn",
  //   });
  // }
});

export default router;
