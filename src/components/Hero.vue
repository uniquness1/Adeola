<template>

  <section class="relative max-w-3xl w-full mx-auto mt-48 mb-32 px-2.5">
    <h1
      class="text-center text-[#DAC5A7] text-[42px] leading-[60px] md:text-[82px] font-normal md:leading-[100px] italic">
      Crafting Digital Experiences
    </h1>
    <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-7xl mx-auto">
      Building modern web applications. Specialized in creating
      <span class="font-normal">high-performance</span>,
      <span class="font-normal">accessible</span>, and
      <span class="font-normal">SEO-friendly</span> solutions that drive results.
    </p>

    <div class="w-full max-w-[400px] mx-auto mt-6 text-center">
      <span class="text-[#dac5a7] text-2xl font-light italic transition-all duration-700 ease-in-out inline-block"
        :class="{
          'opacity-0 -translate-y-4': isFading,
          'opacity-100 translate-y-0': !isFading
        }" :aria-live="'polite'">
        {{ displayText }}
      </span>
      <noscript>
        <ul class="sr-only">
          <li v-for="text in textArray" :key="text">{{ text }}</li>
        </ul>
      </noscript>
    </div>

    <div class="sr-only">
      <h2>Web Development Services</h2>
      <ul>
        <li>Frontend Development with Vue.js Nuxt.js</li>
        <li>Backend Development with Node.js, Express.js Laravel, PHP</li>
        <li>Wordpress Developer</li>
        <li>Responsive Web Design</li>
        <li>Performance Optimization</li>
        <li>SEO Implementation</li>
      </ul>
    </div>
  </section>
  <section class="max-w-2xl w-full mx-auto mb-10 md:mb-20 px-2.5" id="about">
    <h2 class="text-center text-[#DAC5A7] text-5xl italic font-normal">
      Services
    </h2>
  </section>
  <section id="services"
    class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10 max-w-7xl w-full mx-auto px-5 2xl:px-0">
    <div v-for="service in services" :key="service.id"
      class="p-6 md:p-10 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm">
      <span class="text-[#dac5a7] text-sm">{{ service.id }}</span>
      <h2 class="text-[#dac5a7] text-xl sm:text-2xl my-2">{{ service.title }}</h2>
      <p class="text-[#dac5a7] text-sm sm:text-base opacity-80 leading-relaxed">{{ service.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const textArray = [
  "Lightning Fast ⚡",
  "Mobile-First 📱",
  "SEO Optimized 🚀",
  "Accessible ♿",
  "Performance Driven 💪",
  "User-Centric 🎯"
]

const displayText = ref(textArray[0])
const currentIndex = ref(0)
const isFading = ref(false)
let intervalId = null

const animateText = () => {
  isFading.value = true
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % textArray.length
    displayText.value = textArray[currentIndex.value]
    isFading.value = false
  }, 700)
}
const services = [
  {
    id: '01',
    title: 'WordPress Development',
    description: 'Professional WordPress sites using modern page builders and premium plugins like ACF. Fast, SEO-optimized, and user-friendly.'
  },
  {
    id: '02',
    title: 'Frontend Development',
    description: 'Responsive user interfaces with HTML, CSS, JS, Vue.js, Nuxt.js, Tailwid. Clean code, and pixel-perfect designs.'
  },
  {
    id: '03',
    title: 'Backend Development',
    description: 'Robust server-side solutions with Node.js Express.js PHP, and Laravel. Secure APIs, database design, and scalable architecture.'
  },
  {
    id: '04',
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and optimization. Regular backups, security monitoring, and performance improvements to keep your site running smoothly.'
  },
  {
    id: '05',
    title: 'E-commerce Development',
    description: 'Fully functional online stores with WooCommerce, or custom solutions. Secure payments and inventory management.'
  },
  {
    id: '06',
    title: 'API Development & Integration',
    description: 'Custom REST APIs and third-party integrations. Connect your website with payment gateways, CRMs, and external services seamlessly.'
  }
]
onMounted(() => {
  intervalId = setInterval(animateText, 3500)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>