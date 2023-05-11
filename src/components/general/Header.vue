<template>
  <div class="relative">
    <div
      class="py-3 relative bg-white z-[2] md:py-2 px-4 md:px-6 flex items-center h-auto justify-between border-b md:border-b-0 border-border-gray"
    >
      <img
        class="cursor-pointer"
        :src="getImageUrl('assets/logo.svg')"
        alt="logo"
        @click="mainStore.setEmailType(null)"
      />
      <div class="flex items-center gap-x-4">
        <CIButton type="ghost"> ABOUT </CIButton>
        <CIButton type="primary"> BOOK DEMO </CIButton>
      </div>
    </div>
    <div
      class="bg-off-white -translate-y-full overflow-hidden h-0 shadow-[0_4px_8px_rgba(0,0,0,0.2)] w-full p-0 flex items-center justify-between transition-all"
      :class="{
        'h-[56px] translate-y-0 py-2 px-4': mainStore.getCurrentStep,
      }"
    >
      <CIButton type="ghost-gray" class="flex items-center" @click="onBack">
        <img class="mr-2" :src="getImageUrl('assets/arrow.svg')" alt="arrow" />
        <span>BACK</span>
      </CIButton>
      <CIButton type="ghost-gray" class="flex items-center">
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
<script setup>
import { getImageUrl } from "@/helpers/index.js";
import CIButton from "@/components/ui/CIButton.vue";
import { useMainStore } from "@/store/useMainStore.js";
const mainStore = useMainStore();

const onBack = () => {
  const backItem = mainStore.getNavigationHistory.splice(-1);
  mainStore.setCurrentStep(backItem[0]);
};
</script>

<style scoped></style>
