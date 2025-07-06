<template>
  <section class="w-full">
    <div
      class="w-full mx-auto flex items-center justify-between py-5 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm overflow-hidden">
      <div class="flex items-center animate-scroll whitespace-nowrap">
        <div class="flex items-center space-x-8 text-white">
          <span v-for="index in repeatCount" :key="index" class="flex items-center space-x-2">
            <i v-for="star in starCount" :key="star" class="fas fa-star text-[#DAC5A7] text-[8px]">
            </i>
            <span class="text-base text-[#DAC5A7] font-medium">{{ scrollText }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-10 sm:mt-20 mb-20 md:mb-48 max-w-6xl mx-auto w-full text-center px-5">
      <h3 class="text-[#dac5a7] text-center text-xl font-normal">Got a Project?</h3>
      <h2
        class="text-[#dac5a7] text-center xs:text-5xl sm:text-6xl md:text-8xl font-semibold max-w-[700px] mx-auto my-10">
        Let's bring
        your project
        to
        live
      </h2>
      <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-xl mx-auto">Crafting
        exceptional web and mobile experiences that is not just visually appealing but also easy to use</p>
      <button class="bg-[rgb(218,197,167)] mt-10 py-3  px-10 text-[#121212] rounded">
        <router-link to="/contact" class="text-xl font-medium tracking-widest capitalize">
          Get in
          Touch
        </router-link>
      </button>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { ref } from "vue";
const scrollText = ref("Let's Talk");
const starCount = ref(3);
const repeatCount = ref(100);

AOS.init();
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 100s linear infinite;
}
</style>