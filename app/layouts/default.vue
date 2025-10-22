<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from '~/components/Navbar'
</script>