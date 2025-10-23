<template>
  <v-container class="d-flex justify-center mt-10">
    <v-card width="400" class="pa-6">
      <v-card-title class="text-h5 text-center">Entrar</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onLogin">
          <v-text-field v-model="email" label="Email" type="email" required />
          <v-text-field v-model="password" label="Senha" type="password" required />
          <v-btn :loading="loading" color="primary" type="submit" block>Entrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from '#app'

useHead({
  title: "JobHub - Entrar",
});

definePageMeta({
  layout: "clean",
});

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()
const auth = useAuth()

const onLogin = async () => {
  loading.value = true
  try {
    await auth.login(email.value, password.value)
    router.push('/')
  } catch (e) {
    alert(`Falha no login: ${e.message}`)
  } finally {
    loading.value = false
  }
}
</script>
