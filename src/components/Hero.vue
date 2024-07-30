<template>
  <section class="relative 2xl:h-[100dvh] max-w-6xl mx-auto">
    <div class="py-16 px-4 xl:px-0 relative z-10">
      <div v-if="isContentReady">
        <h1
          ref="title"
          class="text-left text-slate-800 dark:text-white text-[35px] sm:text-[46px] md:text-[67.5px] lg:text-[90px] leading-[55px] md:leading-[90px] font-black font-serif"
        >
          <span
            v-for="(char, index) in titleChars"
            :key="`title-${index}`"
            :class="['char', { space: char === ' ' }]"
            >{{ char }}</span
          >
        </h1>
        <h1
          ref="subtitle0"
          class="text-left text-slate-800 dark:text-white text-[35px] sm:text-[46px] md:text-[67.5px] lg:text-[90px] leading-[55px] md:leading-[90px] font-black font-serif"
        >
          <span
            v-for="(char, index) in subtitle0Chars"
            :key="`subtitle0-${index}`"
            :class="['char', { space: char === ' ' }]"
            >{{ char }}</span
          >
        </h1>
        <h2
          ref="subtitle1"
          class="text-left text-slate-800 dark:text-white text-[35px] sm:text-[46px] md:text-[67.5px] lg:text-[90px] leading-[55px] md:leading-[90px] font-black font-serif"
        >
          <span
            v-for="(char, index) in subtitle1Chars"
            :key="`subtitle1-${index}`"
            :class="['char', { space: char === ' ' }]"
            >{{ char }}</span
          >
        </h2>
        <h2
          ref="subtitle2"
          class="text-left text-slate-800 dark:text-white text-[35px] sm:text-[46px] md:text-[67.5px] lg:text-[90px] leading-[55px] md:leading-[90px] font-black font-serif"
        >
          <span
            v-for="(char, index) in subtitle2Chars"
            :key="`subtitle2-${index}`"
            :class="['char', { space: char === ' ' }]"
            >{{ char }}</span
          >
        </h2>
        <h2
          ref="subtitle3"
          class="text-left text-slate-800 dark:text-white text-[35px] sm:text-[46px] md:text-[67.5px] lg:text-[90px] leading-[55px] md:leading-[90px] font-black font-serif"
        >
          <span
            v-for="(char, index) in subtitle3Chars"
            :key="`subtitle3-${index}`"
            :class="['char', { space: char === ' ' }]"
            >{{ char }}</span
          >
        </h2>
      </div>
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

// Define the text contents
const titleText = "Crafting Exceptional";
const subtitle0Text = "Experiences";
const subtitle1Text = "Web &";
const subtitle2Text = "Mobile";
const subtitle3Text = "Developer";

// Create reactive arrays to store the characters
const titleChars = ref(titleText.split(""));
const subtitle0Chars = ref(subtitle0Text.split(""));
const subtitle1Chars = ref(subtitle1Text.split(""));
const subtitle2Chars = ref(subtitle2Text.split(""));
const subtitle3Chars = ref(subtitle3Text.split(""));

const isContentReady = ref(false);

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
const animationFrameId = ref(null);

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
        const repelForce = 0.3;
        iconPositions.value[i].vx += Math.cos(angle) * repelForce;
        iconPositions.value[i].vy += Math.sin(angle) * repelForce;
        iconPositions.value[j].vx -= Math.cos(angle) * repelForce;
        iconPositions.value[j].vy -= Math.sin(angle) * repelForce;
      }
    }
  }
  animationFrameId.value = requestAnimationFrame(updateIconPositions);
};

const animateText = () => {
  const chars = document.querySelectorAll(".char");
  if (chars.length === 0) return;

  gsap.set(chars, {
    transformOrigin: "center center -100px",
    backfaceVisibility: "hidden",
  });

  gsap.to(chars, {
    rotationX: "360",
    stagger: 0.2,
    repeat: -1,
    duration: 8,
  });
};

onMounted(() => {
  nextTick(() => {
    isContentReady.value = true;
    nextTick(() => {
      animateText();
      initializeIconPositions();
      updateIconPositions();
    });
  });
});

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
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

.char {
  display: inline-block;
}

.char.space {
  margin-right: 0.5em;
}

@media (max-width: 400px) {
  h1,
  h2 {
    font-size: 30px;
    line-height: 40px;
  }
}
@media (max-width: 360px) {
  h1,
  h2 {
    font-size: 28px;
  }
}
@media (max-width: 320px) {
  h1,
  h2 {
    font-size: 25px;
  }
}
@media (min-width: 100px) and (max-width: 500px) {
  section {
    height: 80vh;
    height: 80dvh;
    display: grid;
    place-items: center;
  }
}
</style>
