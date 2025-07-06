<template>
  <section class="max-w-2xl w-full mx-auto mt-40 mb-10 md:mb-24 px-2.5">
    <h1 class="text-center text-[#DAC5A7] text-[42px] leading-[60px] md:text-[82px] font-normal md:leading-[100px]">
      Contact Me
    </h1>
    <p class="text-base md:text-2xl font-extralight text-center mt-4 text-[#dac5a7] max-w-xl mx-auto">Crafting
      exceptional web and
      mobile
      experiences that
      is not just
      visually appealing but also easy to use</p>
    <div class="w-full max-w-[200px] mx-auto mt-16 md:mt-24 text-center animate-pulse cursor-pointer">
      <i
        class="fas fa-arrow-down text-[#dac5a7] text-base border rounded-full border-[rgba(218,197,167,0.3)] py-1.5 px-3 bg-[rgb(26,26,26)] mr-2 "></i>
      <span class="text-base md:text-xl font-light text-center text-[#dac5a7] max-w-xl mx-auto">Contact Me Now</span>
    </div>
  </section>
  <section>
    <div class="max-w-6xl w-full mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <div class="grid md:grid-cols-2 gap-4 md:gap-10">
        <ContactForm />
        <div class="flex flex-col gap-2 mt-2">
          <h2 data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
            class="font-bold text-xl sm:text-2xl uppercase text-[#dac5a7]">
            interested in working with me?
          </h2>
          <a class="text-[#dac5a7]" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
            href="mailto:aajijola3@gmail.com">aajijola3@gmail.com</a>
          <a class="text-[#dac5a7]" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
            href="tel:+2349152931633">+2349152931633</a>
          <a class="text-[#dac5a7]" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
            href="tel:+2347065992188">+2347065992188</a>
          <p class="text-[#dac5a7]" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine">
            Ekiti State, Nigeria
          </p>
          <SocialMedia class="hidden md:flex" data-aos="fade-zoom-in" data-aos-duration="1500"
            data-aos-easing="ease-in-sine" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SocialMedia from "@/components/Socialmedia.vue";
import ContactForm from "@/components/ContactForm.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>

<style></style>
