<script setup>
import BaseInput from "./common/Input.vue";
</script>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>
<template>
    <section class="bg-yellow relative py-12 md:py-16 lg:py-20">
        <div class="container max-w-[1060px] mx-auto px-4 md:px-3 ">
            <div class="row flex-row pb-9 flex-wrap flex">
                <div class="w-full md:w-7/12">
                    <h1
                        class="font-semibold max-w-[530px] font-inter tracking-[-4%] text-off-black text-center px-4 sm:px-0 md:text-start mx-auto md:mx-0 mb-4 mb-md-4 !leading-120 text-custom-xmd md:text-custom-4xl">
                        Revolutioniere dein
                        HR-Management</h1>
                    <p
                        class="text-gray font-normal !leading-144 max-w-[383px] mb-8 mb-md-6 text-center mx-auto md:mx-0 md:text-start text-lg">
                        Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden.</p>
                    <div class="bg-white mx-auto md:mx-0 max-w-[530px] mb-10 md:mb-0 p-6 rounded-[20px]">
                        <div class="flex gap-6">
                            <div class=" max-w-[229px]">
                                <BaseInput placeholder="Vorname" />
                            </div>
                            <div class="">
                                <BaseInput class="max-w-[229px]" placeholder="Nachname" />
                            </div>
                        </div>
                        <div class="mt-4">
                            <BaseInput class="max-w-[482px]" placeholder="Geschäftliche E-Mail" />
                        </div>
                       
                        <div class="mt-4 max-w-[482px]">
                            <BaseInput placeholder="Handynummer" />
                        </div>
                       
                            <button class="w-full max-w-[482px] bg-black text-white rounded-full p-3.5 mt-6 border-transparent">Jetzt
                                registrieren</button>
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