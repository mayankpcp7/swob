<template>
  <div>
    <input
      :class="`border border-border-white rounded-md outline-none px-5 text-offblack leading-md w-full h-12 ${className}`"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
</style>
