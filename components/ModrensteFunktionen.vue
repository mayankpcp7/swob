<script setup>
import Icons from "./common/Icons.vue";
import BaseInput from "./common/Input.vue";
import { computed, ref, onMounted, onUnmounted } from "vue";

const size = ref(220); // Diameter of the circle
const strokeWidth = ref(18); // Thickness of the circle
const totalTime = ref(5940); // Total time in seconds for 1:39:00
const initialProgress = ref(60); // Starting progress at 60%
const timeLeft = ref(totalTime.value * (initialProgress.value / 100)); // Adjust the starting time left based on initial progress

const progress = computed(() => (timeLeft.value / totalTime.value) * 100);

const radius = computed(() => (size.value - strokeWidth.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const offset = computed(
  () => circumference.value - (progress.value / 100) * circumference.value
);

const progressText = computed(() => {
  const hours = Math.floor(timeLeft.value / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft.value % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft.value % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
});

let timerInterval = null;

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>

<template>
  <div class="container max-w-[1344px] px-4 mx-auto">
    <h2
      class="text-off-black font-semibold leading-[1.22] pb-5 pt-12 text-custom-xmd lg:text-custom-lg sm:text-center"
    >
      Modernste Funktionen für fortschrittliches HR
    </h2>
    <p
      class="text-gray text-md leading-[1.5] max-w-[768px] mx-auto sm:text-xl sm:text-center"
    >
      Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die
      dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über
      4.000 Start-ups vertrauen uns.
    </p>
    <div class="flex flex-col gap-4 w-full mt-12 md:flex-row sm:mt-8 lg:gap-8">
      <div
        class="flex xl:w-7/12 md:w-6/12 flex-col w-full p-4 bg-yellow-gradient rounded-xl lg:px-12 lg:pt-12 lg:pb-7 max-w-[752px]"
      >
        <h5
          class="text-start text-off-black font-bold tracking-tighter leading-[1.18] max-w-[630px] text-custom-md"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h5>
        <p
          class="pt-3 text-start text-gray tracking-tight leading-[1.7] text-custom-sm"
        >
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
        <div
          class="flex flex-col w-full p-3 mt-7 mx-auto bg-white border border-border-white sm:p-5 max-w-[500px] rounded-custom-xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <Icons name="personendaten" />
              <p class="ps-2 text-base font-bold leading-3">Personendaten</p>
            </div>
            <Icons name="droparrow" />
          </div>
          <div class="flex w-full pt-4">
            <div class="flex flex-col">
              <p class="mb-1 text-xs font-bold text-off-black">Vorname</p>
              <BaseInput placeholder="" />
            </div>
            <div class="flex flex-col ms-6">
              <p class="mb-1 text-xs font-bold text-off-black">Nachname</p>
              <BaseInput placeholder="" />
            </div>
          </div>
          <div class="flex flex-col w-full pt-4">
            <p class="mb-1 text-xs font-bold text-off-black">Geburtsdatum</p>
            <div
              class="flex items-center w-full px-3 border rounded-md border-border-white"
            >
              <Icons name="gabrudatsum" />
              <BaseInput
                type="tel"
                class="!w-full"
                className="!border-none"
                placeholder="--/--/--"
              />
            </div>
          </div>
          <div class="flex w-full pt-4">
            <div class="flex flex-col w-full">
              <p class="mb-1 text-xs font-bold text-off-black">Nationalität</p>
              <div class="relative flex w-full">
                <select
                  class="w-full px-3 py-2.5 text-off-black border border-border-white rounded-md sm:px-5 text-md appearance-none focus:outline-none"
                >
                  <option>Schweiz</option>
                  <option>Germany</option>
                  <option>Austria</option>
                </select>
                <span
                  class="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-10 pointer-events-none"
                >
                  <Icons
                    classname="cursor-pointer max-w-2 sm:max-w-3.5"
                    name="selectarrow"
                  />
                </span>
              </div>
            </div>
            <div class="flex flex-col w-full ms-[14px] md:ms-6">
              <p class="mb-1 text-xs font-bold text-off-black">
                Aufenthaltsstatus
              </p>
              <div class="relative flex w-full">
                <select
                  class="w-full px-3 py-2.5 sm:text-lg text-custom-xs border border-border-white rounded-md text-input-gray appearance-none focus:outline-none"
                >
                  <option>Aufenthaltsstatus...</option>
                  <option>Germany</option>
                  <option>Austria</option>
                </select>
                <span
                  class="absolute top-1/2 right-3 md:right-5 transform -translate-y-1/2 z-10 pointer-events-none"
                >
                  <Icons
                    classname="cursor-pointer !max-w-2 sm:max-w-3.5"
                    name="selectarrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex xl:w-5/12 w-full md:w-6/12 flex-col p-4 bg-yellow-gradient rounded-xl md:max-w-[528px] xl:px-12 lg:pt-12 lg:pb-7"
      >
        <div
          class="flex flex-col mt-16 mx-auto bg-white border border-border-white rounded-lg"
        >
          <div class="flex items-center p-3">
            <Icons name="sixdots" />
            <span
              class="ms-2 w-5 h-5 border border-border-white rounded-md"
            ></span>
            <p class="ps-2 me-4 text-sm font-medium text-black">
              API-Endpunkte entwickeln
            </p>
            <Icons name="threedots" class="ms-4" />
          </div>
          <p
            class="pt-3 mx-3 text-xs text-off-black leading-[1.21] max-w-[262px] sm:max-w-[275px] text-start"
          >
            Implementieren Sie RESTful-API-Endpunkte zur Unterstützung der
            Client-Server-Kommunikation für eine neue Funktion.
          </p>
          <div
            class="flex items-center justify-between px-3 py-2 mt-3 border-t border-border-white"
          >
            <div class="flex items-center">
              <Icons name="redflag" />
              <Icons name="clock" class="ms-3" />
              <p class="ms-1.5 text-xs text-input-gray">Mar 15</p>
            </div>
            <NuxtImg
              width="45"
              height="30"
              class="w-full max-w-11"
              src="/assets/images/svg/avatars.svg"
            />
          </div>
        </div>
        <h3
          class="mt-4 sm:mt-16 font-bold leading-[1.18] text-off-black text-start text-custom-md"
        >
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
    <div class="flex flex-col gap-4 mt-4 xl:mt-12 md:flex-row lg:mt-8 lg:gap-8">
      <div
        class="flex xl:w-5/12 md:w-6/12 w-full flex-col p-4 bg-yellow-gradient rounded-xl md:max-w-[528px] lg:px-12 lg:pt-12 pb-7 lg:pb-10"
      >
        <div class="flex p-4 mx-auto mt-7 bg-white rounded-full max-w-[252px]">
          <div class="relative w-[220px] h-[220px] mx-auto">
            <svg class="w-full h-full transform -rotate-90">
              <defs>
                <linearGradient
                  id="gradientStroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style="stop-color: #ff8a00; stop-opacity: 1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: #ffd800; stop-opacity: 1"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="110"
                cy="110"
                r="90"
                stroke-width="18"
                stroke="rgb(217 217 217)"
                fill="transparent"
              />
              <circle
                cx="110"
                cy="110"
                r="90"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="offset"
                stroke="url(#gradientStroke)"
                stroke-width="18"
                fill="transparent"
              />
            </svg>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p class="text-[22px] font-bold leading-[1.27] text-off-black">
                {{ progressText }}
              </p>
            </div>
          </div>
        </div>
        <h3
          class="mt-7 text-off-black font-bold leading-[1.18] text-start text-custom-md"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h3>
        <p class="pt-3 leading-[1.7] tracking-tight text-custom-sm">
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
      </div>
      <div
        class="flex xl:w-7/12 md:w-6/12 flex-col p-4 bg-yellow-gradient w-full rounded-xl sm:max-w-[752px] lg:px-12 lg:pt-12 lg:pb-7"
      >
        <h5
          class="text-start text-off-black font-bold tracking-tighter leading-[1.18] max-w-[630px] text-custom-md"
        >
          Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla
          nunc faucibus in in viverra.
        </h5>
        <p
          class="pt-3 text-start text-gray tracking-tight leading-[1.7] text-custom-sm"
        >
          Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
          sollicitudin viverra. Phasellus elementum potenti lacinia commodo
          sollicitudin diam massa.
        </p>
        <div class="flex flex-col rounded-custom-xl bg-white lg:px-6 px-4 py-3 lg:py-4 mt-11">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <p class="text-yellow font-bold sm:text-base text-[5.79px]">
                Teammitglied
              </p>
              <p class="text-start text-[8.68px] text-lg  xl:text-2xl font-bold">
                Odila Kühn
              </p>
            </div>
            <div class="flex items-center gap-4 h-full">
              <div
                class="border lg:py-3 lg:px-5 py-[5.29px] px-2 flex items-center  border-border-white rounded-lg"
              >
                <p class="text-off-black">Bearbeiten</p>
                <Icons class="ms-2.5" name="note" />
              </div>
              <div class="border border-border-white lg:p-3.5 p-2 rounded-lg">
                <Icons name="profile" />
              </div>
            </div>
          </div>
          <div class="flex items-center mt-4 gap-8">
            <NuxtImg
              width="180"
              height="180"
              class="w-full max-w-[120px] xl:max-w-[180px]"
              src="/assets/images/webp/odila-girl.webp"
            />
            <div class="flex flex-col">
              <p class="text-start font-bold text-off-black text-xs">
                E-Mail-Adresse
              </p>
              <p class="mt-2.5 text-off-black text-[6.51px] sm:text-sm lg:text-lg">odila@swob.com</p>
              <p class="text-start font-bold pt-4 text-off-black text-xs">
                Rolle
              </p>
              <p class="mt-2.5 text-off-black text-[6.51px] sm:text-sm lg:text-lg">Produkt Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 18px;
}
</style>
