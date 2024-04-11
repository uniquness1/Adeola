<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: "Wordpress", icon: "fa-brands fa-wordpress" },
  { name: "Vue Js", icon: "fa-brands fa-vuejs" },
  { name: "Nuxt Js", icon: "fa-brands fa-nuxtjs" },
  { name: "Tailwind", icon: "fa-brands fa-react" },
  { name: "Flutter", icon: "fa-brands fa-flutter" },
  { name: "React JS" },
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
    <div ref="toolsContainer" class="tools-container flex overflow-x-auto">
      <div
        v-for="(tool, index) in tools"
        :key="index"
        class="tool flex items-center gap-10 justify-center"
      >
        <span
          class="text-2xl lg:text-4xl xl:text-5xl px-5 dark:text-slate-300 text-slate-800 font-normal"
          >{{ tool.name }}</span
        >
      </div>
    </div>
  </main>
</template>

<style>
/* Add your CSS styles here */
</style>
