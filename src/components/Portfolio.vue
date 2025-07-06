<template>
  <section class="max-w-2xl w-full mx-auto mt-40 mb-10 md:mb-24 px-2.5">
    <h1 class="text-center text-[#DAC5A7] text-[42px] leading-[60px] md:text-[82px] font-normal md:leading-[100px]">
      Work Done
    </h1>
    <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-xl mx-auto">Crafting
      exceptional web and
      mobile
      experiences that
      is not just
      visually appealing but also easy to use</p>
    <div class="w-full max-w-[200px] mx-auto mt-16 md:mt-24 text-center animate-pulse cursor-pointer">
      <i
        class="fas fa-arrow-down text-[#dac5a7] text-base border rounded-full border-[rgba(218,197,167,0.3)] py-1.5 px-3 bg-[rgb(26,26,26)] mr-2 "></i>
      <span class="text-base md:text-xl font-light text-center text-[#dac5a7] max-w-xl mx-auto">My Projects</span>
    </div>
  </section>
  <section>
    <div class="max-w-6xl mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mb-5">
        <ProjectCard v-for="(project, index) in displayedProjects" :key="index" :project="project" />
      </div>
      <router-link v-if="showButton"
        class="text-base max-w-max font-semibold uppercase px-4 py-1 text-white border-2border-white border-solid rounded-full md:block mb-5 button"
        to="/projects" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine">
        View All Projects
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import ProjectCard from "./ProjectCard.vue";
import TogaVision from "@/assets/images/togavision.webp";
import EvolveHQ from "@/assets/images/evolvehq.webp";
import Jaics from "@/assets/images/jaics.webp";
import Arts from "@/assets/images/artsandvibes.webp";
import Pixel from "@/assets/images/pixela.png";
import PixelLms from "@/assets/images/lms.png"
import Digital from "@/assets/images/roidigital.webp";
import Newspoint from "@/assets/images/newspoint.png";
import oladokun from "@/assets/images/oladokun.png"
import Hive from "@/assets/images/propertyhive.png";
import Emterr from "@/assets/images/emteerr.png";
import WDC from "@/assets/images/wdc.png";
import stay from "@/assets/images/stayeasy.png";
import yemicci from "@/assets/images/yemicii.png"
import uac from "@/assets/images/uacfoods.png"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const props = defineProps({
  displayCount: {
    type: Number,
    default: null,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const projects = ref([
  {
    name: "Yemicii",
    alt: "screenshot of Yemicii ecommerce website",
    imageUrl: yemicci,
    websiteUrl: "https://yemicii.com",
    description:
      "Yemicii's collection is designed for the bold, the brilliant, and the beautiful.",
    tag: ["Laravel", "VueJs", "Tailwind", "PHP"],
  },
  {
    name: "EvolveHq",
    alt: "screenshot of evolvehq website",
    imageUrl: EvolveHQ,
    websiteUrl: "https://evolvehq.co",
    description:
      "EvolveHQ is an organization with a mission to empower Africans with cutting-edge skills.",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Pixel Anchor LMS",
    alt: "screenshot of pixelanchor website",
    imageUrl: PixelLms,
    websiteUrl: "https://pixelanchor.vercel.app",
    description:
      "Building Pixelanchor next gen Educational Learning management software",
    tag: ["NuxtJs", "Vuejs", "TailwindCSS"],
  },
  {
    name: "The Oladokun Lab",
    alt: "screenshot of oladokun lab",
    imageUrl: oladokun,
    websiteUrl: "https://oladokunlab.com/",
    description:
      "Advancing Poultry Health Through Cutting-edge Microbiome Research",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Uacfoods DMS",
    alt: "screenshot of uacfoods DMS App",
    imageUrl: uac,
    websiteUrl: "https://dms.uacfoodsng.com/",
    description:
      "The platform streamlines complex business operations, including distributor management",
    tag: ["Vue", "TailwindCSS"],
  },
  // {
  //   name: "Newspoint",
  //   alt: "screenshot of newspoint website",
  //   imageUrl: Newspoint,
  //   websiteUrl: "https://newspoint-newsblog.netlify.app",
  //   description:
  //     "Newspoint is a practice newsblog website that provides latest news across all categories",
  //   tag: ["Vue", "TailwindCSS"],
  // },
  {
    name: "Pixel Anchor",
    alt: "screenshot of pixelanchor website",
    imageUrl: Pixel,
    websiteUrl: "https://pixelanchor.com",
    description:
      "Building Pixelanchor Educational Learning management software and also creating training pages",
    tag: ["Vuejs", "TailwindCSS"],
  },
  {
    name: "Toga Vision",
    alt: "screenshot of togavision website",
    imageUrl: TogaVision,
    websiteUrl: "https://togavision.org",
    description:
      "Togavision is a non-profit organization dedicated to empowering artisans and building communities",
    tag: ["Vue Js", "TailwindCSS"],
  },
  {
    name: "Jaics Consulting",
    alt: "screenshot of jaics consulting website",
    imageUrl: Jaics,
    websiteUrl: "https://jaicsconsulting.com",
    description:
      "Jaics Consulting Services is an Human resources firm in Lagos State that provides HR Solutions",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Roi Digital",
    alt: "screenshot of roi digital website",
    imageUrl: Digital,
    websiteUrl: "https://roidigital.com.ng",
    description: "ROI Digital is a digital marketing agency in Lagos Nigeria",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  // {
  //   name: "Arts and Vibes",
  //   alt: "screenshot of arts and vibes website",
  //   imageUrl: Arts,
  //   websiteUrl: "https://artsandvibes.com",
  //   description:
  //     "Discover the vibrant and diverse arts and talents of Northern Nigeria on Arts and Vibes",
  //   tag: ["Wordpress", "Elementor", "ACF"],
  // },
  // {
  //   name: "PropertyHIVE",
  //   alt: "screenshot of propertyHive Landing page",
  //   imageUrl: Hive,
  //   websiteUrl: "https://property-hive.vercel.app/",
  //   description:
  //     "PropertyHive landing page - a UI practice with Tailwindcss and darkmode exploration",
  //   tag: ["Vue", "TailwindCSS"],
  // },
  {
    name: "Stay2Easy Admin",
    alt: "screenshot of propertyHive Landing page",
    imageUrl: stay,
    websiteUrl: "https://admin-stayeasy.vercel.app/",
    description:
      "Stay2Easy Admin Dashbaord - Admin Dashboard for Stay2Easy website",
    tag: ["Vue", "Nuxt", "TailwindCSS"],
  },
  {
    name: "WDC",
    alt: "screenshot of Wild fusion digital center Landing page",
    imageUrl: WDC,
    websiteUrl: "https://wdc.ng/",
    description:
      "Website Redesign to ensure good UIUX, maintaining simplicity & performance",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Emeterr",
    alt: "screenshot of Emeterr Landing page",
    imageUrl: Emterr,
    websiteUrl: "https://www.emeterr.com/",
    description:
      "Providing cutting-edge educational solutions for a diverse audience",
    tag: ["Nuxt", "Vue", "Vuetify"],
  },
]);

const displayedProjects = computed(() => {
  if (props.displayCount) {
    return projects.value.slice(0, props.displayCount);
  }
  return projects.value;
});
</script>
