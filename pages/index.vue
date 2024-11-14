<script setup lang="ts">
import { fetchProjects } from "~/store/projects";

const projects: any = ref([]);

onMounted(async () => {
  projects.value = await fetchProjects();
  projects.value = projects.value?.projects
});

</script>

<template>
  <!-- Render ClassCard 5 Times! -->
  <div>
    <h2 class="text-2xl font-medium text-center mb-2">
      <!-- {{ today.toUpperCase() }} -->
    </h2>
  </div>
  <div class="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center justify-center">
    <ClassCard v-for="project in projects" :project="project" />
  </div>
</template>
