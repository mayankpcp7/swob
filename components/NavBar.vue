<script setup>
import { ref, watch } from "vue";
import Icons from "./common/Icons.vue";
import { NAV_LINKS_LIST } from "/utils/helper";
import { useRoute } from "vue-router";
const isOpen = ref(false);
const handleOverflow = () => {
  if (window.innerWidth < 768) {
    document.body.style.overflow = isOpen.value ? "hidden" : "";
  }
};
watch(isOpen, () => {
  handleOverflow();
});
const route = useRoute();
const isActiveRoute = (url) => {
  return route.path === url;
};
</script>
<template>
  <div class="max-w-[1240px] bg-white mx-auto">
    <nav class="border-b border-black border-opacity-5">
      <div
        class="container mx-auto px-4 md:px-3 flex items-center justify-between py-4 md:py-6 custom-container"
      >
        <div class="flex gap-12">
          <NuxtLink @click="isOpen = false" to="/">
            <NuxtImg
              class="w-[116px] sm:w-36 lg:w-[170px] h-[22px] sm:h-7 lg:h-8 relative z-50"
              src="/assets/images/png/logo.png"
              alt="logo"
            />
          </NuxtLink>
          <ul
            :class="['flex', isOpen ? 'left-0' : '-left-full', 'flex-col gap-12 justify-center font-bold md:flex-row items-center md:gap-6 lg:gap-10 max-md:fixed max-md:bg-white max-md:w-full max-md:h-full z-40 top-0 max-md:pt-16 duration-300 max-md:px-6']">
            <li v-for="link in NAV_LINKS_LIST" :key="link.url"
              class="flex flex-col items-center justify-center max-md:w-full cursor-pointer relative after:absolute hover:after:w-full after:h-[1.5px] after:bg-black hover:after:border-[1.5px] hover:after:border-black after:w-0 after:duration-300 hover:after:-bottom-1 after:bottom-0">
              <NuxtLink @click="isOpen = false" :to="link.url" :class="{
                'text-base text-black max-md:pb-4 max-md:pt-6 cursor-pointer': isActiveRoute(link.url)
              }">
                {{ link.link }}
              </NuxtLink>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <button
          class="font-bold hidden sm:block border md:border-2 leading-121 py-2.5 text-xs md:text-base md:py-[14.5px] px-5 md:px-6 rounded-[40px]"
        >
          Anmelden
        </button>
        <div class="flex items-center md:hidden gap-4">
          <button
            class="font-bold block sm:hidden border md:border-2 leading-121 py-2.5 text-xs md:text-base md:py-[14.5px] px-5 md:px-6 rounded-[40px]"
          >
            Anmelden
          </button>
=======
        <button class="font-bold hidden md:block border hover:bg-black hover:text-white duration-300 hover:border-black md:border-2 leading-121 py-2.5 text-xs md:text-base md:py-[14.5px] px-5 md:px-6 rounded-[40px]">Anmelden </button>
        <div class="flex items-center md:hidden gap-4">
          <button class="font-bold block md:hidden border hover:bg-black hover:text-white duration-300 hover:border-black md:border-2 leading-121 py-2.5 text-xs md:text-base md:py-[14.5px] px-5 md:px-6 rounded-[40px]">Anmelden </button>
>>>>>>> 814dae4b33025ffd5894a2135e774766b3287617

          <button @click="isOpen = !isOpen" class="relative z-50 text-black">
            <Icons
              :name="isOpen ? 'hamburgerCross' : 'hamburgerMenu'"
              class="block size-6 text-black"
            />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
