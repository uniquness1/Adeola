<template>
  <section class="border-b max-w-6xl w-full mx-auto px-4 py-5 sm:py-10">
    <div class="flex flex-col max-h-max h-full">
      <div>
        <h2
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          class="font-bold text-3xl md:text-5xl uppercase dark:text-slate-300 text-slate-800"
        >
          Work Experience
        </h2>
      </div>
      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div
          v-for="(experience, index) in sortedExperiences"
          :key="index"
          class="relative max-w-max pb-2"
          @mouseenter="showPopup = index"
          @mouseleave="showPopup = null"
        >
          <h3
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="text-sm sm:text-xl font-bold mt-2 max-w-lg dark:text-slate-300 text-slate-800"
          >
            {{ experience.company }} -
            <span class="font-normal">{{ experience.role }}</span>
          </h3>
          <div
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <span class="dark:text-slate-300 text-slate-800">{{
              experience.duration
            }}</span>
            <span class="dark:text-slate-300 text-slate-800"
              >&nbsp;- {{ experience.type }}</span
            >
          </div>
          <span
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="dark:text-slate-300 text-slate-800"
            >{{ experience.location }}</span
          >

          <div
            v-if="showPopup === index"
            class="popup absolute top-0 left-0 mt-8 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10"
            @mouseenter="showPopup = index"
            @mouseleave="showPopup = null"
          >
            <p class="text-sm dark:text-slate-300 text-slate-800">
              {{ experience.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const showPopup = ref(null);

const experiences = [
  {
    company: "Osten Laboratories",
    role: "Web Developer",
    duration: "July 2024 - Present",
    type: "Full Time, Remote",
    location: "Lagos state",
  },
  {
    company: "Wild Fusions Limited",
    role: "Web Developer",
    duration: "May 2023 - October 2023",
    type: "Fulltime, Onsite",
    location: "Ikoyi, Lagos state",
    details:
      "Led in developing as well as maintenance of different websites both for the agency and its clients ensuring responsiveness, accessibility and robustness while maintaining the highest standard possible.",
  },
  {
    company: "Pixel Anchor",
    role: "Web Developer",
    duration: "January 2024 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
    details:
      "Developed and consistently maintained the company's website, fixing errors and ensuring the websiite performance is perfect while developing websites for the company's clients",
  },
  {
    company: "EvolveHQ",
    role: "Web Developer",
    duration: "November 2023 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
    details:
      "Built and optimized the EvolveHq website with a focus on performance, user experience and ensuring every softwares (emails and others) used for the daily activites are always at optimal performance.",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "March 2022 - April 2023",
    type: "Fulltime, Hybrid",
    location: "Ado Ekiti, Ekiti state",
    details:
      "Implemented frontend features using Vue.js and managed state with Vuex. I also assisted in the daily training of students enrolled in the fullstack development training at Kinplus Technologies teaching, HTML, CSS, Javascript, Vue Js, Wordpress and TailwindCSS",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "October 2021 - March 2022",
    type: "Internship, Onsite",
    location: "Ado Ekiti, Ekiti state",
    details:
      "Assisted in developing and testing new features for web applications.",
  },
];

const parseDate = (duration) => {
  const [start] = duration.split(" - ");
  const [month, year] = start.split(" ");
  return new Date(`${year} ${month}`);
};

const sortedExperiences = experiences.sort(
  (a, b) => parseDate(b.duration) - parseDate(a.duration)
);
</script>

<style scoped>
.popup {
  width: 400px;
  transition: opacity 0.5s ease-in-out;
}
</style>
