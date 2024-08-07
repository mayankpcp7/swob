<script setup>
import Icons from "./common/Icons.vue";

</script>
<template>
    <section class="py-12 md:py-16 lg:py-20">
        <div class="container px-4 md:px-3 mx-auto">
            <h1
                class="max-w-[768px] text-off-black text-center mx-auto font-semibold font-inter mb-4 md:mb-5 text-5xl leading-133 tracking-[-2%]">
                Modernste Funktionen für fortschrittliches HR</h1>
            <p
                class="max-w-[775px] text-lg text-gray md:text-xl font-inter font-normal text-center mx-auto leading-150 mb-8 sm:mb-12 md:mb-14 lg:mb-16">
                Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die dir helfen, mehr Nutzer zu
                konvertieren, zu engagieren und zu binden. Über 4.000 Start-ups vertrauen uns.</p>
            <NuxtImg class="w-100 hidden sm:block" src="/assets/images/webp/modernste-data.png"
                alt="modern-data-image" />
            <NuxtImg class="sm:hidden block max-w-[284px] mx-auto" src="/assets/images/webp/iphone.png"
                alt="moder-data-image" />

            <div class="flex flex-row justify-center xl:justify-start flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 pt-8 xl:pt-0">
                    <div class="size-12 mx-auto rounded-full bg-light-orange">
                    </div>
                    <h3 class="text-center text-off-black text-xl font-medium font-inter mt-5 mb-2">Nahtloses Onboarding
                    </h3>
                    <p class="text-base font-normal font-inter mb-5 max-w-[357px] leading-150 text-center mx-auto">Sorge
                        mit
                        den intuitiven Onboarding-Tools von SWOB für einen reibungslosen Einstieg für neue
                        Mitarbeiter. Vereinfache den Prozess und bringe neue Mitarbeiter schnell auf Trab.</p>
                    <NuxtLink
                        class="flex items-center justify-center text-yellow font-medium font-base font-inter leading-150">
                        Mehr erfahren <span>
                            <Icons :name="arrowicon" class="block size-6 text-black" />
                        </span></NuxtLink>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-10 sm:pt-8 xl:pt-0">
                    <div class="size-12 mx-auto rounded-full bg-light-orange">

                    </div>
                    <h3 class="text-center text-off-black text-xl font-medium font-inter mt-5 mb-2">Zeit- und
                        Abwesenheitsmanagement
                    </h3>
                    <p class="text-base font-normal font-inter mb-5 max-w-[357px] leading-150 text-center mx-auto">Sorge
                        mit
                        Behalte den Überblick über die Arbeitszeit deiner Mitarbeiter und verwalte Abwesenheiten mit den
                        umfassenden Zeitmanagement-Tools von SWOB. Sorge mit Leichtigkeit für genaue Aufzeichnungen und
                        die
                        Einhaltung von Vorschriften.</p>
                    <NuxtLink
                        class="flex items-center justify-center text-yellow font-medium font-base font-inter leading-150">
                        Mehr erfahren <span>
                            <Icons :name="arrowicon" class="block size-6 text-black" />
                        </span></NuxtLink>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-10 md:pt-8 xl:pt-0">
                    <div class="size-12 mx-auto rounded-full bg-light-orange">

                    </div>
                    <h3 class="text-center text-off-black text-xl font-medium font-inter mt-5 mb-2">HR Analytics
                    </h3>
                    <p class="text-base font-normal font-inter mb-5 max-w-[357px] leading-150 text-center mx-auto">Sorge
                        mit
                        Triff datengestützte Entscheidungen mit den fortschrittlichen HR-Analysen von SWOB. Gewinnen Sie
                        wertvolle Einblicke in Ihre Belegschaft und optimieren Sie Ihre Personalstrategien.</p>
                    <NuxtLink
                        class="flex items-center justify-center text-yellow font-medium font-base font-inter leading-150">
                        Mehr erfahren <span>
                            <Icons :name="arrowicon" class="block size-6 text-black" />
                        </span></NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>