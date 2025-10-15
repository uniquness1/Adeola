<template>
  <header class="w-full px-2.5 pt-8 fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div
      class="max-w-[500px] w-full mx-auto flex items-center justify-between p-3 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm">
      <router-link to="/" class="flex flex-col text-2xl font-normal text-[#DAC5A7]">
        <h2>Adeola</h2>
      </router-link>
      <div class="flex items-center gap-4">
        <nav class="md:flex items-center gap-4 hidden">
          <template v-for="link in navLinks" :key="link.text">
            <router-link :to="link.to"
              class="text-base text-[#DAC5A7] hover:text-[#121212] font-normal capitalize px-1 nav-links">
              {{ link.text }}
            </router-link>
          </template>
        </nav>
        <div class="flex items-center gap-4 md:hidden">
          <div class="flex flex-col gap-[4px]" @click="toggleMobileMenu">
            <span class="bg-white block w-3 h-[3px]"></span>
            <span class="bg-white block w-6 h-[3px]"></span>
            <span class="bg-white block w-3 h-[3px] self-end"></span>
          </div>
        </div>
        <button class="bg-[#DAC5A7] py-1.5 px-2.5 text-[#121212] capitalize text-base rounded"><a
            href="/cv/adeola-cv.pdf" download="Adeola_CV.pdf">
            Download CV
          </a></button>
      </div>
      <!-- Mobile nav -->
      <transition name="slide">
        <div v-if="isMobileMenuOpen"
          class="h-screen w-full gap-4 fixed top-0 left-0 bg-[rgb(26,26,26)] z-[111111] md:hidden">
          <div class="absolute top-10 right-6" @click="toggleMobileMenu">
            <span class="bg-white  block w-6 h-[3px] transform rotate-45"></span>
            <span class="bg-white block w-6 h-[3px] transform -rotate-45 -mt-1"></span>
          </div>
          <div class="flex flex-col gap-6 h-full items-center justify-center">
            <nav class="flex flex-col w-full gap-4 items-center">
              <template v-for="(link, to) in navLinks" :key="to">
                <router-link @click="toggleMobileMenu" :to="link.to"
                  class="text-base font-semibold uppercase px-2 text-[#DAC5A7] nav-links">{{ link.text
                  }}</router-link>
              </template>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const navLinks = [
  { text: "About", to: "/about" },
  { text: "Projects", to: "/projects" },
  { text: "Contacts", to: "#contact" },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>