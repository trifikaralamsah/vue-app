<script setup lang="ts">
// import PublicLayout from "./components/layouts/Layout.vue";
// import AdminLayout from "./components/layouts/AdminLayout.vue";

import { useAuthStore } from "./stores/authStore";
import { router } from "./router";

// Authentication user //
const authStore = useAuthStore();
const isAuthenticated = authStore.isLogin;

router.beforeEach((to, _from, next) => {
  if (to.name === "admin" && !isAuthenticated) {
    // router.push({ path: "/", replace: true });
    next("/login");
  } else {
    next();
  }
});
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <PublicLayout v-if="!isAuthenticated" /> -->
  <!-- <AdminLayout v-else /> -->
  <RouterView />
</template>
