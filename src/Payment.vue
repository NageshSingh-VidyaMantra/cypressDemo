<template>
  <section class="w-full space-y-10 bg-red-100 flex flex-col justify-center items-center">
    <p class="text-gray-600 text-8xl">{{ time }}</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
const time = ref(new Date().toLocaleTimeString());
setInterval(()=> { time.value=new Date().toLocaleTimeString(); }, 1000)
</script>