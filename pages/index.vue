<script setup lang="ts">
import { fetchRoutine } from "~/store/routine";

const routine = ref(null);

onMounted(async () => {
  routine.value = await fetchRoutine();
  console.log(routine.value);
});


</script>

<template>
  <!-- Render ClassCard 5 Times! -->
  <ClassCard v-for="i in 5" :key="i"/>
</template>
