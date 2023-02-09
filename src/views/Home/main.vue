<template>
  <h1>{{ store.getCountPlusRandom }}</h1>
</template>

<script setup lang="ts">
import { useSampleStore } from "@/stores/sample";

const store = useSampleStore();

setInterval(() => {
  store.incrementCount();
}, 1000);
</script>
