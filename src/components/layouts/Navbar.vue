<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Us</RouterLink>
    <v-btn
      class="text-none"
      color="blue-darken-4"
      rounded="0"
      variant="outlined"
    >
      Manage Cookies
    </v-btn>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
}
</style>
