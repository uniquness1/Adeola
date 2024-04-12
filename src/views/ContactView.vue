<template>
  <section class="w-full border-b">
    <div class="max-w-7xl w-full mx-auto px-4 py-5 sm:py-10 overflow-hidden">
      <h2
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
      >
        Contact Me
      </h2>
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
        <form action="" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              for="name"
              >Full Name</label
            >
            <input
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              type="text"
              name="name"
              id="fullname"
              placeholder="what is your full name"
              required
              autocomplete="true"
              class="bg-transparent border rounded-md py-2 px-4 text-wrap text-xs"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              for="email"
              >Email Address</label
            >
            <input
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              type="email"
              name="email"
              id="email"
              placeholder="What is your Email"
              required
              autocomplete="true"
              class="bg-transparent border rounded-md py-2 px-4 text-wrap text-xs"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              for="message"
              >Your Message</label
            >
            <textarea
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              name="message"
              id="message"
              placeholder="Your message/Services required"
              cols="30"
              rows="7"
              required
              autocomplete="true"
              class="bg-transparent border rounded-md py-2 px-4 text-wrap text-xs"
            ></textarea>
          </div>
          <input
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            type="submit"
            value="Submit Now"
            class="text-xs sm:text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button cursor-pointer"
          />
        </form>
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
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>

<style></style>
