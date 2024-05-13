<template>
  <h3>Home {{ store.count }}</h3>
  <button @click="store.increment()">Count is: {{ store.count }}</button>
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "../stores/countStore";
import { requestApi } from "../utils";

const store = useCounterStore();

onMounted(() => {
  requestApi({
    method: "get",
    endpoint: "users?limit=5&select=firstName,age,email",
  }).then((res) => {
    console.log(res.data.users);
    store.setUsers(res.data.users);
  });
});
</script>
