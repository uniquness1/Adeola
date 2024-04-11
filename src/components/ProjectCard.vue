<template>
  <div class="h-[525px] flex flex-col justify-between">
    <img
      :src="project.imageUrl"
      class="h-[320px] w-full rounded-md"
      :alt="project.name"
    />
    <h2
      class="font-bold text-3xl uppercase dark:text-slate-300 text-slate-800 my-4"
    >
      <a :href="project.websiteUrl" target="_blank">{{ project.name }}</a>
    </h2>
    <p class="text-sm sm:text-base">{{ project.description }}</p>
    <div class="mt-4 flex items-center gap-2">
      <p
        v-for="(tag, index) in project.tag"
        :key="index"
        class="text-xs max-w-max font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block mb-5"
      >
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: Object,
});
</script>
