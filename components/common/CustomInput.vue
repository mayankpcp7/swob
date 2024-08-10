<template>
    <div>
      <input :type="type" :placeholder="placeholder" v-model="inputValue" class="input-class !py-3.5 px-5 text-lg border w-full border-border-white rounded-lg leading-110" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    placeholder: String,
    type: String,
    className: String
  })
  
  const inputValue = ref('')
  </script>
  