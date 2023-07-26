<template>
  <section class="w-full space-y-10 bg-red-100 flex flex-col justify-center items-center">
    <div class="grid grid-cols-4 gap-20">
      <p data-sale="sale" class="homeSale col-span-4 my-0">Shop!!</p>
      <div data-shoppingCard="shoppingCard" class="shoppingCardDiv">
        <label for="A" class="shoppingCardP">A</label>
        <input v-model="selectedItems" type="checkbox" data-A="A" id="A" value="A" class="accent-pink-500 w-5 h-5"> 
      </div>        

      <div data-shoppingCard="shoppingCard" class="shoppingCardDiv">
        <label for="B" class="shoppingCardP">B</label>
        <input v-model="selectedItems" type="checkbox" data-B="B" id="B" value="B" class="accent-pink-500 w-5 h-5"> 
      </div>        

      <div data-shoppingCard="shoppingCard" class="shoppingCardDiv">
        <label for="C" class="shoppingCardP">C</label>
        <input v-model="selectedItems" type="checkbox" data-C="C" id="C" value="C" class="accent-pink-500 w-5 h-5"> 
      </div>        

      <div data-shoppingCard="shoppingCard" class="shoppingCardDiv">
        <label for="D" class="shoppingCardP">D</label>
        <input v-model="selectedItems" type="checkbox" data-D="D" id="D" value="D" class="accent-pink-500 w-5 h-5"> 
      </div>
      
      <div class="col-span-4 flex justify-center">
        <div class="bg-gradient-to-r from-red-500 to-pink-500 text-center p-1 rounded-md w-[150px]">
          <button data-clearAll="clearAll" @click="selectedItems = []" class="clearAll">Clear ALL</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const selectedItems = ref([]);

onMounted(()=>{
  const items = JSON.parse(localStorage.getItem("ITEMS"));
  if(items) selectedItems.value = items;
})

window.addEventListener('beforeunload',()=>{
  localStorage.setItem('ITEMS', JSON.stringify(selectedItems.value));
  // localStorage.clear()
})

</script>