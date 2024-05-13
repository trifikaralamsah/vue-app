<template>
  <h3>About Us {{ store.count }}</h3>
  <button @click="store.increment()">Count is: {{ store.count }}</button>
  <div v-for="item in store.users" :key="item.id">
    {{ `Name: ${item.firstName} | Umur: ${item.age} | Email: ${item.email}` }}
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/countStore";
const store = useCounterStore();
</script>
