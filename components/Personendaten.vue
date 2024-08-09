<script>
import BaseInput from "./common/Input.vue";
import Icons from "./common/Icons.vue";
</script>

<template>
  <div
    class="flex flex-col w-full p-3 mt-7 mx-auto bg-white border border-border-white sm:p-5 max-w-[500px] rounded-custom-xl"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Icons name="personendaten" />
        <p class="ps-2 text-base font-bold leading-3">Personendaten</p>
      </div>
      <Icons name="dropArrow" />
    </div>
    <div class="flex w-full pt-4">
      <div class="flex flex-col">
        <p class="mb-1 text-[7.46px] sm:text-xs font-bold text-off-black">
          Vorname
        </p>
        <BaseInput placeholder="" />
      </div>
      <div class="flex flex-col ms-6">
        <p class="mb-1 text-[7.46px] sm:text-xs font-bold text-off-black">
          Nachname
        </p>
        <BaseInput placeholder="" />
      </div>
    </div>
    <div class="flex flex-col w-full pt-4">
      <p class="mb-1 text-[7.46px] sm:text-xs font-bold text-off-black">
        Geburtsdatum
      </p>
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
            class="w-full px-3 py-2.5 text-off-black border border-border-white rounded-md md:px-5 text-md appearance-none focus:outline-none"
          >
            <option>Schweiz</option>
            <option>Germany</option>
            <option>Austria</option>
          </select>
          <span
            class="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-10 pointer-events-none"
          >
            <Icons
              class="cursor-pointer max-w-2 sm:max-w-3.5"
              name="selectArrow"
            />
          </span>
        </div>
      </div>
      <div class="flex flex-col w-full ms-[14px] md:ms-6">
        <p class="mb-1 text-xs font-bold text-off-black">Aufenthaltsstatus</p>
        <div class="relative flex w-full">
          <select
            class="w-full px-3 py-2.5 md:text-lg truncate pr-6 text-custom-xs border border-border-white rounded-md text-input-gray appearance-none focus:outline-none"
          >
            <option>Aufenthaltsstatus</option>
            <option>Germany</option>
            <option>Austria</option>
          </select>
          <span
            class="absolute top-1/2 right-3 md:right-5 transform -translate-y-1/2 z-10 pointer-events-none"
          >
            <Icons
              class="cursor-pointer !max-w-2 sm:max-w-3.5"
              name="selectArrow"
            />
          </span>
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
}
</style>
