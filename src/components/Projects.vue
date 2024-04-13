<template>
  <section class="w-full border-b">
    <div class="max-w-7xl mx-auto px-4 py-5 sm:pt-10 overflow-hidden">
      <h2
        class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Projects
      </h2>
      <p
        class="text-sm sm:text-base mt-2 mb-4"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Crafting exceptional web and digital experiences
      </p>
      <div class="grid md:grid-cols-2 gap-4 md:gap-10 mb-5">
        <div class="">
          <img
            class="h-[200px] md:h-[320px] w-full rounded-md"
            src="@/assets/images/togavision.webp"
            alt="screenshot of togavision website"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          />
          <h3
            class="font-bold text-3xl uppercase dark:text-slate-300 text-slate-800 my-4"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <a
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              target="_blank"
              href="https://togavision.com"
            >
              Toga Vision
            </a>
          </h3>
          <p
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="text-sm sm:text-base"
          >
            Togavision is a non-profit organization dedicated to empowering
            artisans and building communities through a holistic approach that
            encompasses our robust initiatives.
          </p>
        </div>
        <div class="">
          <img
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="h-[200px] md:h-[320px] w-full rounded-md"
            src="@/assets/images/evolvehq.webp"
            alt="screenshot of EvolveHQ website"
          />
          <h3
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="font-bold text-3xl uppercase dark:text-slate-300 text-slate-800 my-4"
          >
            <a
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              target="_blank"
              href="https://evolvehq.com.ng"
            >
              EvolveHq
            </a>
          </h3>
          <p
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="text-sm sm:text-base"
          >
            Evolve HQ is a pioneering organization dedicated to addressing the
            pressing challenges faced by Africa in the technology sector. With a
            mission to empower Africans with cutting-edge skills.
          </p>
        </div>
      </div>
      <router-link
        class="text-base max-w-max font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block mb-5 button"
        to="/projects"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        >View All Projects</router-link
      >
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>
