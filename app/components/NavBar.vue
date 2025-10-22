<template>
  <v-app-bar color="primary" dark flat>
    <v-container class="d-flex align-center justify-space-between">
      <NuxtLink to="/" class="text-h6 text-white text-decoration-none">
        JobHub
      </NuxtLink>

      <div>        
        <v-btn v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :variant="item.outlined ? 'outlined' : 'text'" :to="item.link" class="text-white">{{ item.title }}</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const menuItems = [
  { title: 'Serviços', icon: 'mdi-hammer-screwdriver', link: '/services' },
  { title: 'Perfil', icon: 'mdi-account', link: '/profile' },
  { title: 'Entrar', icon: 'mdi-login', link: '/login', outlined: true },
]
</script>