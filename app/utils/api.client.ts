// utils/api.ts
import { useAuth } from "~/composables/useAuth";

export const api = $fetch.create({
  onRequest({ options }) {
    // Get baseURL inside the request context
    const config = useRuntimeConfig();
    if (!options.baseURL) {
      options.baseURL = config.public.API_HOST;
    }

    const { token } = useAuth();
    if (token.value) {
      options.headers = new Headers(options.headers);
      options.headers.set("Authorization", `Bearer ${token.value}`);
    }
  },
  onResponseError({ response }) {
    if (response.status === 401) {
      console.warn("Token expirado ou inválido.");
    }
  },
});
