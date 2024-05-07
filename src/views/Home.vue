<template>
  <h3>Home {{ store.count }}</h3>
  <button @click="store.increment()">Count is: {{ store.count }}</button>
</template>

<script setup>
import { useCounterStore } from "../stores/countStore";
const store = useCounterStore();
</script>
