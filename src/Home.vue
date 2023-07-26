<template>
  <section class="homeSection">
    <div>
      <p data-sale="sale" class="homeSale">{{ saleMsg }}</p>
      <div data-shoppingCardDiv="shoppingCardDiv" class="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[0] && 'bg-red-800']">
          <p class="shoppingCardP">A</p>
          <a @click="onClickHandler(0)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[1] && 'bg-red-800']">
          <p class="shoppingCardP">B</p>
          <a @click="onClickHandler(1)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[2] && 'bg-red-800']">
          <p class="shoppingCardP">C</p>
          <a @click="onClickHandler(2)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[3] && 'bg-red-800']">
          <p class="shoppingCardP">D</p>
          <a @click="onClickHandler(3)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[4] && 'bg-red-800']">
          <p class="shoppingCardP">E</p>
          <a @click="onClickHandler(4)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

        <div data-shoppingCard="shoppingCard" class="shoppingCardDiv" :class="[isvisited[5] && 'bg-red-800']">
          <p class="shoppingCardP">F</p>
          <a @click="onClickHandler(5)" href="/shop" class="shoppingCardA">Shop</a> 
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
const saleTime = ref('12:00:00');
const isvisited = ref([0,0,0,0,0,0]);
const saleMsg = ref('');

watch(saleTime, (saleTime)=>{
  (saleTime === '00:00:01') 
  ? (saleMsg.value = `Sale is endded`)
  : (saleMsg.value = `Sale ends in ${saleTime}`)
}, {immediate: true})

function onClickHandler(linkVisited){
  isvisited.value[linkVisited] = 1; 
}

function setSaleTime() {
  const [hour, min, sec] = saleTime.value.split(':').map(e => +e);
  const newSec = (sec - 1 + 60) % 60;
  const newMin = sec === 0 ? (min - 1 + 60) % 60 : min;
  const newHour = sec === 0 && min === 0 ? (hour - 1 + 24) % 24 : hour;
  saleTime.value = `${newHour.toString().padStart(2, '0')}:${newMin.toString().padStart(2, '0')}:${newSec.toString().padStart(2, '0')}`;
}

onMounted(()=>{
  const get = localStorage.getItem("SALE_TIME");
  const visited = JSON.parse(localStorage.getItem("VISITED_LOG"));
  if(get) saleTime.value = get;
  if(visited) isvisited.value = visited;
  const intervalId = setInterval(()=>{ 
    setSaleTime();
    if(saleTime.value === '00:00:01') clearInterval(intervalId);
   } ,1000);
})

window.addEventListener('beforeunload',()=>{
  localStorage.setItem('SALE_TIME', saleTime.value)
  localStorage.setItem('VISITED_LOG', JSON.stringify(isvisited.value));
  // localStorage.clear()
})

</script>