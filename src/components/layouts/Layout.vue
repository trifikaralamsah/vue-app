<script setup lang="ts">
import Navbar from "./Navbar.vue";
import FooterComponent from "./Footer.vue";
</script>

<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
