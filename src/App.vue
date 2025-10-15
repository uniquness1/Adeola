<script setup>
import Hero from "@/components/Hero.vue";
import Tools from "@/components/toolSection.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import AnimatedBackground from "./components/AnimatedBackground.vue";
import { ref, onMounted } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const smoothScrollTo = (event, targetId) => {
  event.preventDefault();
  const target = document.querySelector(targetId);

  if (target) {
    const headerOffset = 120;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  }
};

const navLinks = [
  { text: "About", to: "#about" },
  { text: "Projects", to: "#projects" },
  { text: "Contacts", to: "#contact" },
];

onMounted(() => {
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const headerOffset = 120;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  }
  document.dispatchEvent(new Event("render-event"));
});
</script>

<template>
  <AnimatedBackground />
  <header class="w-full px-2.5 pt-8 fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div
      class="max-w-[650px] w-full mx-auto flex items-center justify-between p-3 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm">
      <div class="flex flex-col text-2xl font-normal text-[#DAC5A7]">
        <h2 class="italic">Adeola.</h2>
      </div>
      <div class="flex items-center gap-4">
        <nav class="md:flex items-center gap-4 hidden">
          <template v-for="link in navLinks" :key="link.text">
            <a :href="link.to" @click="(e) => smoothScrollTo(e, link.to)"
              class="text-base text-[#DAC5A7] hover:text-white transition-colors font-normal capitalize px-1 nav-links cursor-pointer">
              {{ link.text }}
            </a>
          </template>
        </nav>
        <div class="flex items-center gap-4 md:hidden">
          <div class="flex flex-col gap-[4px] cursor-pointer" @click="toggleMobileMenu">
            <span class="bg-white block w-3 h-[3px]"></span>
            <span class="bg-white block w-6 h-[3px]"></span>
            <span class="bg-white block w-3 h-[3px] self-end"></span>
          </div>
        </div>
        <button
          class="bg-[#DAC5A7] py-1.5 px-2.5 text-[#121212] capitalize text-base rounded hover:bg-[#c4af91] transition-colors">
          <a href="/cv/adeola-cv.pdf" download="Adeola_CV.pdf">
            Download CV
          </a>
        </button>
      </div>
      <transition name="slide">
        <div v-if="isMobileMenuOpen"
          class="h-screen w-full gap-4 fixed top-0 left-0 bg-[rgb(26,26,26)] z-[111111] md:hidden">
          <div class="absolute top-10 right-6 cursor-pointer" @click="toggleMobileMenu">
            <span class="bg-white block w-6 h-[3px] transform rotate-45"></span>
            <span class="bg-white block w-6 h-[3px] transform -rotate-45 -mt-1"></span>
          </div>
          <div class="flex flex-col gap-6 h-full items-center justify-center">
            <nav class="flex flex-col w-full gap-4 items-center">
              <template v-for="link in navLinks" :key="link.text">
                <a :href="link.to" @click="(e) => smoothScrollTo(e, link.to)"
                  class="text-base font-semibold uppercase px-2 text-[#DAC5A7] nav-links cursor-pointer hover:text-white transition-colors">
                  {{ link.text }}
                </a>
              </template>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
  <main>
    <Hero />
    <Tools />
    <Portfolio />
    <Contact />
  </main>
  <Footer />
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>