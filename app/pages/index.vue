<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-4xl font-bold mb-4">Bem-vindo ao JobHub</h1>
        <p class="text-lg mb-6">Sua plataforma para encontrar e oferecer serviços de forma fácil e rápida.</p>
        <NuxtLink to="/services" class="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition">Ver Serviços</NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
useHead({
  title: "JobHub - Encontre e Ofereça Serviços Facilmente",
});
</script>