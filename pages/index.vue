<script setup lang="ts">
import { DateTime } from "luxon";
import { fetchRoutine } from "~/store/routine";

const routine: any = ref([]);

// get todays name
// Using luxon to simplify the process
const currentTime = DateTime.now().setLocale("en");
const today =
  currentTime.hour >= 18
    ? currentTime.plus({ days: 1 }).weekdayLong.toLocaleLowerCase()
    : currentTime.weekdayLong.toLocaleLowerCase();

// get routine by todays name
onMounted(async () => {
  routine.value = await fetchRoutine();
  routine.value = routine.value?.days.filter((day: any) => day.name === today);
  routine.value = routine.value[0].items;
});
</script>

<template>
  <!-- Render ClassCard 5 Times! -->
  <div>
    <h2 class="text-2xl font-medium text-center mb-2">
      {{ today.toUpperCase() }}
    </h2>
  </div>
  <div class="h-1 w-1/2 mx-auto bg-white mb-2"></div>

  <div
    class="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center justify-center"
  >
    <ClassCard v-for="days in routine" :routine="days" />
  </div>
</template>
