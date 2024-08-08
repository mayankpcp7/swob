<script setup>
import Icons from "./common/Icons.vue";
</script>
<template>
  <section class="py-12 md:py-16 lg:py-20">
    <div class="container px-4 md:px-3 mx-auto">
      <h1
        class="max-w-[768px] text-off-black text-center mx-auto font-semibold font-inter mb-4 md:mb-5 text-custom-xmd md:text-5xl leading-133 tracking-[-2%]"
      >
        Modernste Funktionen für fortschrittliches HR
      </h1>
      <p
        class="max-w-[775px] text-lg text-gray md:text-xl font-inter font-normal text-center mx-auto leading-150 mb-8 sm:mb-12 md:mb-14 lg:mb-16"
      >
        Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen,
        die dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu
        binden. Über 4.000 Start-ups vertrauen uns.
      </p>
      <div class="relative">
        <NuxtImg
          class="w-full hidden sm:block mx-auto"
          width="862"
          height="580"
          src="/assets/images/webp/modernste-data.png"
          alt="modern-data-image"
        />
        <Icons
          name="videoPlayIcon"
          class="absolute cursor-pointer top-[45%] left-[45%]"
        />
      </div>
      <NuxtImg
        class="sm:hidden block max-w-[284px] mx-auto"
        src="/assets/images/webp/iphone.png"
        alt="moder-data-image"
      />
      <div class="flex flex-row justify-center xl:justify-start flex-wrap">
        <div
          v-for="(card, index) in CARDS_DATA_LIST"
          :key="index"
          class="w-full md:w-1/2 xl:w-1/3 pt-8 xl:pt-0"
        >
          <div
            class="size-12 mx-auto rounded-full flex items-center justify-center bg-light-orange"
          >
            <Icons :name="card.iconName" />
          </div>
          <h3
            class="text-center text-off-black text-xl font-medium font-inter mt-5 mb-2"
          >
            {{ card.title }}
          </h3>
          <p
            class="text-base font-normal font-inter mb-5 max-w-[357px] leading-150 text-center mx-auto"
          >
            {{ card.description }}
          </p>
          <NuxtLink
            class="flex items-center justify-center text-yellow gap-2 cursor-pointer font-medium font-base font-inter leading-150"
            to="#"
          >
            {{ card.linkText }}
            <span>
              <Icons name="arrowicon" class="text-black" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
