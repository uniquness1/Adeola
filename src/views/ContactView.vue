<template>
  <section class="w-full border-b">
    <div class="max-w-7xl w-full mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <h1
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
      >
        Contact Me
      </h1>
      <p
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        class="text-sm sm:text-base mt-2 mb-5 max-w-lg"
      >
        For Inquires and business conversation reach out to me, i'm open to all
        business conversation
      </p>
      <div class="grid md:grid-cols-2 gap-4 md:gap-10">
        <ContactForm />
        <div class="flex flex-col gap-2 mt-2">
          <h2
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="font-bold text-xl sm:text-2xl uppercase dark:text-slate-300 text-slate-800"
          >
            interested in working with me?
          </h2>
          <a
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            href="mailto:aajijola3@gmail.com"
            >aajijola3@gmail.com</a
          >
          <a
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            href="tel:+2349152931633"
            >+2349152931633</a
          >
          <p
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            Lagos State, Nigeria
          </p>
          <SocialMedia
            class="hidden md:flex"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          />
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
