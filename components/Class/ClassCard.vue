<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Making the props tech as an array!
const projectTech = props.project.tech.split(',');

</script>

<template>
  <div class="rounded-lg bg-base-300 w-full md:full md:mx-2 shadow-xl my-2 h-full flex flex-col">
    <div class="card-body flex-1">
      <h2 class="card-title mb-2 text-2xl text-center">{{ project.title }}</h2>
      <h3 class="text-lg flex items-center gap-2 mb-2">
        <Icon class="text-orange-400 text-2xl" name="mdi:account" /> {{ project.author }}
      </h3>
      <p class="text-sm mb-2 ">{{ project.description }}</p>
      <div class="flex flex-wrap gap-3 mt-2">
        <div v-for="tech in projectTech"
          class="badge bg-base-200 text-orange-400 hover:bg-orange-200 hover:text-black badge-outline px-4 py-2">
          {{ tech }}
        </div>
      </div>
    </div>
    <div class="card-footer bg-base-300 p-4 border-t border-base-200 mt-auto">
      <a :href=project.url target="_blank" class="btn btn-ghost text-lg w-full">
        View on
        <Icon class="text-orange-400 text-3xl" name="mdi:github" />
      </a>
    </div>
  </div>
</template>
