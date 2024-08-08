<template>
    <section class="bg-yellow relative py-12 md:py-16 lg:py-20">
      <div class="container max-w-[1060px] mx-auto px-4 md:px-3">
        <div class="row flex-row pb-9 flex-wrap flex">
          <div class="w-full md:w-7/12">
            <h1 class="font-semibold max-w-[530px] font-inter tracking-[-4%] text-off-black text-center px-4 sm:px-0 md:text-start mx-auto md:mx-0 mb-4 mb-md-4 !leading-120 text-custom-xmd md:text-custom-4xl">
              Revolutioniere dein HR-Management
            </h1>
            <p class="text-gray font-normal !leading-144 max-w-[414px] mb-8 mb-md-6 text-center mx-auto md:mx-0 md:text-start text-lg">
              Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden.
            </p>
            <div class="bg-white mx-auto md:mx-0 max-w-[530px] mb-10 md:mb-0 p-6 rounded-[20px]">
              <form @submit.prevent="submitForm">
                <div class="mb-4 flex gap-6">
                  <InputV v-model="formData.firstName" placeholder="Vorname" type="text" required />
                  <InputV v-model="formData.lastName" placeholder="Nachname" type="text" required />
                </div>
                <InputV v-model="formData.email" placeholder="Geschäftliche E-Mail" type="email" required />
                <div class="mb-6 mt-4 relative">
                  <div class="flex items-center gap-2 absolute top-1/2 start-5 -translate-y-1/2">
                    <div class="bg-red w-6 h-6 rounded-full flex justify-center items-center"></div>
                    <select
                      v-model="formData.selectedCountry"
                      class="appearance-none bg-transparent border ms-[-50px] border-r-0  border-[#ccc] px-3 py-2 rounded-l-md font-normal text-gray-dark focus:outline-none text-lg"
                    >
                    <img src="/public/assets/images/svg/switzerland-icon.svg" alt="country logo" width="20" height="20">
                      <option v-for="country in COUNTRIES_NUMBER_LIST" :key="country.code" :value="country.code" class="flex !text-gray items-center">
                        <img src="/assets/images/svg/switzerland-icon.svg" width="10px" height="10px" alt="">
                        <img src="/public/assets/images/svg/switzerland-icon.svg" alt="flag" class="w-4 h-4 mr-2" /> {{ country.dial_code }}
                      </option>
                    </select>
                  </div>
                  <InputV v-model="formData.phoneNumber" placeholder="Handynummer" type="number" class="ps-20 !border-l-0" required />
                </div>
                <button
                  class="w-full max-w-[482px] hover:bg-white border hover:text-black duration-300 hover:border hover:border-black border-transparent bg-black text-white leading-120 rounded-full p-3.5 border-transparent">
                  Jetzt registrieren
                </button>
              </form>
            </div>
          </div>
          <div class="w-full md:w-5/12">
            <NuxtImg class="w-full mx-auto max-w-[272px] max-h-[376px] md:max-w-[429px] md:max-h-[590px]"
              width="429" height="590" src="/assets/images/webp/header-cartoon.webp" />
          </div>
        </div>
      </div>
      <NuxtImg class="absolute bottom-0 w-full" width="1440" height="111"
        src="/assets/images/webp/header-bottom-layer.webp" alt="bottom-layer" />
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import InputV from '@/components/common/Input.vue'
  
  const selectedCountry = ref('+91')
  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    selectedCountry: '+91',
    phoneNumber: ''
  })
  
  const COUNTRIES_NUMBER_LIST = ref([
    { code: '+91', dial_code: '+91', flag: '/assets/images/svg/switzerland-icon.svg' },
    { code: '+44', dial_code: '+44', flag: '/assets/images/svg/switzerland-icon.svg' },
    { code: '+1', dial_code: '+1', flag: '/assets/images/svg/switzerland-icon.svg' },
    { code: '+41', dial_code: '+41', flag: '/assets/images/svg/switzerland-icon.svg' },
    { code: '+61', dial_code: '+61', flag: '/assets/images/svg/switzerland-icon.svg' },
    { code: '+47', dial_code: '+47', flag: '/assets/images/svg/switzerland-icon.svg' },
  ])
  
  const submitForm = () => {
    if (formData.value.firstName && formData.value.lastName && formData.value.email && formData.value.phoneNumber) {
      console.log('Form submitted:', formData.value)
    } else {
      alert('Please fill in all required fields.')
    }
  }
  </script>
  