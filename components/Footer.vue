<template>
    <div class="container xl:max-w-[1304px] px-4 mx-auto">
<div class="py-6 flex items-center md:justify-between justify-center flex-wrap">
    <NuxtLink class="sm:hidden flex" to="/">
        <NuxtImg width={139} height={32} src="/assets/images/png/footer-logo.png" alt="footer-logo" class="w-100 max-w-[139px] mb-6" />
    </NuxtLink>
    <p class="text-base font-normal text-black leading-140 md:mb-0 mb-8">@ {{ new Date().getFullYear() }} SWOB. All rights reserved.</p>
    <div class="flex md:gap-12 gap-8 justify-center items-center flex-wrap">
        <ul class="flex justify-center gap-8">
            <li>
            <NuxtLink class="font-normal text-base text-black uppercase cursor-pointer">AGB</NuxtLink>
                 </li>
            <li>
            <NuxtLink class="font-normal text-base text-black uppercase cursor-pointer">DSGVO</NuxtLink>
                 </li>
            <li>
            <NuxtLink class="font-normal text-base text-black cursor-pointer">kontakt</NuxtLink>
                 </li>
        </ul>
        <div class="flex gap-4">
            <NuxtLink to="https://www.youtube.com/" target="_blank">
            <Icons class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer" name="youtubeSocialIcon"/>
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/" target="_blank">
             <Icons class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer"  name="facebookSocialIcon"/>
        </NuxtLink>
           <NuxtLink to="https://x.com/" target="_blank">
            <Icons class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer" name="twitterSocialIcon"/>
        </NuxtLink>
          <NuxtLink to="https://www.instagram.com/" target="_blank">
              <Icons class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer" name="instagramSocialIcon"/>
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/" target="_blank">
                <Icons class="hover:-translate-y-1 transition-all ease-linear duration-300 cursor-pointer" name="linkdinSocialIcon"/>
          </NuxtLink>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import Icons from "./common/Icons.Vue";
</script>