<template>
  <div class="animate__animated animate__fadeIn">
    <p class="text-center text-xl font-medium">Successfully sent!</p>
    <img
      class="w-32 h-32 mx-auto mt-2"
      :src="getImageUrl('assets/share-send.png')"
      alt="share"
    />
    <p class="text-base text-center">
      For more tools like these, check out Ribbon. Ribbon is the first student
      CRM platform built for online adult education providers tostreamline
      operations and improve student retention.
    </p>
    <div class="flex items-center gap-x-2 mt-6">
      <CIButton type="primary" class="uppercase w-full">Book a Demo</CIButton>
      <CIButton type="secondary" class="uppercase w-full"
        >About Ribbon</CIButton
      >
    </div>
  </div>
</template>
<script setup>
import { getImageUrl } from "@/helpers/index.js";
import CIButton from "@/components/ui/CIButton.vue";
</script>

<style scoped lang="scss"></style>
