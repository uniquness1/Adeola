<template>
  <section class="max-w-2xl w-full mx-auto mt-40 mb-10 md:mb-24 px-2.5">
    <h1 class="text-center text-[#DAC5A7] text-[42px] leading-[60px] md:text-[82px] font-normal md:leading-[100px]">
      Ajijola Adeola Ayodele
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
      <span class="text-base md:text-xl font-light text-center text-[#dac5a7] max-w-xl mx-auto">About Me</span>
    </div>
  </section>
  <section class="max-w-6xl mx-auto w-full mb-10 md:mb-24 px-2.5">
    <div
      class="p-6 md:p-10 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm">
      <span class="text-[#dac5a7] text-base">Ajijola Adeola</span>
      <h2 class="text-[#dac5a7] text-xl sm:text-2xl md:text-4xl my-4">Your Partner in Bringing Your Web Design Vision to
        Life</h2>
      <p class="text-[#dac5a7] text-sm sm:text-base md:text-xl opacity-80 leading-relaxed"> Hi There, I'm Ajijola
        Adeola, a
        frontend developer, web developer,
        wordpress developer and a mobile developer with a handful of
        experience developing beautiful and easy-to-use websites and apps. I'm
        great with HTML, CSS, JavaScript, Flutter and using modern tools like
        ReactJs, VueJs and NuxtJs as well as content management systems(CMS)
        like Wordpress, Webflow and Drupal to make things run smoothly and
        work on any device. I enjoy and thrive working with others to create
        the best possible experiences, and I'm always learning new things to
        make me even better and excited to use my skills and creativity to
        build something amazing!</p>
    </div>
    <div class="mt-10 grid md:grid-cols-3 gap-10">
      <div
        class="p-6 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm flex items-center justify-between">
        <div class="flex items-center gap-5">
          <i class="fab fa-instagram text-[#dac5a7] text-xl"></i>
          <p class="text-xl font-normal text-[#dac5a7]">Instagram</p>
        </div>
        <i class="fas fa-arrow-right text-[#dac5a7] text-xl"></i>
      </div>
      <div
        class="p-6 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm flex items-center justify-between">
        <div class="flex items-center gap-5">
          <i class="fab fa-twitter text-[#dac5a7] text-xl"></i>
          <p class="text-xl font-normal text-[#dac5a7]">Twitter</p>
        </div>
        <i class="fas fa-arrow-right text-[#dac5a7] text-xl"></i>
      </div>
      <div
        class="p-6 border-[0.5px] border-[rgba(218,197,167,0.3)] bg-[rgba(33,33,33,0.8)] backdrop-blur-md rounded-sm flex items-center justify-between">
        <div class="flex items-center gap-5">
          <i class="fab fa-linkedin text-[#dac5a7] text-xl"></i>
          <p class="text-xl font-normal text-[#dac5a7]">Linkedin</p>
        </div>
        <i class="fas fa-arrow-right text-[#dac5a7] text-xl"></i>
      </div>
    </div>
  </section>
  <Contact />
</template>
<script setup>
import Contact from "./Contact.vue";
</script>
