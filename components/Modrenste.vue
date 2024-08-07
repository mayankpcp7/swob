<!-- YourComponent.vue -->
<template>
  <div class="max-w-[1344px] container px-4 mx-auto">
    <h2
      class="text-center text-off-black font-semibold pt-12 leading-122 text-custom-xmd lg:text-custom-lg pb-5"
    >
      Modernste Funktionen für fortschrittliches HR
    </h2>
    <p class="text-center text-xl leading-150 text-gray max-w-[768px] mx-auto">
      Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die
      dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über
      4.000 Start-ups vertrauen uns.
    </p>
    <div class="grid grid-col-4 mt-12 sm:mt-8">
      <div
        class="flex bg-yellow-gradient rounded-xl flex-col max-w-[752px] px-12 pt-12 pb-7"
      >
        <h5
          class="text-start leading-118 text-off-black tracking-tighter max-w-[630px] font-bold text-custom-md"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h5>
        <p
          class="pt-3 text-start text-custom-sm tracking-tight text-gray leading-170"
        >
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
        <div
          class="flex max-w-[500px] mx-auto w-full flex-col bg-white border border-border-white sm:p-5 p-3 rounded-custom-xl mt-7"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <Icons name="personendaten" />
              <p class="ps-2 font-bold text-base leading-3">Personendaten</p>
            </div>
            <Icons name="droparrow" />
          </div>
          <div class="flex pt-4">
            <div class="flex flex-col">
              <p class="text-xs text-offblack font-bold mb-1">Vorname</p>
              <BaseInput placeholder="" />
            </div>
            <div class="flex flex-col ms-6">
              <p class="text-xs text-offblack font-bold mb-1">Nachname</p>
              <BaseInput placeholder="" />
            </div>
          </div>
          <div class="flex flex-col w-full pt-4">
            <p class="text-xs text-offblack font-bold mb-1">Geburtsdatum</p>
            <div class="flex items-center w-full px-3 rounded-md border border-border-white">
              <Icons name="gabrudatsum" />
              <BaseInput className="!border-none min-w-full" placeholder="--/--/--" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icons from "./common/Icons.vue";
import BaseInput from "./common/Input.vue";
</script>

<style scoped></style>
