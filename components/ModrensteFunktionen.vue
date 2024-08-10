<script setup>
import Icons from "./common/Icons.vue";
import Progressbar from "@/components/Progressbar.vue";
</script>

<template>
  <div class="container pb-12 max-w-[1344px] px-4 mx-auto">
    <h2
      class="text-off-black font-semibold leading-[1.22] pb-4 sm:pb-5 pt-12 text-custom-xmd lg:text-custom-lg sm:text-center">
      Modernste Funktionen für fortschrittliches HR
    </h2>
    <p class="text-gray text-md leading-[1.5] max-w-[768px] mx-auto sm:text-xl sm:text-center">
      Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die
      dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über
      4.000 Start-ups vertrauen uns.
    </p>
    <div class="flex flex-col gap-4 w-full md:flex-row justify-center xl:justify-between mt-12 md:mt-8 lg:gap-8">
      <div class="flex flex-col w-full p-4 bg-yellow-gradient rounded-xl lg:px-12 lg:pt-12 lg:pb-7 max-w-[752px]">
        <h5 class="text-start text-off-black font-bold tracking-tighter leading-[1.18] max-w-[630px] text-custom-md">
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h5>
        <p class="pt-3 text-start text-gray tracking-tight leading-[1.7] text-custom-sm">
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
        <PersonendatenForm />
      </div>
      <div class="flex flex-col p-4 bg-yellow-gradient rounded-xl md:max-w-[528px] xl:px-12 lg:pt-12 lg:pb-7">
        <div class="flex flex-col mx-auto bg-white border border-border-white rounded-lg">
          <div class="flex items-center p-3">
            <Icons name="sixdots" />
            <input type="checkbox" class="ms-2 w-5 h-5 border border-border-white rounded-md" />
            <p class="ps-2 me-4 text-sm font-medium text-black">
              API-Endpunkte entwickeln
            </p>
            <Icons name="threedots" class="ms-4" />
          </div>
          <p class="pt-3 mx-3 text-xs text-off-black leading-[1.21] max-w-[262px] sm:max-w-[275px] text-start">
            Implementieren Sie RESTful-API-Endpunkte zur Unterstützung der
            Client-Server-Kommunikation für eine neue Funktion.
          </p>
          <div class="flex items-center justify-between px-3 py-2 mt-3 border-t border-border-white">
            <div class="flex items-center">
              <Icons name="redflag" />
              <Icons name="clock" class="ms-3" />
              <p class="ms-1.5 text-xs text-input-gray">Mar 15</p>
            </div>
            <NuxtImg width="45" height="30" class="w-full max-w-11" src="/assets/images/svg/avatars.svg" />
          </div>
        </div>
        <h3 class="mt-4 sm:mt-16 font-bold leading-[1.18] text-off-black text-start text-custom-md">
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h3>
        <p class="pt-3 leading-[1.7] tracking-tight text-custom-sm">
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4 mt-4 md:flex-row justify-center xl:justify-between lg:mt-8 lg:gap-8">
      <div class="flex flex-col p-4 bg-yellow-gradient rounded-xl md:max-w-[528px] lg:px-12 lg:pt-12 pb-7 lg:pb-10">
        <Progressbar />
        <h3 class="mt-8 text-off-black font-bold leading-[1.18] text-start text-custom-md">
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h3>
        <p class="pt-3 leading-[1.7] tracking-tight text-custom-sm">
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
      </div>
      <div class="flex flex-col p-4 bg-yellow-gradient rounded-xl sm:max-w-[752px] lg:px-12 lg:pt-12 lg:pb-7">
        <h5 class="text-start text-off-black font-bold tracking-tighter leading-[1.18] max-w-[630px] text-custom-md">
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h5>
        <p class="pt-3 text-start text-gray tracking-tight leading-[1.7] text-custom-sm">
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
        <div
          class="flex flex-col w-full max-w-[500px] md:max-w-full mx-auto rounded-lg sm:rounded-custom-xl bg-white lg:px-6 sm:px-4 px-2 py-1.5 sm:py-3 lg:py-4 mt-4 md:mt-11">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <p class="text-yellow font-bold sm:text-base text-[5.79px]">
                Teammitglied
              </p>
              <p class="text-start text-[8.68px] sm:text-custom-xs md:text-lg xl:text-2xl font-bold">
                Odila Kühn
              </p>
            </div>
            <div class="flex items-center gap-1 sm:gap-4">
              <div
                class="border lg:py-3 lg:px-5 py-1 rounded-custom-sm sm:py-1 px-2 flex items-center border-border-white md:rounded-lg">
                <p class="text-off-black text-[5.06px] sm:text-custom-xs font-bold">
                  Bearbeiten
                </p>
                <Icons class="ms-[2.5px] sm:ms-1 md:ms-2.5" name="note" />
              </div>
              <div class="border border-border-white lg:p-3.5 rounded-custom-sm p-1 md:p-1 md:rounded-lg">
                <Icons name="profile" />
              </div>
            </div>
          </div>
          <div class="flex items-center mt-1.5 sm:mt-4 md:gap-8 gap-3">
            <NuxtImg width="180" height="180" class="w-full max-w-16 md:max-w-[120px] xl:max-w-[180px]"
              src="/assets/images/webp/odila-girl.webp" />
            <div class="flex md:flex-row justify-between w-full">
              <div class="flex flex-col">
                <p class="text-start font-bold text-off-black text-custom-4xs sm:text-xs">
                  E-Mail-Adresse
                </p>
                <p class="md:mt-2.5 mt-1 text-off-black text-[6.51px] sm:text-sm lg:text-lg">
                  odila@swob.com
                </p>
                <p class="text-start font-bold pt-1 sm:pt-4 text-off-black text-custom-4xs sm:text-xs">
                  Rolle
                </p>
                <p class="md:mt-2.5 mt-1 text-off-black text-[6.51px] sm:text-sm lg:text-lg">
                  Produkt Designer
                </p>
              </div>
              <div class="flex flex-col md:hidden">
                <p class="text-start font-bold text-off-black text-custom-4xs sm:text-xs">
                  Telefonnummer
                </p>
                <p class="md:mt-2.5 mt-1 text-off-black text-[6.51px] sm:text-sm lg:text-lg">
                  999999999
                </p>
                <p class="text-start font-bold pt-1 sm:pt-4 text-off-black text-custom-4xs sm:text-xs">
                  Abteilung
                </p>
                <p class="md:mt-2.5 mt-1 text-off-black text-[6.51px] sm:text-sm lg:text-lg">
                  Design, Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
