<script setup lang="ts">

const emit = defineEmits(['searchQuery']);

const handleSearch = (e: any) => {
    emit('searchQuery', e.target.value);
}

</script>


<template>
    <div class="customizeNav navbar bg-base-100">
        <a class="btn btn-ghost text-2xl flex items-center justify-center">
            <span class="text-orange-500">UGV</span> ShowCase
        </a>
        <input type="text" placeholder="Search for tags!" class="input input-bordered w-24 md:w-1/2 md:mr-5"
            @input="handleSearch" />
        <a class="btn hover:bg-orange-800 btn-ghost text-lg">
            About Us
        </a>
    </div>
</template>

<style>
.customizeNav {
    width: 80%;
    margin: 0px auto;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>