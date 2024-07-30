<template>
  <header class="w-full">
    <div
      class="max-w-6xl mx-auto flex items-center justify-between p-4 border-b"
    >
      <router-link to="/" class="flex flex-col text-2xl font-medium">
        Adeola
      </router-link>
      <nav class="md:flex items-center gap-2 hidden">
        <template v-for="link in navLinks" :key="link.text">
          <router-link
            :to="link.to"
            class="text-sm font-semibold capitalize px-1 nav-links"
          >
            {{ link.text }}
          </router-link>
        </template>
        <div class="flex items-center gap-4 md:gap-6">
          <input
            @click="toggleDark()"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox hidden"
            :class="{ 'dark-mode': isDark }"
          />
          <label for="checkbox" class="switch-label">
            <span
              v-if="isDark"
              class="moon block cursor-pointer text-yellow-300 text-xl"
              ><i class="fa-solid fa-sun"></i
            ></span>
            <span v-else class="sun cursor-pointer block text-xl"
              ><i class="fa-solid fa-moon"></i
            ></span>
            <div
              class="switch-toggle"
              :class="{ 'switch-toggle-checked': isDark }"
            ></div>
          </label>
        </div>
      </nav>
      <div class="flex items-center gap-4 md:hidden">
        <div class="flex flex-col gap-[4px]" @click="toggleMobileMenu">
          <span class="bg-black dark:bg-white block w-3 h-[3px]"></span>
          <span class="bg-black dark:bg-white block w-6 h-[3px]"></span>
          <span
            class="bg-black dark:bg-white block w-3 h-[3px] self-end"
          ></span>
        </div>
        <div class="flex items-center gap-4 md:gap-6">
          <input
            @click="toggleDark()"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox hidden"
            :class="{ 'dark-mode': isDark }"
          />
          <label for="checkbox" class="switch-label">
            <span
              v-if="isDark"
              class="moon block cursor-pointer text-yellow-300 text-2xl"
              ><i class="fa-solid fa-sun"></i
            ></span>
            <span v-else class="sun cursor-pointer block text-2xl"
              ><i class="fa-solid fa-moon"></i
            ></span>
            <div
              class="switch-toggle"
              :class="{ 'switch-toggle-checked': isDark }"
            ></div>
          </label>
        </div>
      </div>
      <!-- Mobile nav -->
      <transition name="slide">
        <div
          v-if="isMobileMenuOpen"
          class="h-screen w-full gap-4 fixed top-0 left-0 dark:bg-[#16171d] bg-white z-10 md:hidden"
        >
          <div class="absolute top-10 right-6" @click="toggleMobileMenu">
            <span
              class="dark:bg-white bg-black block w-6 h-[3px] transform rotate-45"
            ></span>
            <span
              class="dark:bg-white bg-black block w-6 h-[3px] transform -rotate-45 -mt-1"
            ></span>
          </div>
          <div class="flex flex-col gap-6 h-full items-center justify-center">
            <nav class="flex flex-col w-full gap-4 items-center">
              <template v-for="(link, to) in navLinks" :key="to">
                <router-link
                  @click="toggleMobileMenu"
                  :to="link.to"
                  class="text-base font-semibold uppercase px-2 text-black dark:text-white nav-links"
                  >{{ link.text }}</router-link
                >
              </template>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Projects", to: "/projects" },
  { text: "Contacts", to: "/contact" },
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
