<template>
  <section class="max-w-2xl w-full mx-auto mt-20 md:mt-40 px-2.5" id="about">
    <h2 class="text-center text-[#DAC5A7] text-5xl italic font-normal">
      About Me
    </h2>
  </section>
  <section class="w-full mx-auto my-10 md:my-24 px-5">
    <div class="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto w-full mt-10 md:mt-20">
      <div>
        <h2 class="text-[#DAC5A7] text-4xl md:text-5xl font-light leading-tight">A website
          that leaves
          a lasting impression!</h2>
      </div>
      <div>
        <p class="text-[#dac5a7] text-sm sm:text-base md:text-xl opacity-80 leading-relaxed"> Hi There, I'm Ajijola
          Adeola, a
          Ful-stack Developer with a handful of
          experience developing beautiful and easy-to-use websites and apps. I'm
          great with HTML, CSS, JavaScript, and using modern tools like
          VueJs, NuxtJs, and ExpressJs as well as content management systems(CMS)
          like Wordpress, Webflow and Drupal to make things run smoothly and
          work on any device. I enjoy and thrive working with others to create
          the best possible experiences, and I'm always learning new things to
          make me even better and excited to use my skills and creativity to
          build something amazing!</p>
      </div>
    </div>
  </section>
  <div class="w-full">
    <div class="flex gap-4 animate-scroll">
      <div v-for="(image, i) in [...images, ...images]" :key="i"
        class="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 rounded-lg overflow-hidden">
        <img :src="image" :alt="`Portfolio showcase ${i + 1}`"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500 grayscale"
          loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ade from '@/assets/images/ade.jpeg'
import ade1 from '@/assets/images/ade-1.jpg'
import ade2 from '@/assets/images/ade-2.jpg'
import ade3 from '@/assets/images/ade-3.jpg'
import ade4 from '@/assets/images/ade-4.jpg'
import ade5 from '@/assets/images/ade-5.jpg'
import ade7 from '@/assets/images/ade-7.jpg'
import ade8 from '@/assets/images/ade-8.jpeg'
import ade6 from '@/assets/images/ade-6.jpg'
import ade9 from '@/assets/images/ade-9.jpeg'

const images = [ade, ade1, ade2, ade3, ade4, ade5, ade7, ade8, ade6, ade9]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
  width: fit-content;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>