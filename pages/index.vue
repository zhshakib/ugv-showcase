<script setup lang="ts">
import { fetchProjects } from "~/store/projects";
const projects: any = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  projects.value = await fetchProjects();
});

function handleSearchQuery(newQuery: string) {
  searchQuery.value = newQuery;
}

watch(searchQuery, async (newQuery: string) => {
  if (newQuery.length > 2) {
    const filteredProjects = projects.value.filter((project: any) => {
      return project.title.toLowerCase().includes(newQuery.toLowerCase());
    })
    projects.value = filteredProjects
  } else
    projects.value = await fetchProjects();
});

</script>

<template>

  <Head>
    <Title>Home | UGV ShowCase</Title>
  </Head>
  <header class="bg-base-100 mb-5">
    <Navbar @searchQuery="handleSearchQuery" />
  </header>
  <div class="w-full mx-auto">
    <div>
      <h2 class="text-2xl font-medium text-center mb-2">
        Projects
        <hr class="border-2 border-orange-500 w-1/3 mx-auto mt-2">
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5">
      <ClassCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>
