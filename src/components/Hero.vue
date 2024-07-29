<template>
  <section
    class="relative h-[90dvh] grid place-items-center overflow-hidden text-white"
  >
    <div
      class="max-w-6xl mx-auto pt-10 md:pt-20 px-4 text-center relative z-10"
    >
      <h1 ref="title" class="text-4xl md:text-6xl font-bold">
        {{ currentRole }}
      </h1>
    </div>
    <div class="floating-icons">
      <i
        v-for="(icon, index) in icons"
        :key="index"
        :ref="
          (el) => {
            if (el) iconRefs[index] = el;
          }
        "
        :class="['icon', icon.iconClass]"
        :style="{ color: icon.color }"
      ></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
const nameRoles = [
  "Crafting Exceptional Experiences",
  "Web Developer",
  "Mobile Developer",
];
const currentRole = ref(nameRoles[0]);
let currentIndex = 0;
let intervalId = null;
const icons = [
  { iconClass: "mdi mdi-vuejs", color: "#41b883" },
  { iconClass: "fab fa-elementor", color: "#0083ff" },
  { iconClass: "mdi mdi-nuxt", color: "#00dc82" },
  { iconClass: "mdi mdi-firebase", color: "#ffca28" },
  { iconClass: "fab fa-webflow", color: "#000000" },
  { iconClass: "mdi mdi-wordpress", color: "#21759b" },
  { iconClass: "mdi mdi-drupal", color: "#005d9c" },
  { iconClass: "mdi mdi-vuetify", color: "#1867c0" },
  { iconClass: "mdi mdi-tailwind", color: "#38b2ac" },
  { iconClass: "fab fa-css3", color: "#1572b6" },
  { iconClass: "fab fa-html5", color: "#e34f26" },
];
const iconRefs = ref([]);
const iconPositions = ref([]);
const title = ref(null);
const startSlideshow = async () => {
  await nextTick();
  intervalId = setInterval(() => {
    gsap.to(title.value, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        currentIndex = (currentIndex + 1) % nameRoles.length;
        currentRole.value = nameRoles[currentIndex];
        gsap.fromTo(title.value, { opacity: 0 }, { opacity: 1, duration: 1 });
      },
    });
  }, 5000);
};

const initializeIconPositions = () => {
  iconPositions.value = icons.map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  }));
};

const updateIconPositions = () => {
  const containerRect =
    iconRefs.value[0]?.parentElement?.getBoundingClientRect();
  if (!containerRect) return;

  iconPositions.value.forEach((pos, index) => {
    pos.x += pos.vx;
    pos.y += pos.vy;
    if (pos.x < 0 || pos.x > containerRect.width) pos.vx *= -1;
    if (pos.y < 0 || pos.y > containerRect.height) pos.vy *= -1;
    const icon = iconRefs.value[index];
    if (icon) {
      icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }
  });
  for (let i = 0; i < iconPositions.value.length; i++) {
    for (let j = i + 1; j < iconPositions.value.length; j++) {
      const dx = iconPositions.value[i].x - iconPositions.value[j].x;
      const dy = iconPositions.value[i].y - iconPositions.value[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 30) {
        const angle = Math.atan2(dy, dx);
        const repelForce = 0.5;
        iconPositions.value[i].vx += Math.cos(angle) * repelForce;
        iconPositions.value[i].vy += Math.sin(angle) * repelForce;
        iconPositions.value[j].vx -= Math.cos(angle) * repelForce;
        iconPositions.value[j].vy -= Math.sin(angle) * repelForce;
      }
    }
  }
  requestAnimationFrame(updateIconPositions);
};

onMounted(() => {
  startSlideshow();
  initializeIconPositions();
  updateIconPositions();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}

.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.icon {
  position: absolute;
  font-size: 2rem;
}
</style>
