<template>
  <Hero />
  <Tools />
  <div class="max-w-6xl mx-auto py-5">
    <Portfolio :displayCount="3" :showButton="true" />
  </div>
  <Contact />
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Tools from "@/components/toolSection.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
</script>

<style></style>
