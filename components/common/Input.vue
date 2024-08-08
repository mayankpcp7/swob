<template>
  <div class="w-full">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="`border border-border-white rounded-md placeholder-text-custom-xs outline-none px-5 text-offblack leading-md w-full h-12 ${className}`"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
});

const emits = defineEmits(['update:modelValue']);
</script>

<style scoped>
</style>
