import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
const pinia = createPinia(); // Pinia

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
});

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
