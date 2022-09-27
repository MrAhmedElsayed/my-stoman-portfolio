import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Ahmed - Home" },
  },
  {
    path: "/about",
    name: "AboutView2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView2.vue"),
    meta: { title: "Ahmed - About" },
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/ProjectsView.vue"),
    meta: { title: "Ahmed - Projects" },
  },
  {
    path: "/projects/single-project",
    name: "SingleProjectsView",
    component: () =>
      import(
        /* webpackChunkName: "singleProject" */ "../views/SingleProjectsView.vue"
      ),
    meta: { title: "Ahmed - Single Project" },
  },
  {
    path: "/contact",
    name: "ContactView2",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView2.vue"),
    meta: { title: "Ahmed - Contact" },
  },
  {
    path: "/certification",
    name: "CertificationView",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../views/CertificationView.vue"
      ),
    meta: { title: "Ahmed - Contact" },
  },
  // should be the last route
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundRoute",
    component: () =>
      import(
        /* webpackChunkName: "notFoundRoute" */ "../views/NotFoundRoute.vue"
      ),
    meta: { title: "Ahmed - 404 not found" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    // to, from, savedPosition
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

export default router;
