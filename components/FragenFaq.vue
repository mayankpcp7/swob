<script setup>
import Icons from "./common/Icons.vue";
import { ref, nextTick } from 'vue';

const openAccordion = ref(null);

const toggleAccordion = async (index) => {
  if (openAccordion.value === index) {
    const content = document.querySelector(`#accordion-content-${index}`);
    content.style.maxHeight = '0';
    openAccordion.value = null;
  } else {
    
    if (openAccordion.value !== null) {
      const previousContent = document.querySelector(`#accordion-content-${openAccordion.value}`);
      previousContent.style.maxHeight = '0';
    }
    
    openAccordion.value = index;
    await nextTick();
    const newContent = document.querySelector(`#accordion-content-${index}`);
    newContent.style.maxHeight = `${newContent.scrollHeight}px`;
  }
};
</script>

<template>
  <div class="bg-light-gray lg:pb-20 md:pb-16 pb-12 xl:pt-[191px] md:pt-[150px] sm:pt-[110px] pt-12 relative">
    <NuxtImg src="/assets/images/webp/faq-layer.webp" alt="faq-layer" class="absolute w-full top-0 sm:block hidden"/>
    <div class="container xl:max-w-[1304px] mx-auto px-3 relative z-10">
      <h2
        class="text-center text-black md:font-extrabold font-semibold lg:text-custom-3xl md:text-5xl sm:text-4xl text-custom-xmd md:leading-110 leading-127 lg:mb-20 md:mb-16 sm:mb-14 mb-12"
      >
        Häufig gestellte Fragen (FAQ)
      </h2>
      <div class="w-full flex flex-col gap-6" data-aos="zoom-in-up">
        <div @click="toggleAccordion(index)"
          v-for="(item, index) in ACCORDION_DATA"
          :key="index"
          class="md:px-8 px-5 md:py-[30px] py-8 cursor-pointer rounded-[10px] bg-white shadow-accordain-shadow overflow-hidden"
        >
          <div
            class="flex justify-between items-center"
          >
            <div
              class="w-full text-left flex items-center justify-between font-medium md:text-xl text-lg leading-110 text-black max-[390px]:max-w-[246px]"
            >
              {{ item.title }}
            </div>
            <div
              :class="{
                'rotate-180': openAccordion === index
              }"
              class="transition-transform duration-300 ease-linear"
            >
              <Icons name="accordianArrow"/>
            </div>
          </div>
          <div
            :id="'accordion-content-' + index"
            :class="{
              'opacity-100': openAccordion === index,
              'opacity-0': openAccordion !== index
            }"
            class="text-base overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out delay-100 leading-normal max-h-0 text-black font-normal lg:max-w-[1170px] w-full"
          >
            <div class="pt-3">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
