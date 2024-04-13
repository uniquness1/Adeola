<template>
  <section
    class="border-b max-w-7xl w-full mx-auto px-4 py-5 sm:py-10 overflow-hidden"
  >
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
          v-for="(experience, index) in experiences"
          :key="index"
          class="max-w-max pb-2"
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
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const experiences = [
  {
    company: "Pixel Anchor",
    role: "Web Developer",
    duration: "January 2024 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "March 2022 - April 2023",
    type: "Fulltime, Hybrid",
    location: "Ado Ekiti, Ekiti state",
  },
  {
    company: "EvolveHQ",
    role: "Web Developer",
    duration: "November 2023 - Present",
    type: "Contract, Remote",
    location: "Lagos state",
  },
  {
    company: "Kinplus Technologies",
    role: "Frontend Developer",
    duration: "October 2021 - March 2022",
    type: "Internship, Onsite",
    location: "Ado Ekiti, Ekiti state",
  },
  {
    company: "Wild Fusions Limited",
    role: "Web Developer",
    duration: "May 2023 - October 2023",
    type: "Contract, Onsite",
    location: "Ikoyi, Lagos state",
  },
];
</script>
