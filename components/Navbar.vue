<template>
    <div class="customizeNav navbar bg-base-100">
        <a class="btn btn-ghost text-2xl">
            <span class="text-orange-500">UGV</span> ShowCase
        </a>
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto md:mr-5" />
        <a class="btn btn-ghost">
            <Icon class="mr-2" name="mdi:account"></Icon>
            <span class="hidden md:inline">About Us</span>
        </a>

    </div>
</template>

<style>
.customizeNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>