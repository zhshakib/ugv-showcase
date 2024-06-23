<script setup lang="ts">
import { fetchRoutine } from "~/store/routine";
// use mounted hook to fetch routine

const routine = ref(null);

onMounted(async () => {
  routine.value = await fetchRoutine();
  console.log(routine.value);
});
</script>

<template>
  <h2 class="text-3xl font-bold underline">Hello World!</h2>
  <p>{{ routine }}</p>
</template>
