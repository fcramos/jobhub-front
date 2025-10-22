// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "system",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            success: "#4CAF50",
            warning: "#FFC107",
            error: "#FF5252",
            info: "#2196F3",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#2196F3",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
