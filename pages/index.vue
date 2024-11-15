<script setup lang="ts">
import { fetchProjects } from "~/store/projects";
const projects: any = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  projects.value = await fetchProjects();
  projects.value = projects.value?.projects
});

function handleSearchQuery(newQuery: string) {
  searchQuery.value = newQuery;
}

watch(searchQuery, async (newQuery: string) => {
  const filteredProjects = await fetchProjects();
  filteredProjects.value = filteredProjects?.projects.filter((project: any) => {
    return project.tech.some((tech: string) => tech.toLowerCase().includes(newQuery.toLowerCase()));
  });
  projects.value = filteredProjects.value;
});

</script>

<template>
  <header class="bg-base-100 mb-5">
    <Navbar @searchQuery="handleSearchQuery" />
  </header>
  <div class="container mx-auto">
    <div>
      <h2 class="text-2xl font-medium text-center mb-2">
        Projects
        <hr class="border-2 border-orange-500 w-1/3 mx-auto mt-2">
      </h2>
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center justify-center">
      <ClassCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>
