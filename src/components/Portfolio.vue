<template>
  <section class="w-full border-b">
    <div class="max-w-7xl mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <h2
        class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
      >
        Projects
      </h2>
      <p class="text-sm sm:text-base mt-2 mb-5">
        Crafting exceptional web and digital experiences
      </p>
      <div class="grid md:grid-cols-2 gap-4 md:gap-10 mb-5">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import TogaVision from "@/assets/images/togavision.png";
import EvolveHQ from "@/assets/images/evolvehq.png";
import Jaics from "@/assets/images/jaics.png";
import Arts from "@/assets/images/artsandvibes.png";
import Pixel from "@/assets/images/pixelanchor.png";
import Digital from "@/assets/images/roidigital.png";

const projects = ref([
  {
    name: "Toga Vision",
    imageUrl: TogaVision,
    websiteUrl: "https://togavision.org",
    description:
      "Togavision is a non-profit organization dedicated to empowering artisans and building communities through a holistic approach that encompasses our robust initiatives.",
    tag: ["Vue Js", "TailwindCSS", "Firebase"],
  },
  {
    name: "EvolveHq",
    imageUrl: EvolveHQ,
    websiteUrl: "https://evolvehq.com.ng",
    description:
      "Evolve HQ is a pioneering organization dedicated to addressing the pressing challenges faced by Africa in the technology sector. With a mission to empower Africans with cutting-edge skills.",
    tag: ["Wordpress", "Elementor", "All custom Fields"],
  },
  {
    name: "Jaics Consulting",
    imageUrl: Jaics,
    websiteUrl: "https://jaicsconsulting.com",
    description:
      "Jaics Consulting Services is an Human resources firm in Lagos State that provides solutions to operational and organizational challenges.",
    tag: ["Wordpress", "Elementor", "All custom Fields"],
  },
  {
    name: "Arts and Vibes",
    imageUrl: Arts,
    websiteUrl: "https://artsandvibes.com",
    description:
      "Discover the vibrant and diverse arts and talents of Northern Nigeria on Arts and Vibes, a dedicated platform that empowers individuals to showcase their crafts.",
    tag: ["Wordpress", "Elementor", "All custom Fields"],
  },
  {
    name: "Pixel Anchor",
    imageUrl: Pixel,
    websiteUrl: "https://pixelanchor.com",
    description:
      "At Pixel Anchor, we are driven by the belief that technology can transform businesses and elevate their potential. We have been on a mission to empower organizations with innovative solutions that drive growth, efficiency, and success.",
    tag: ["Wordpress", "Elementor", "All custom Fields"],
  },
  {
    name: "Roi Digital",
    imageUrl: Digital,
    websiteUrl: "https://roidigital.com.ng",
    description:
      "ROI Digital is a digital marketing agency that provides media planning, content development, SEO, and social media strategy services",
    tag: ["Wordpress", "Elementor", "All custom Fields"],
  },
]);
</script>
