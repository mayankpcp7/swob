<script setup>
import { ref, watch } from 'vue';
import Icons from "../common/Icons.vue";
import { NAV_LINKS_LIST } from "/utils/helper";
import { useRoute } from 'vue-router';
const isOpen = ref(false);
const handleOverflow = () => {
  if (window.innerWidth < 768) {
    document.body.style.overflow = isOpen.value ? 'hidden' : '';
  }
};
watch(isOpen, () => {
  handleOverflow();
});
const route = useRoute();
const isActiveRoute = (url) => {
  return route.path === url;
}
</script>
<template>
  <div class="max-w-[1140px] bg-yellow mx-auto">
    <nav class="border-b border-black border-opacity-5">
      <div class="container flex items-center justify-between py-[18px] md:py-4 custom-container">
        <NuxtLink @click="isOpen = false" to='/'>
          <NuxtImg class="w-[116px] sm:w-36 lg:w-[170px] h-[22px] sm:h-7 lg:h-8 relative z-50"
            src="/assets/images/png/logo.png" alt="logo" />
        </NuxtLink>
        <ul
          :class="['flex', isOpen ? 'left-0' : '-left-full', 'flex-col md:flex-row items-center md:gap-6 lg:gap-10 max-md:fixed max-md:bg-white max-md:w-full max-md:h-full z-40 top-0 max-md:pt-16 common-transition max-md:px-6']">
          <li v-for="link in NAV_LINKS_LIST" :key="link.url"
            class="flex flex-col items-center justify-center max-md:w-full">
            <NuxtLink @click="isOpen = false" :to="link.url" :class="{
              'text-base text-black max-md:pb-4 max-md:pt-6 nav-link-hover hover:text-transparent hover:bg-clip-text hover:bg-white-blue': true,
              'text-transparent bg-clip-text bg-white-blue blue-stroke': isActiveRoute(link.url)
            }">
              {{ link.link }}
            </NuxtLink>
          </li>
          <button @click="isOpen = false" class="mt-12 text-5xl md:hidden">Sign Up</button>
        </ul>
        <button class="max-md:hidden custom-3xl">Sign Up</button>
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen" class="relative z-50 text-black">
            <Icons :name="isOpen ? 'hamburgerCross' : 'hamburgerMenu'" class="block size-6" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
