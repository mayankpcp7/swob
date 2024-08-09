<template>
    <div class="container xl:max-w-[1304px] px-4 mx-auto lg:pt-3">
<div class="pt-6 pb-9 flex items-center md:justify-between justify-center flex-wrap">
    <div class="flex flex-col justify-center items-center">
          <NuxtLink class="sm:hidden flex" to="/">
        <NuxtImg width={139} height={32} src="/assets/images/webp/footer-logo.webp" alt="footer-logo" class="w-100 max-w-[139px] mb-6" />
    </NuxtLink>
    <p class="text-base font-normal text-black leading-140 md:mb-0 mb-8">@ {{ new Date().getFullYear() }} SWOB. All rights reserved.</p>
    </div>
  
    <div class="flex lg:gap-12 md:gap-10 gap-8 justify-center items-center flex-wrap">
        <ul class="flex justify-center gap-8">
  <li v-for="link in FOOTER_LINKS" :key="link.url">
    <NuxtLink :to="link.url" class="font-normal text-base text-black uppercase cursor-pointer relative hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-black after:h-[2px] after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear">
      {{ link.link }}
    </NuxtLink>
  </li>
</ul>
        <div class="flex gap-4">
            <NuxtLink
      v-for="link in socialLinks"
      :key="link.socialicon"
      :to="link.url"
      target="_blank"
    >
      <Icons
        class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer"
        :name="link.socialicon"
      />
    </NuxtLink>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import Icons from './common/Icons.vue';

</script>