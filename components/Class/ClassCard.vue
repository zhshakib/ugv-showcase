<script setup lang="ts">
defineProps({
  routine: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-lg bg-base-300 w-full shadow-xl my-2">
    <h2
      class="text-3xl font-bold text-center py-2 text-orange-500 flex items-center justify-center"
    >
      <Icon class="mr-2" name="mdi:book-open-page-variant"></Icon>
      {{ routine.name }}
    </h2>
    <div class="flex items-center justify-between">
      <div class="w-3/4 p-2 flex flex-col">
        <p class="py-1 text-lg flex items-center">
          <Icon class="mr-2" name="mdi:clock"></Icon> {{ routine.stat_time }} -
          {{ routine.end_time }}
        </p>
        <p class="py-1 text-xl font-bold flex items-center text-yellow-500">
          <Icon class="mr-2" name="mdi:account"> </Icon> {{ routine.teacher }}
        </p>
        <div class="py-1 flex items-center justify-start text-lg">
          <p
            class="font-bold flex items-center justify-center mr-2 text-red-500"
          >
            <Icon class="mr-2" name="mdi:home"></Icon> {{ routine.classroom }}
          </p>
          <p class="flex items-center justify-center mr-2">
            <Icon class="mr-2" name="mdi:book"></Icon> {{ routine.course_Code }}
          </p>
        </div>
      </div>
      <NuxtImg
        src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
        alt="alt text"
        class="w-24 h-24 rounded-full object-cover mr-5"
      />
    </div>
  </div>
</template>
