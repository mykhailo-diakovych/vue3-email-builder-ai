<template>
  <div class="relative">
    <div
      v-if="0"
      class="py-3 relative bg-white z-[2] md:py-2 px-4 md:px-6 flex items-center h-auto justify-between border-b md:border-b-0 border-border-gray"
    >
      <img
        class="cursor-pointer"
        :src="getImageUrl('assets/logo.svg')"
        alt="logo"
      />
      <div class="flex items-center gap-x-4">
        <CIButton type="ghost"> ABOUT </CIButton>
        <CIButton type="primary"> BOOK DEMO </CIButton>
      </div>
    </div>
    <div
      class="relative z-0 bg-off-white -translate-y-full overflow-hidden h-0 shadow-[0_4px_8px_rgba(0,0,0,0.2)] w-full p-0 flex items-center justify-between transition-all"
      :class="{
        'h-[56px] translate-y-0 py-2 px-4':
          mainStore.getCurrentStep !== PROMPT.EMAIL_TYPES,
      }"
    >
      <CIButton type="ghost-gray" class="flex items-center" @click="onBack">
        <img class="mr-2" :src="getImageUrl('assets/arrow.svg')" alt="arrow" />
        <span>BACK</span>
      </CIButton>
      <CIButton
        type="ghost-gray"
        class="flex items-center"
        @click="mainStore.toggleStartOverModal()"
      >
        <img
          class="mr-2"
          :src="getImageUrl('assets/restart.svg')"
          alt="restart"
        />
        <span>START OVER</span>
      </CIButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getImageUrl } from "@/helpers/index.ts";
import CIButton from "@/components/ui/CIButton.vue";
import { useMainStore } from "@/store/useMainStore.ts";
import { PROMPT } from "@/constants/index.ts";
const mainStore = useMainStore();

const onBack = () => {
  const backItem = mainStore.getNavigationHistory.splice(-1);
  mainStore.setCurrentStep(backItem[0]);
};
</script>

<style scoped></style>
