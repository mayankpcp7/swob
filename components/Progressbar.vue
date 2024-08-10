<template>
  <div class="flex p-4 mx-auto mt-4 sm:mt-7 bg-white rounded-full max-w-[252px]">
    <div class="relative w-[220px] h-[220px] mx-auto">
      <svg class="w-full h-full transform -rotate-90">
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #ff8a00; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #ffd800; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <circle cx="110" cy="110" r="90" stroke-width="18" stroke="rgb(217 217 217)" fill="transparent" />
        <circle
          cx="110"
          cy="110"
          r="90"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          stroke="url(#gradientStroke)"
          stroke-width="18"
          stroke-linecap="round"
          fill="transparent"
        />
      </svg>

      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <p class="text-[22px] font-bold leading-[1.27] text-off-black">
          {{ progressText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const size = ref(220);
const strokeWidth = ref(18);
const totalTime = ref(9000);
const initialProgress = ref(60); 
const timeLeft = ref(totalTime.value * (initialProgress.value / 100));

const progress = computed(() => (timeLeft.value / totalTime.value) * 100);

const radius = computed(() => (size.value - strokeWidth.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const offset = computed(() => circumference.value - (progress.value / 100) * circumference.value);

const progressText = computed(() => {
  const hours = Math.floor(timeLeft.value / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft.value % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
});

let timerInterval = null;

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>
