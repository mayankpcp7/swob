 <script setup>
import Icons from "./common/Icons.vue";
import { ref } from 'vue';

const openAccordion = ref(null);
const toggleAccordion = (index) => {
  openAccordion.value = openAccordion.value === index ? null : index;
};
</script>

 <template>
  <div class="bg-light-gray pb-20 xl:pt-[197px] md:pt-[150px] sm:pt-[110px] pt-12 relative">
    <NuxtImg src="/assets/images/webp/faq-layer.webp" alt="faq-layer" class="absolute w-full top-0 sm:block hidden"/>
    <div class="container xl:max-w-[1304px] mx-auto px-3 relative z-10">
      <h2
        class="text-center text-black md:font-extrabold font-semibold lg:text-custom-3xl md:text-5xl sm:text-4xl text-custom-xmd md:leading-110 leading-127 lg:mb-20 md:mb-16 sm:mb-14 mb-12"
      >
        Häufig gestellte Fragen (FAQ)
      </h2>
      <div class="w-full flex flex-col gap-6" data-aos="zoom-in-up">
        <div
          v-for="(item, index) in ACCORDION_DATA"
          :key="index"
          class="md:pt-7 pb-5 md:px-8 px-8 pt-8 rounded-[10px] bg-white duration-300 shadow-accordain-shadow"
        >
          <div
            class="flex justify-between items-center accordion-title cursor-pointer pb-3"
            @click="toggleAccordion(index)"
          >
            <div
              class="w-full text-left flex items-center justify-between font-medium md:text-xl text-lg leading-110 text-black max-[390px]:max-w-[246px]"
            >
              {{ item.title }}
            </div>
            <div
              :class="{
                'rotate-[180deg]': openAccordion === index
              }"
              class="transition-all duration-300 ease-linear"
            >
              <Icons name="accordianArrow"/>
            </div>
          </div>
          <div
            :class="{
              'accordion-content': true,
              'open max-h-[500px] opacity-100 transition-[max-height,opacity] duration-500 ease-custom delay-100': openAccordion === index
            }"
            class="text-base max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-custom delay-100 leading-normal text-black font-normal lg:max-w-[1136px]w-full"
          >
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>