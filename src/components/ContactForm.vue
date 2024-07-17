<template>
  <form @submit.prevent="SubmitNow" class="flex flex-col gap-4">
    <div>
      <input
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        type="text"
        id="fullname"
        placeholder="Enter your full name"
        v-model="fullname"
        @input="clearError('fullname')"
        @blur="validateFullname"
        class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base w-full"
      />
      <p v-if="fullnameError" class="text-base text-red-500">
        {{ fullnameError }}
      </p>
    </div>

    <div>
      <input
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model="email"
        @input="clearError('email')"
        @blur="validateEmailField"
        class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base w-full"
      />
      <p v-if="emailError" class="text-base text-red-500">{{ emailError }}</p>
    </div>

    <div>
      <textarea
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        id="message"
        placeholder="Your message/services required"
        cols="30"
        rows="7"
        v-model="message"
        @input="clearError('message')"
        @blur="validateMessage"
        class="bg-transparent border rounded-md py-2 px-4 text-wrap text-sm sm:text-base w-full"
      ></textarea>
      <p v-if="messageError" class="text-base text-red-500">
        {{ messageError }}
      </p>
    </div>
    <p v-if="successMessage" class="text-base text-green-500">
      {{ successMessage }}
    </p>
    <button
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      type="button"
      @click="SubmitNow"
      :disabled="loading"
      class="text-xs sm:text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button cursor-pointer"
      :class="{ 'cursor-not-allowed opacity-50': loading }"
    >
      <span v-if="!loading">Submit Now</span>
      <span v-else class="flex items-center">
        <svg
          class="animate-spin h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4z"
          ></path>
        </svg>
        <span class="ml-2">Sending...</span>
      </span>
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const fullname = ref("");
const email = ref("");
const message = ref("");
const fullnameError = ref("");
const emailError = ref("");
const messageError = ref("");
const successMessage = ref("");
const loading = ref(false);

const clearError = (field) => {
  if (field === "fullname" && fullname.value !== "") {
    fullnameError.value = "";
  } else if (field === "email" && email.value !== "") {
    emailError.value = "";
  } else if (field === "message" && message.value !== "") {
    messageError.value = "";
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateFullname = () => {
  if (fullname.value === "") {
    fullnameError.value = "Full name is required";
  } else {
    fullnameError.value = "";
  }
};

const validateEmailField = () => {
  if (email.value === "") {
    emailError.value = "Email is required";
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
  } else {
    emailError.value = "";
  }
};

const validateMessage = () => {
  if (message.value === "") {
    messageError.value = "Message is required";
  } else {
    messageError.value = "";
  }
};

const SubmitNow = () => {
  validateFullname();
  validateEmailField();
  validateMessage();

  if (!fullnameError.value && !emailError.value && !messageError.value) {
    loading.value = true;
    const templateParams = {
      from_name: fullname.value,
      from_email: email.value,
      message: message.value,
    };

    emailjs.send("service_61rif4d", "template_1x0knc7", templateParams).then(
      (response) => {
        fullname.value = "";
        email.value = "";
        message.value = "";
        fullnameError.value = "";
        emailError.value = "";
        messageError.value = "";
        successMessage.value = "Message sent successfully!";
        loading.value = false;
        setTimeout(() => {
          successMessage.value = "";
        }, 5000);
      },
      (err) => {
        successMessage.value =
          "Failed to send message. Please try again later.";
        loading.value = false;
        setTimeout(() => {
          successMessage.value = "";
        }, 5000);
      }
    );
  }
};
</script>
