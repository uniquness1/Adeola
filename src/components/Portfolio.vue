<template>
  <section class="w-full border-b">
    <div class="max-w-6xl mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <h1
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        class="font-bold text-3xl md:text-6xl uppercase dark:text-slate-300 text-slate-800"
      >
        Work Done
      </h1>
      <p
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        class="text-sm sm:text-base mt-2 mb-5"
      >
        Crafting exceptional web and digital experiences
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mb-5">
        <ProjectCard
          v-for="(project, index) in displayedProjects"
          :key="index"
          :project="project"
        />
      </div>
      <router-link
        v-if="showButton"
        class="text-base max-w-max font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block mb-5 button"
        to="/projects"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
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
import Pixel from "@/assets/images/pixelanchor.webp";
import Digital from "@/assets/images/roidigital.webp";
import Newspoint from "@/assets/images/newspoint.png";
import Hive from "@/assets/images/propertyhive.png";
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
    name: "EvolveHq",
    alt: "screenshot of evolvehq website",
    imageUrl: EvolveHQ,
    websiteUrl: "https://evolvehq.com.ng",
    description:
      "EvolveHQ is an organization with a mission to empower Africans with cutting-edge skills.",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Newspoint",
    alt: "screenshot of newspoint website",
    imageUrl: Newspoint,
    websiteUrl: "https://newspoint-newsblog.netlify.app",
    description:
      "Newspoint is a practice newsblog website that provides latest news across all categories",
    tag: ["Vue", "TailwindCSS"],
  },
  {
    name: "Pixel Anchor",
    alt: "screenshot of pixelanchor website",
    imageUrl: Pixel,
    websiteUrl: "https://pixelanchor.com",
    description:
      "Pixel anchor is a software development and digital branding agency in Lagos, Nigeria ",
    tag: ["Wordpress", "Elementor", "ACF"],
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
  {
    name: "Arts and Vibes",
    alt: "screenshot of arts and vibes website",
    imageUrl: Arts,
    websiteUrl: "https://artsandvibes.com",
    description:
      "Discover the vibrant and diverse arts and talents of Northern Nigeria on Arts and Vibes",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "PropertyHIVE",
    alt: "screenshot of propertyHive Landing page",
    imageUrl: Hive,
    websiteUrl: "https://property-hive.vercel.app/",
    description:
      "PropertyHive landing page - a UI practice with Tailwindcss and darkmode exploration",
    tag: ["Vue", "TailwindCSS"],
  },
]);

const displayedProjects = computed(() => {
  if (props.displayCount) {
    return projects.value.slice(0, props.displayCount);
  }
  return projects.value;
});
</script>
