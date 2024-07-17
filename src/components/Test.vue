<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: "Wordpress" },
  { name: "Vue Js" },
  { name: "Nuxt Js" },
  { name: "Tailwind" },
  { name: "Flutter" },
  { name: "React JS" },
];

const toolsContainer = ref(null);

onMounted(() => {
  const toolsElements = toolsContainer.value?.children;
  if (!toolsElements.length) return; // Exit if no tools exist

  // Set container width to fit all tools without overflow
  toolsContainer.value.style.width = `${
    toolsElements.length * toolsElements[0].offsetWidth
  }px`;

  gsap.from(toolsElements, {
    opacity: 0,
    x: toolsElements[0].offsetWidth, // Animate from the right side
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
</script>

<template>
  <div
    ref="toolsContainer"
    class="tools-container overflow-x-auto whitespace-nowrap"
  >
    <div
      v-for="tool in tools"
      :key="tool.name"
      class="inline-block px-4 py-2 mx-2"
    >
      {{ tool.name }}
    </div>
  </div>
</template>

<style scoped>
.tools-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tools-container div {
  /* flex: 0 0 auto; */
  /* Ensure items do not shrink or grow */
  /* Adjust based on your design needs */
}

/* Responsive styles */
@media (max-width: 768px) {
  .tools-container {
    overflow-x: scroll; /* Enable horizontal scrolling on small screens */
  }
  .tools-container div {
    padding: 0.5rem 1rem;
    /* Adjust padding for smaller screens */
  }
}
</style>
