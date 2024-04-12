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
        title:
          " Ajijola Adeola Ayodele - Frontend Developer, Web Developer, Wordpress Developer, Mobile Developer",
        metaTags: [
          {
            name: "description",
            content:
              "wordpress, wordpress design, wordpress developer, HTML, CSS, Javascript VueJS CMS, TailwindCSS website design, website development, frontend developer, frontend engineer, web developer",
          },
          {
            property: "og:description",
            content:
              "wordpress, wordpress design, wordpress developer, HTML, CSS, Javascript VueJS CMS, TailwindCSS website design, website  development, frontend developer, frontend engineer, web developer",
          },
        ],
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/PortfolioView.vue"),
      meta: {
        title:
          "Projects - Ajijola Adeola Ayodele - Frontend Developer, web Developer Wordpress Developer, Mobile Developer",
        metaTags: [
          {
            name: "description",
            content:
              "Discover Ajijola Adeola Ayodele's projects, each a testament to his creativity and innovation from sleek designs to seamless functionality. Discover projects that have been undertaken by ajijola Adeola Ayodele below.",
          },
          {
            property: "og:description",
            content:
              "Discover Ajijola Adeola Ayodele's projects, each a testament to his creativity and innovation. From sleek designs to seamless functionality. Discover projects that have been undertaken by Ajijola Adeola Ayodele below.",
          },
        ],
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title:
          "About Me - Ajijola Adeola Ayodele - Frontend Developer, Web Developer, Wordpress Developer, Mobile Developer",
        metaTags: [
          {
            name: "description",
            content:
              "Discover Ajijola Adeola Ayodele's passion, expertise in frontend development and web develoopment in general. From design prowess to coding finesse, explore Ajijola Adeola Ayodele's creativity and innovative skils",
          },
          {
            Property: "og:description",
            content:
              "Discover Ajijola Adeola Ayodele's passion, expertise in frontend development and web develoopment in general. From design prowess to coding finesse, explore Ajijola Adeola Ayodele's creativity and innovative skils",
          },
        ],
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: {
        title:
          "Get in touch - Ajijola Adeola Ayodele - Frontend Developer, Web Developer, wordpress Developer, Mobile Developer",
        metaTags: [
          {
            name: "description",
            content:
              "Whether you have inquiries, collaboration proposals, or simply want to say hello, this is your medium to reach Ajijola Adeola Ayodele directly. Let's start a conversation today",
          },
          {
            property: "og:description",
            content:
              "Whether you have inquiries, collaboration proposals, or simply want to say hello, this is your medium to reach Ajijola Adeola Ayodele directly. Let's start a conversation today",
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
