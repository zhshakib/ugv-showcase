<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="px-10 py-5 bg-black text-white border-t-2 w-full">
    <p class="text-center">
      Made with ❤ by
      <a
        target="_blank"
        href="https://github.com/zhshakib"
        class="text-red-500 font-bold"
        ><span class="text-yellow-500">zh</span>shakib</a
      >
      &copy; {{ year }}
    </p>
  </footer>
</template>
