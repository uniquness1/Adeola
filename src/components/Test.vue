<script setup>
import { onMounted, onUnmounted, ref } from "vue";
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
  const tools = toolsContainer.value.children;
  if (!tools.length) return;
  toolsContainer.value.style.width = `${tools.length * tools[0].offsetWidth}px`;
  gsap.from(tools, {
    opacity: 0,
    x: tools[0].offsetWidth,
    stagger: 0.2,
    scrollTrigger: {
      trigger: toolsContainer.value,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
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
