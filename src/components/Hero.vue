<template>
  <section class="relative max-w-2xl w-full mx-auto mt-40 mb-10 md:mb-24 px-2.5">
    <h1 class="text-center text-[#DAC5A7] text-[42px] leading-[60px] md:text-[82px] font-normal md:leading-[100px]">
      Crafting Digital 
  Experiences
    </h1>
    <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-xl mx-auto">Crafting
      exceptional web and
      mobile
      experiences that
      is not just
      visually appealing but also easy to use</p>
    <div class="w-full max-w-[200px] mx-auto mt-16 md:mt-24 text-center animate-pulse cursor-pointer">
      <i
        class="fas fa-arrow-down text-[#dac5a7] text-base border rounded-full border-[rgba(218,197,167,0.3)] py-1.5 px-3 bg-[rgb(26,26,26)] mr-2 "></i>
      <span class="text-base md:text-xl font-light text-center text-[#dac5a7] max-w-xl mx-auto">My
        Services</span>
    </div>
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
const services = [
  {
    id: '01',
    title: 'WordPress Development',
    description: 'Professional WordPress sites using modern page builders and premium plugins like ACF. Fast, SEO-optimized, and user-friendly.'
  },
  {
    id: '02',
    title: 'Fullstack Development',
    description: 'Complete web applications with Vue.js/Nuxt.js frontend, Express.js APIs, and Laravel backend. Modern, scalable solutions.'
  },
  {
    id: '03',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications built with Flutter. Native performance with single codebase for iOS and Android.'
  }
]
</script>