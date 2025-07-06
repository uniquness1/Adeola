import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home - Ajijola Adeola Ayodele",
        metaTags: [
          {
            name: "description",
            content:
              "Crafting exceptional web and mobile experiences that is not just visually appealing but also easy to use",
          },
          {
            property: "og:description",
            content:
              "Crafting exceptional web and mobile experiences that is not just visually appealing but also easy to use",
          },
        ],
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/PortfolioView.vue"),
      meta: {
        title: "Projects - Ajijola Adeola Ayodele",
        metaTags: [
          {
            name: "description",
            content:
              "Discover Ajijola Adeola Ayodele's projects, each a testament to his creativity and innovation, from sleek designs to seamless functionality.",
          },
          {
            property: "og:description",
            content:
              "Discover Ajijola Adeola Ayodele's projects, each a testament to his creativity and innovation, From sleek designs to seamless functionality.",
          },
        ],
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "About - Ajijola Adeola Ayodele",
        metaTags: [
          {
            name: "description",
            content:
              "Discover Ajijola Adeola Ayodele's passion, expertise in frontend mobile and web develoopment in general. From design prowess to coding finesse.",
          },
          {
            property: "og:description",
            content:
              "Discover Ajijola Adeola Ayodele's passion, expertise in frontend mobile and web develoopment in general. From design prowess to coding finesse.",
          },
        ],
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: {
        title: "Get in touch - Ajijola Adeola Ayodele",
        metaTags: [
          {
            name: "description",
            content:
              "Whether you have inquiries, collaboration proposals, or simply want to say hello, Let's start a conversation today",
          },
          {
            property: "og:description",
            content:
              "Whether you have inquiries, collaboration proposals, or simply want to say hello, Let's start a conversation today",
          },
        ],
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).forEach(
    (el) => el.parentNode.removeChild(el)
  );

  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach((tagDef) => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach((key) => tag.setAttribute(key, tagDef[key]));
      tag.setAttribute("data-vue-router-controlled", "");
      document.head.appendChild(tag);
    });
  }

  next();
});

export default router;
