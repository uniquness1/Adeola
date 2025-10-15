<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4 justify-between">
      <div>
        <p class="text-[#DAC5A7]">Designed with ❤ &nbsp; Adeola &copy; {{ currentYear }}</p>
      </div>
      <SocialMedia />
      <p class="text-[#DAC5A7]">{{ currentDate }} &nbsp; {{ currentTime }}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import SocialMedia from "./Socialmedia.vue";
const currentYear = ref(new Date().getFullYear());
const currentDate = ref(getCurrentDate());
const currentTime = ref(getCurrentTime());

function getCurrentDate() {
  const now = new Date();
  return now.toLocaleDateString();
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

setInterval(() => {
  currentTime.value = getCurrentTime();
}, 1000);
</script>
