<template>
  <section class="w-full space-y-10 bg-red-100 flex flex-col justify-center items-center"
  :class="[isSubmit && 'bg-green-100']"
  >
    <h1 data-greet="greet" class="text-3xl"> Good Morning {{ greetingMsg }}</h1>
    <form data-form="form" @submit.prevent="submitHandler" class=" shadow-lg bg-red-50 p-5 rounded-lg space-y-5 w-[450px]"
    :class="[isSubmit && 'bg-green-50']"
    >
      
      <div class="flex justify-between p-3">
        <label>User Name</label>
        <input data-name="name" v-model="userName" class="border border-transparent focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200 rounded-sm" :class="[isSubmit && 'focus:border-green-300 focus:ring-1 focus:ring-green-300']"/>
      </div>

      <div class="flex justify-between p-3">
        <label>User Email</label>
        <input data-email="email" v-model="userEmail" class="border border-transparent focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200 rounded-sm" type="email" :class="[isSubmit && 'focus:border-green-300 focus:ring-1 focus:ring-green-300']"/>
      </div>

      <div class="space-y-3">
          <p class="text-center">How are you ?</p>
          <ul class="flex justify-evenly">
            <li :class="[isSubmit && 'bg-green-100']" class="bg-red-100 p-2 px-4 rounded-md space-x-2 spa"><input v-model="picked" value="Awsome" type="radio"/> <span>Awsome</span> </li>
            <li :class="[isSubmit && 'bg-green-100']" class="bg-red-100 p-2 px-4 rounded-md space-x-2 spa"><input v-model="picked" value="Great" type="radio"/> <span>Great</span> </li>
            <li :class="[isSubmit && 'bg-green-100']" class="bg-red-100 p-2 px-4 rounded-md space-x-2 spa"><input v-model="picked" value="Fantastic" type="radio"/> <span>Fantastic</span> </li>
          </ul>          
      </div>

      <div class="flex justify-evenly p-5">
        <button 
        data-submit="submit"
        type="submit" 
        class="py-2 px-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ring-2 ring-green-300 hover:bg-green-50 rounded-md"
        :class="[isSubmit && 'bg-green-50']"
        >
          {{ isSubmit ? "Submitted" : "Submit" }}
        </button>

        <button
        data-clear="clear"
        type="button" 
        @click="clearHandler" 
        class="py-2 px-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ring-2 ring-red-200 hover:bg-red-100 rounded-md">
          Clear All
        </button>
      </div>
    </form>

    <p data-success="success" v-if="isSubmit" class="text-green-800">**{{ userEmail }} successfully subscribed the newsletter.</p>
    <p data-error="error" v-if="showErrorMsg" class="text-red-800">**All fields are required.</p>

    <p data-x='x' class="text-2xl" v-show="timeout">x_x</p>
    <p data-o='o' class="text-2xl" v-if="timeout">o_o</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
const greetingMsg = ref('');
const userName = ref('');
const userEmail = ref('');
const picked = ref('Awsome');
const isSubmit = ref(false);
const showErrorMsg = ref(false);

const timeout = ref(false)

watch(isSubmit,()=>console.log('chansasa'))

watch([userName, userEmail], ()=>{
  isSubmit.value = false;
  greetingMsg.value = userName.value;
  showErrorMsg.value = false;
})

function clearHandler(){
  console.log('clear');
  userEmail.value = '';
  userName.value = '';
  picked.value = 'Awsome';
  showErrorMsg.value = false;
}

function submitHandler(){
  console.log('submit');
  (userName.value && userEmail.value) && (isSubmit.value = true);
  (!userName.value || !userEmail.value) && (showErrorMsg.value = true);
}

setTimeout(()=>{ timeout.value = false }, 1000)
</script>