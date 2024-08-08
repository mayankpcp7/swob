<template>
  <div class="bg-light-gray py-20">
    <div class="container xl:max-w-[1304px] mx-auto px-3">
      <h2
        class="text-center text-black font-extrabold lg:text-custom-3xl md:text-6xl sm:text-4xl text-custom-xmd leading-110 lg:mb-20 md:mb-16 sm:mb-14 mb-12"
      >
        Häufig gestellte Fragen (FAQ)
      </h2>
      <div class="space-y-4">
    <div
      v-for="item in accordianItem"
      :key="item.id"
      class="md:p-8 p-6 rounded-[10px] bg-white shadow-accordain-shadow"
    >
      <button
        @click="toggle(item.id)"
        class="w-full text-left flex items-center justify-between font-medium text-xl leading-110 text-black"
      >
        {{ item.title }}
        <Icons name="accordianArrow"/>
      </button>
      <div
        v-if="openId === item.id"
        class="text-base leading-normal text-black font-normal pt-3"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openId: null,
      accordianItem: [
        {
          id: 0,
          title: "Wie funktioniert SWOB für Arbeitnehmer?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aliquid! Delectus suscipit temporibus commodi quisquam sapiente animi perspiciatis, culpa aut debitis dolorum nesciunt ipsum accusamus consequatur omnis non enim! Doloremque!",
        },
        {
          id: 1,
          title: "Ist SWOB als mobile App verfügbar?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aliquid! Delectus suscipit temporibus commodi quisquam sapiente animi perspiciatis, culpa aut debitis dolorum nesciunt ipsum accusamus consequatur omnis non enim! Doloremque!",
        },
        {
          id: 2,
          title: "Wie kann ich ein Profil auf SWOB erstellen?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aliquid! Delectus suscipit temporibus commodi quisquam sapiente animi perspiciatis, culpa aut debitis dolorum nesciunt ipsum accusamus consequatur omnis non enim! Doloremque!",
        },
        {
          id: 3,
          title: "Sind meine persönlichen Angaben und Daten bei SWOB sicher?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aliquid! Delectus suscipit temporibus commodi quisquam sapiente animi perspiciatis, culpa aut debitis dolorum nesciunt ipsum accusamus consequatur omnis non enim! Doloremque!",
        },
        {
          id: 4,
          title: "Wie kann ich den SWOB-Kundenservice kontaktieren?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aliquid! Delectus suscipit temporibus commodi quisquam sapiente animi perspiciatis, culpa aut debitis dolorum nesciunt ipsum accusamus consequatur omnis non enim! Doloremque!",
        },
      ],
    };
  },
  methods: {
    toggle(id) {
      this.openId = this.openId === id ? null : id;
    },
  },
};
</script>
<script setup>
import Icons from "./common/Icons.Vue";
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter, .accordion-leave-to {
  max-height: 0;
  overflow: hidden;
}
.accordion-enter-to, .accordion-leave {
  max-height: 100px;
}
</style>