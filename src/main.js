import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import emailjs from "@emailjs/browser";
import { inject } from "@vercel/analytics";

inject();

emailjs.init("nl8cnmpaBLgCdQsHh");
const app = createApp(App);

app.use(router);

app.mount("#app");
