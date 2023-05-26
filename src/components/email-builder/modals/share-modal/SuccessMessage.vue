<template>
  <div class="animate__animated animate__fadeIn">
    <p class="text-center text-xl font-medium">Successfully sent!</p>
    <img
      class="w-32 h-32 mx-auto mt-2"
      :src="getImageUrl('assets/share-send.png')"
      alt="share"
    />
    <p class="text-base text-center">
      For more information, you can contact with me - m.diakovych13@gmail.com.
    </p>
    <div class="flex items-center gap-x-2 mt-6">
      <CIButton type="primary" class="uppercase w-full">Book a Demo</CIButton>
      <CIButton type="secondary" class="uppercase w-full">About</CIButton>
    </div>
  </div>
</template>
<script setup>
import { getImageUrl } from "@/helpers/index.js";
import CIButton from "@/components/ui/CIButton.vue";
</script>

<style scoped lang="scss"></style>
