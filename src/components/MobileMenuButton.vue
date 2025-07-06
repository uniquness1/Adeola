<template>
  <div class="flex flex-col gap-[4px]" @click="toggleMobileMenu">
    <span class="bg-white block w-3 h-[3px]"></span>
    <span class="bg-white block w-6 h-[3px]"></span>
    <span class="bg-white block w-3 h-[3px] self-end"></span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
