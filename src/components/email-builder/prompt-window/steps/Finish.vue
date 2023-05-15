<template>
  <div
    class="max-w-[35rem] text-start mx-auto w-full px-4 flex flex-col justify-center transition-all duration-1000 animate__animated animate__fadeIn"
  >
    <h2 class="text-black text-[32px] font-bold mb-7 text-start">Thanks!</h2>
    <p class="text-black text-xl leading-7 font-light mb-7">
      For more tools like these, check out Ribbon. Ribbon is the first student
      CRM platform built for online adult education providers tostreamline
      operations and improve student retention.
    </p>
    <div class="flex items-center gap-x-2 w-full">
      <CIButton class="w-full" type="primary">BOOK A DEMO</CIButton>
      <CIButton class="w-full" type="secondary">ABOUT RIBBON</CIButton>
    </div>
  </div>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
</script>

<style scoped lang="scss"></style>
