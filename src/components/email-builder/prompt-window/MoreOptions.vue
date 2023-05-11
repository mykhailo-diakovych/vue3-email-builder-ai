<template>
  <div class="max-w-[35rem] w-full mx-auto">
    <p class="text-black text-xl leading-7 font-light">
      How is this? Would you like it more:
    </p>
    <div class="flex flex-col gap-y-2 mt-4">
      <CIButton
        v-for="(option, index) in emailOptions"
        :key="index"
        type="ghost"
        class="flex items-center uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
        @click="onMoreOptions(option)"
      >
        <img
          :src="getImageUrl(`assets/more-options-email/${option.icon}.svg`)"
          :alt="option.label"
          class="mr-4"
        />
        <span class="text-base uppercase">{{ option.label }}</span>
      </CIButton>
      <CIButton
        type="ghost"
        class="flex items-center uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
        @click="$emit('continue')"
      >
        <img
          :src="getImageUrl(`assets/more-options-email/look-good.svg`)"
          alt="look-good"
          class="mr-4"
        />
        <span class="text-base uppercase">Looks GooD!</span>
      </CIButton>
    </div>
  </div>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { ref } from "vue";
import { getImageUrl } from "@/helpers/index.js";
const emit = defineEmits(["additional-option", "additional-continue"]);

const emailOptions = ref([
  {
    label: "Professional",
    icon: "professional",
  },
  {
    label: "Supportive",
    icon: "supportive",
  },
  {
    label: "Upbeat",
    icon: "upbeat",
  },
]);

const onMoreOptions = (option) => {
  emit("additional-option", option);
};
</script>
<style scoped></style>
