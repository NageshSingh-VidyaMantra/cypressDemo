<template>
  <section class="h-[100vh]">
    <div class="bg-[#333] text-white shadow-md py-5 flex justify-between h-[10vh] items-center">  
      <a data-logo="logo" class="pl-10 text-4xl hover:text-red-300" href="/">M/W</a>
      <h1 data-realTime="realTime" class="pl-10 text-4xl hover:text-red-300 font-thin">{{ time }}</h1>
      <div class=" space-x-10 pr-10">
        <a data-newsletter="newsletter" class="hover:text-red-300 text-xl border-b border-transparent pb-2 hover:border-red-300 transition-all duration-500" href="/newsletter">Newsletter</a>
      </div>
    </div>
    <div class="h-[90vh] flex">
      <component :is="currentView" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import Shop from './Shop.vue'
import Payment from './Payment.vue'
import Newsletter from './Newsletter.vue'

const routes = {
  '/': Home,
  '/shop': Shop,
  '/payment': Payment,
  '/newsletter': Newsletter
}

const currentPath = ref(window.location.hash)

window.addEventListener('load', () => {
  currentPath.value = window.location.pathname;
})

const currentView = computed(() => {
  return routes[currentPath.value]
})

const time = ref(new Date().toLocaleTimeString());
setInterval(()=>{ 
  time.value = new Date().toLocaleTimeString();
}, 1000);
</script>