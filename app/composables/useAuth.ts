// composables/useAuth.ts
import { ref } from "vue";
import { api } from "~/utils/api.client";

const token = ref<string | null>(null);
const refreshToken = ref<string | null>(null);
const user = ref<any>(null);

export function useAuth() {
  const login = async (email: string, password: string) => {
    const response = await api("/accounts/login/", {
      method: "POST",
      body: { email, password },
    });

    token.value = response.access;
    refreshToken.value = response.refresh;
    user.value = response.user ?? null;

    localStorage.setItem("access", response.access);
    localStorage.setItem("refresh", response.refresh);
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    return api("/accounts/register/", {
      method: "POST",
      body: data,
    });
  };

  const refresh = async () => {
    const refreshValue = localStorage.getItem("refresh");
    if (!refreshValue) return;
    const response = await api("/accounts/token/refresh/", {
      method: "POST",
      body: { refresh: refreshValue },
    });
    token.value = response.access;
    localStorage.setItem("access", response.access);
  };

  const logout = () => {
    token.value = null;
    refreshToken.value = null;
    user.value = null;
    localStorage.clear();
  };

  const init = () => {
    token.value = localStorage.getItem("access");
    refreshToken.value = localStorage.getItem("refresh");
  };

  return { token, refreshToken, user, login, register, refresh, logout, init };
}
