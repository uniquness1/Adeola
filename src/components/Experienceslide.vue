<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Pixel Anchor",
    role: "Web Developer",
    duration: "January 2024 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
  },
  {
    company: "EvolveHQ",
    role: "Web Developer",
    duration: "November 2023 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
  },
  {
    company: "Wild Fusions Limited",
    role: "Web Developer",
    duration: "May 2023 - October 2023",
    type: "Contract, Onsite",
    location: "Ikoyi, Lagos state",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "March 2022 - April 2023",
    type: "Fulltime, Hybrid",
    location: "Ado Ekiti, Ekiti state",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "October 2021 - March 2022",
    type: "Internship, Onsite",
    location: "Ado Ekiti, Ekiti state",
  },
];

const toolsContainer = ref(null);

onMounted(() => {
  const tools = toolsContainer.value.children;
  if (!tools.length) return; // Exit if no tools exist

  // Set container width to fit all tools without overflow
  toolsContainer.value.style.width = `${tools.length * tools[0].offsetWidth}px`;

  gsap.from(tools, {
    opacity: 0,
    x: tools[0].offsetWidth, // Animate from the right side
    stagger: 0.2, // Stagger the animations
    scrollTrigger: {
      trigger: toolsContainer.value, // Use the container as the trigger
      start: "top 80%", // Start animation when the container enters the top 80% of the viewport
      end: "bottom 20%", // End animation when the container leaves the bottom 20% viewport
      scrub: true, // Scrub animation based on scroll position
      toggleActions: "play none none none",
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <main class="overflow-hidden py-10 max-w-7xl mx-auto hidden md:block">
    <div
      ref="toolsContainer"
      class="tools-container flex w-full overflow-x-auto"
    >
      <div v-for="(tool, index) in experiences" :key="index" class="max-w-2xl">
        <h2
          class="text-sm sm:text-xl font-bold mt-2 max-w-lg dark:text-slate-300 text-slate"
        >
          {{ tool.company }} -
          <span class="font-normal">{{ tool.role }}</span>
        </h2>
        <div>
          <span class="dark:text-slate-300 text-slate-800">{{
            tool.duration
          }}</span>
          <span class="dark:text-slate-300 text-slate-800"
            >&nbsp;- {{ tool.type }}</span
          >
        </div>
        <span class="dark:text-slate-300 text-slate-800">{{
          tool.location
        }}</span>
        <div></div>
      </div>
    </div>
  </main>
</template>

<style>
/* Add your CSS styles here */
</style>
