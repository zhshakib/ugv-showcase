<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="m-2">
    <div>
      <h2 class="text-2xl font-medium text-center mb-2">
        {{ project.title }}
      </h2>
      <p>{{ project.description }}</p>
    </div>
    <h3>Author: {{ project.author }}</h3>
    <div class="flex flex-wrap justify-center">
      <a v-for="tech in project.tech" :key="tech" :href="project.url" class="text-sm mx-2">{{ tech }}</a>
    </div>
    <!-- a link to the project -->
    <div class="flex justify-center">
      <a :href="project.url" class="text-sm mx-2">View Project</a>
    </div>
  </div>
</template>
