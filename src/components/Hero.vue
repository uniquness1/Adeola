<template>
  <section class="w-full border-b">
    <div class="max-w-7xl mx-auto px-4 pt-5 sm:pt-10 overflow-hidden">
      <div
        class="flex flex-col w-full"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <h1
          class="font-bold max-w-lg sm:max-w-7xl w-full text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase dark:text-slate-300 text-slate-800"
          ref="h1FrontEnd"
        >
          Front-End
        </h1>
        <h1
          class="font-bold max-w-lg sm:max-w-7xl w-full text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase dark:text-slate-300 text-slate-800 text-right"
          ref="h1Developer"
        >
          Developer
        </h1>
      </div>
      <div class="grid lg:grid-cols-2 gap-10 justify-end w-full my-5 md:my-10">
        <div class="hidden lg:block"></div>
        <div>
          <p
            class="lg:text-left dark:text-slate-300 text-slate-800 text-base sm:text-xl max-w-2xl w-full mb-4"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            I'm a Developer with a handful of experience developing beautiful
            and easy-to-use websites and apps. I'm great with HTML, CSS,
            JavaScript and using modern tools like React, VueJs as well as
            content management systems(CMS) like Wordpress and Drupal to make
            things run smoothly and work on any device. I enjoy and thrive
            working with others to create the best possible experiences, and I'm
            always learning new things to make me even better and excited to use
            my skills and creativity to build something amazing!
          </p>
          <router-link
            class="text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button"
            to="/about"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            About Me
          </router-link>
        </div>
      </div>
    </div>
    <Test />
  </section>
</template>

<script setup>
import Test from "./Test.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const h1FrontEnd = ref(null);
const h1Developer = ref(null);
// const h1FrontEndSplit = new SplitText(h1FrontEnd.value, {
//   type: "chars",
// });

// const h1DeveloperSplit = new SplitText(h1Developer.value, {
//   type: "chars",
// });
onMounted(() => {
  const tl = gsap.timeline();
  gsap.to(h1FrontEnd.value, {
    x: "-100vw",
    opacity: 0,
    duration: 5,
    ease: "Power2.easein",
    stagger: 0.5,
    scrollTrigger: {
      trigger: h1FrontEnd.value,
      start: "top 10%",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(h1Developer.value, {
    x: "100vw",
    opacity: 0,
    duration: 5,
    ease: "Power2.easein",
    stagger: 0.5,
    scrollTrigger: {
      trigger: h1Developer.value,
      start: "top 10%",
      end: "bottom top",
      scrub: true,
    },
  });
  // tl.to(h1FrontEndSplit.chars, {
  //   duration: 0.5,
  //   y: "100%",
  //   ease: "Power2.easeIn",
  //   stagger: 0.1,
  // }).to(h1FrontEndSplit.chars, {
  //   y: 0,
  //   ease: "Power2.easeOut",
  //   rotation: Math.random() > 0.5 ? 360 : -360,
  // });
  // tl.to(h1DeveloperSplit.chars, {
  //   duration: 0.5,
  //   y: "100%",
  //   ease: "Power2.easeIn",
  //   stagger: 0.1,
  // }).to(h1DeveloperSplit.chars, {
  //   y: 0,
  //   ease: "Power2.easeOut",
  //   rotation: Math.random() > 0.5 ? 360 : -360,
  // });
  gsap.timeline().play();
});
</script>

<style scoped>
@media (max-width: 450px) {
  h1 {
    font-size: 45px;
  }
}
@media (max-width: 350px) {
  h1 {
    font-size: 34.5px;
  }
}
</style>
