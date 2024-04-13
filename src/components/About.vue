<template>
  <section class="w-full border-b">
    <div
      class="max-w-7xl w-full mx-auto px-4 py-5 sm:py-10 overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between"
    >
      <div>
        <h1
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
        >
          About Me
        </h1>
        <p
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          class="dark:text-slate-300 text-slate-800 text-base sm:text-xl max-w-4xl my-5 md:mb-10"
        >
          Hi There, I'm Ajijola Adeola, a frontend developer, web developer,
          wordpress developer and a mobile developer with a handful of
          experience developing beautiful and easy-to-use websites and apps. I'm
          great with HTML, CSS, JavaScript and using modern tools like React,
          VueJs as well as content management systems(CMS) like Wordpress and
          Drupal to make things run smoothly and work on any device. I enjoy and
          thrive working with others to create the best possible experiences,
          and I'm always learning new things to make me even better and excited
          to use my skills and creativity to build something amazing!
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/adeola.webp"
          alt="image of ajijola adeola ayodele"
          class="w-full"
        />
      </div>
    </div>
  </section>
  <Experience />
</template>
<script setup>
import Experience from "./Experience.vue";
</script>
