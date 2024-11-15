<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-lg bg-base-300 w-full md:full md:mx-2 shadow-xl my-2">
    <div class="card-body items-center text-center">
      <h2 class="card-title mb-2 text-justify">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="badge badge-primary badge-outline">Tag 1</div>
      <div class="badge badge-secondary badge-outline">Tag 2</div>
    </div>
  </div>
</template>
