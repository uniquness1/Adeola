<template>
  <form action="" submit.prevent class="flex flex-col gap-4">
    <input
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      type="text"
      id="fullname"
      placeholder="Enter is your full name"
      v-model="fullname"
      class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base"
    />
    <input
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      type="email"
      id="email"
      placeholder="Enter your Email"
      v-model="email"
      class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base"
    />
    <textarea
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      id="message"
      placeholder="Your message/Services required"
      cols="30"
      rows="7"
      v-model="message"
      class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base"
    ></textarea>
    <input
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      type="submit"
      value="Submit Now"
      class="text-xs sm:text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button cursor-pointer"
    />
  </form>
</template>
<script setup>
import { ref } from "vue";
const fullname = ref("");
const email = ref("");
const message = ref("");

const SubmitNow = () => {};
</script>
