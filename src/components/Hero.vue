<template>
  <section class="">
    <div class="max-w-6xl mx-auto pt-10 md:pt-20 px-4">
      <h1
        class="text-[33px] sm:text-[40px] md:text-[63.9px] lg:text-[84px] xl:text-[95px] font-extrabold font-serif leading-[60px] md:leading-[90px] lg:leading-[100px] uppercase"
      >
        I'M Ajijola Adeola
      </h1>
      <h2
        class="text-[36px] sm:text-[44px] md:text-[70px] lg:text-[92.5px] xl:text-[104px] font-medium uppercase leading-[60px] md:leading-[90px] lg:leading-[100px] lg:my-4 fir"
      >
        A WEB DEVELOPER &
      </h2>
      <h2
        class="text-[33px] sm:text-[40px] md:text-[63.9px] lg:text-[84px] xl:text-[95px] font-extrabold font-serif leading-[60px] md:leading-[90px] lg:leading-[100px] uppercase sec"
      >
        MOBILE DEVELOPER
      </h2>
    </div>
    <p class="text-base mb-4 max-w-lg w-full pt-10 px-4 lg:mx-auto">
      Hello!!!, My name is Ajijola Adeola Ayodele, a developer with a good eye
      for design, I love to make things pixel perfect either with coding or low
      code tools.
    </p>
    <router-link
      class="text-base max-w-max lg:mx-auto font-medium uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block mb-5 button"
      to="/about"
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
    >
      Learn More About Me
    </router-link>
  </section>
</template>
<style scoped>
@media (max-width: 414px) {
  h1,
  .sec {
    font-size: 32px;
  }
  .fir {
    font-size: 35px;
  }
}
@media (max-width: 400px) {
  h1,
  .sec {
    font-size: 30.5px;
  }
  .fir {
    font-size: 34px;
  }
}
@media (max-width: 388px) {
  h1,
  .sec {
    font-size: 29.5px;
  }
  .fir {
    font-size: 31.5px;
  }
}
@media (max-width: 370px) {
  h1,
  .sec {
    font-size: 28px;
  }
  .fir {
    font-size: 30px;
  }
}
@media (max-width: 355px) {
  h1,
  .sec {
    font-size: 25.5px;
    line-height: 45px;
  }
  .fir {
    font-size: 26.5px;
    line-height: 45px;
  }
}
@media (max-width: 325px) {
  h1,
  .sec {
    font-size: 21.5px;
  }
  .fir {
    font-size: 23px;
  }
}
@media (max-width: 280px) {
  h1,
  .sec {
    font-size: 20px;
  }
  .fir {
    font-size: 22px;
  }
}
</style>
