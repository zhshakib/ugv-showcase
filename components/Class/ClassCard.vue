<script setup lang="ts">
    defineProps({
        routine: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="flex items-center justify-between bg-indigo-900 rounded-lg my-2">
        <div class="w-3/4 p-2">
            <h2 class="text-2xl font-medium text-center mb-2">
                <Icon name="mdi:book-open-page-variant"></Icon>
                {{ routine.name }}
            </h2>
            <p class="text-lg flex items-center justify-center ">
                <Icon class="mr-2" name="mdi:clock"></Icon> {{ routine.stat_time }} - {{ routine.end_time }}
            </p>
            <p class="text-xl flex items-center justify-center">
                <Icon class="mr-2" name="mdi:account"> </Icon> {{ routine.teacher }}
            </p>
            <div class="flex items-center justify-around text-lg">
                <p class="flex items-center justify-center">
                    <Icon class="mr-2" name="mdi:home"></Icon> {{routine.classroom}}
                </p>
                <p class="flex items-center justify-center">
                    <Icon class="mr-2" name="mdi:book"></Icon> {{ routine.course_Code }}
                </p>
            </div>
        </div>
        <NuxtImg src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
            alt="alt text" class="w-24 h-24 rounded-full object-cover mr-5" />
    </div>
</template>