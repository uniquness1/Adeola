<template>
  <section class="w-full" id="contact">
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
    <div class="mt-10 sm:mt-20 mb-20 max-w-6xl mx-auto w-full px-5">
      <h2 class="text-[#dac5a7] text-center text-xl font-normal">Got a Project?</h2>
      <h3 class="text-center text-[#DAC5A7] text-5xl italic font-normal mb-10">
        Let's bring
        your project
        to
        live
      </h3>
      <section>
        <div class="max-w-6xl w-full mx-auto px-4 py-5 overflow-hidden">
          <div class="grid md:grid-cols-2 gap-4 md:gap-10">
            <ContactForm />
            <div class="flex flex-col items-start gap-2 mt-2">
              <h2 class="font-bold text-xl sm:text-2xl uppercase text-[#dac5a7]">
                interested in working with me?
              </h2>
              <a class="text-[#dac5a7]" href="mailto:aajijola3@gmail.com">aajijola3@gmail.com</a>
              <a class="text-[#dac5a7]" href="tel:+2349152931633">+2349152931633</a>
              <a class="text-[#dac5a7]" href="tel:+2347065992188">+2347065992188</a>
              <p class="text-[#dac5a7]">
                Lagos State, Nigeria
              </p>
              <Socialmedia class="hidden md:flex" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ContactForm from "./ContactForm.vue";
import Socialmedia from "./Socialmedia.vue";
const scrollText = ref("Let's Talk");
const starCount = ref(3);
const repeatCount = ref(100);
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