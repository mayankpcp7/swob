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
    <div class="flex-grid grid-col-2 grid-col-1 md:grid-col-4 mt-12 sm:mt-8">
      <div
        class="flex bg-yellow-gradient rounded-xl flex-col max-w-[752px] p-4 lg:px-12 lg:pt-12 lg:pb-7"
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
          <div class="flex w-full pt-4">
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
            <div
              class="flex items-center w-full px-3 rounded-md border border-border-white"
            >
              <Icons name="gabrudatsum" />
              <BaseInput
                !type="tel"
                className="!border-none !w-full"
                placeholder="--/--/--"
              />
            </div>
          </div>
          <div class="flex w-full pt-4">
            <div class="flex w-full flex-col">
              <p class="text-xs text-offblack font-bold mb-1">Nationalität</p>
              <div class="relative flex w-full">
                <select
                  class="appearance-none w-full py-2.5 px-5 border border-border-white rounded-md text-off-black text-md focus:outline-none"
                >
                  <option>Schweiz</option>
                  <option>Germany</option>
                  <option>Austria</option>
                </select>
                <span
                  class="absolute sm:right-6 right-3 z-10 top-1/2 transform -translate-y-1/2 pointer-events-none"
                >
                  <Icons classname="cursor-pointer " name="selectarrow" />
                </span>
              </div>
            </div>
            <div class="flex w-full flex-col ms-[14px] md:ms-6">
              <p class="text-xs text-offblack font-bold mb-1">
                Aufenthaltsstatus
              </p>
              <div class="relative flex w-full">
                <select
                  class="appearance-none w-full px-5 py-2.5 border border-border-white rounded-md text-input-gray text-md focus:outline-none"
                >
                  <option>Aufenthaltsstatus...</option>
                  <option>Germany</option>
                  <option>Austria</option>
                </select>
                <span
                  class="absolute md:right-5 right-3 z-10 top-1/2 transform -translate-y-1/2 pointer-events-none"
                >
                  <Icons classname="cursor-pointer " name="selectarrow" />
                </span>
              </div>
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

<style>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 18px;
}
</style>
