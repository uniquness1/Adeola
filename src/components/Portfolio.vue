<template>
  <section class="max-w-2xl w-full mx-auto mt-20 md:mt-40 mb-4 px-2.5" id="projects">
    <h2 class="text-center text-[#DAC5A7] text-5xl italic font-normal">
      Work Done
    </h2>
    <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-xl mx-auto">Crafting
      exceptional web and
      mobile
      experiences that
      is not just
      visually appealing but also easy to use</p>
  </section>

  <section>
    <div class="max-w-7xl mx-auto px-4 py-5 sm:py-10 overflow-hidden relative">
      <div class="relative mb-8 overflow-hidden">
        <div class="flex animate-scroll-right gap-6">
          <div v-for="(project, index) in firstRowProjects" :key="`first-set1-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
          <div v-for="(project, index) in firstRowProjects" :key="`first-set2-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
          <div v-for="(project, index) in firstRowProjects" :key="`first-set3-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>

      <div class="relative mb-8 overflow-hidden">
        <div class="flex animate-scroll-left gap-6">
          <div v-for="(project, index) in secondRowProjects" :key="`second-set1-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
          <div v-for="(project, index) in secondRowProjects" :key="`second-set2-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
          <div v-for="(project, index) in secondRowProjects" :key="`second-set3-${index}`"
            class="flex-shrink-0 w-80 md:w-96">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-2 mb-6">
        <button @click="toggleAnimation" :class="[
          'px-5 py-2 rounded-full border transition-all duration-300 font-normal',
          isAnimationPaused
            ? 'bg-[#DAC5A7] text-black border-[#DAC5A7] hover:bg-white'
            : 'text-[#DAC5A7] border-[#DAC5A7] bg-transparent hover:bg-[#DAC5A7] hover:text-black'
        ]">
          <i :class="isAnimationPaused ? 'fas fa-play' : 'fas fa-pause'" class="mr-1"></i>
          {{ isAnimationPaused ? 'Resume' : 'Pause' }} Animation
        </button>

        <button @click="changeSpeed"
          class="px-5 py-2 rounded-full text-[#DAC5A7] border border-[rgba(218,197,167,0.5)] hover:border-[#DAC5A7] hover:bg-[rgba(218,197,167,0.1)] transition-all duration-300">
          Speed: {{ currentSpeedLabel }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ProjectCard from "./ProjectCard.vue";
import TogaVision from "@/assets/images/togavision.webp";
import EvolveHQ from "@/assets/images/evolvehq.webp";
import Jaics from "@/assets/images/jaics.webp";
import Pixel from "@/assets/images/pixela.png";
import Digital from "@/assets/images/roidigital.webp";
import Newspoint from "@/assets/images/eagles.png";
import oladokun from "@/assets/images/oladokun.png"
import Hive from "@/assets/images/propertyhive.png";
import Emterr from "@/assets/images/emteerr.png";
import WDC from "@/assets/images/wdc.png";
import stay from "@/assets/images/stayeasy.png";
import yemicci from "@/assets/images/yemicii.png"
import uac from "@/assets/images/uacfoods.png"


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

const isAnimationPaused = ref(false);
const currentSpeed = ref(1);
const speedOptions = [
  { value: 0.5, label: 'Slow' },
  { value: 1, label: 'Normal' },
  { value: 2, label: 'Fast' }
];
const currentSpeedIndex = ref(1);

const projects = ref([
  {
    name: "Yemicii",
    alt: "screenshot of Yemicii cEommerce website",
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
    name: "Uacfoods DMS",
    alt: "screenshot of uacfood dms",
    imageUrl: uac,
    websiteUrl: "#",
    description:
      "Saas for Uacfoods: distributor management, sales, inventory, payment, receipt",
    tag: ["VueJs", "Vuex", "TailwindCSS"],
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
    name: "The Eagles Consulting",
    alt: "screenshot of eagles consulting website",
    imageUrl: Newspoint,
    websiteUrl: "https://theeaglesconsulting.com.ng/",
    description:
      "Eagles Consulting is a leading Tech Consulting firm focused with helping SMEs achieve  efficiency",
    tag: ["Wordpress", "Elementor", "ACF"],
  },
  {
    name: "Pixel Anchor",
    alt: "screenshot of pixelanchor website",
    imageUrl: Pixel,
    websiteUrl: "https://pixelanchor.com",
    description:
      "Building Pixelanchor Educational Learning management software(LMS)",
    tag: ["Vuejs", "TailwindCSS", "Pinia", "Nuxtjs"],
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
  // {
  //   name: "Jaics Consulting",
  //   alt: "screenshot of jaics consulting website",
  //   imageUrl: Jaics,
  //   websiteUrl: "https://jaicsconsulting.com",
  //   description:
  //     "Jaics Consulting Services is an Human resources firm in Lagos State that provides HR Solutions",
  //   tag: ["Wordpress", "Elementor", "ACF"],
  // },
  {
    name: "Roi Digital",
    alt: "screenshot of roi digital website",
    imageUrl: Digital,
    websiteUrl: "https://roidigital.com.ng",
    description: "ROI Digital is a digital marketing agency in Lagos Nigeria",
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
  // {
  //   name: "Emeterr",
  //   alt: "screenshot of Emeterr Landing page",
  //   imageUrl: Emterr,
  //   websiteUrl: "https://www.emeterr.com/",
  //   description:
  //     "Providing cutting-edge educational solutions for a diverse audience",
  //   tag: ["Nuxt", "Vue", "Vuetify"],
  // },
]);

const displayedProjects = computed(() => {
  if (props.displayCount) {
    return projects.value.slice(0, props.displayCount);
  }
  return projects.value;
});

const firstRowProjects = computed(() => {
  const projects = displayedProjects.value;
  const half = Math.ceil(projects.length / 2);
  return projects.slice(0, half);
});

const secondRowProjects = computed(() => {
  const projects = displayedProjects.value;
  const half = Math.ceil(projects.length / 2);
  return projects.slice(half);
});

const currentSpeedLabel = computed(() => {
  return speedOptions[currentSpeedIndex.value].label;
});

const toggleAnimation = () => {
  isAnimationPaused.value = !isAnimationPaused.value;
  updateAnimationState();
};

const changeSpeed = () => {
  currentSpeedIndex.value = (currentSpeedIndex.value + 1) % speedOptions.length;
  currentSpeed.value = speedOptions[currentSpeedIndex.value].value;
  updateAnimationState();
};

const updateAnimationState = () => {
  const scrollElements = document.querySelectorAll('[class*="animate-scroll"]');
  scrollElements.forEach(el => {
    if (isAnimationPaused.value) {
      el.style.animationPlayState = 'paused';
    } else {
      el.style.animationPlayState = 'running';
      const duration = 30 / currentSpeed.value;
      el.style.animationDuration = `${duration}s`;
    }
  });
};

onMounted(() => {
  updateAnimationState();
});
</script>

<style scoped>
@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-33.33%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-33.33%);
  }

  100% {
    transform: translateX(0);
  }
}

.animate-scroll-right {
  animation: scroll-right 25s linear infinite;
  width: max-content;
}

.animate-scroll-left {
  animation: scroll-left 25s linear infinite;
  width: max-content;
}

.animate-scroll-right:hover,
.animate-scroll-left:hover,
.animate-scroll-right-slow:hover {
  animation-play-state: paused;
}

.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(218, 197, 167, 0.3);
}

* {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>