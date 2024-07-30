<template>
  <section class="relative overflow-hidden py-2 md:py-12">
    <div class="w-full flex flex-col max-w-6xl mx-auto">
      <div class="border-b border-t py-2 md:py-12">
        <div class="scroll-trigger">
          <span
            class="block sm:text-[22px] md:text-[33px] lg:text-[40px] xl:text-[50px] leading-[55px] font-bold text-center w-full md:py-4"
            >JavaScript, Vue.js, Nuxt, Tailwind, Flutter</span
          >
        </div>
      </div>
      <div class="border-b py-2 md:py-12">
        <div class="scroll-trigger">
          <span
            class="block sm:text-[22px] md:text-[33px] lg:text-[40px] xl:text-[50px] leading-[55px] font-bold text-center w-full md:py-4"
            >WordPress, Elementor, Drupal, Webflow</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const triggers = gsap.utils.toArray(".scroll-trigger");

  triggers.forEach((trigger, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      trigger,
      { xPercent: 100, opacity: 0 },
      { xPercent: -120, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    if (index < triggers.length - 1) {
      const nextTrigger = triggers[index + 1];
      tl.fromTo(
        nextTrigger,
        { xPercent: 100, opacity: 0 },
        { xPercent: 60, opacity: 0.3, duration: 0.3 },
        0.7
      );
    }
  });
});
</script>

<style scoped>
.scroll-trigger {
  position: relative;
  overflow: hidden;
}
@media (max-width: 350px) {
  span {
    font-size: 14px !important;
  }
}
</style>
