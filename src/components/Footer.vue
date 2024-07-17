<template>
  <footer>
    <h2
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      class="font-bold text-3xl md:text-8xl text-center uppercase dark:text-slate-300 text-slate-800 pt-5"
    >
      Adeola
    </h2>
    <div
      class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4 justify-between"
    >
      <div>
        <p>Designed with ❤ &nbsp; Adeola &copy; {{ currentYear }}</p>
      </div>
      <SocialMedia />
      <p>{{ currentDate }} &nbsp; {{ currentTime }}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import SocialMedia from "./Socialmedia.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const currentYear = ref(new Date().getFullYear());
const currentDate = ref(getCurrentDate());
const currentTime = ref(getCurrentTime());

// Function to get the current date
function getCurrentDate() {
  const now = new Date();
  return now.toLocaleDateString();
}

// Function to get the current time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Update the current time every second
setInterval(() => {
  currentTime.value = getCurrentTime();
}, 1000);
</script>
