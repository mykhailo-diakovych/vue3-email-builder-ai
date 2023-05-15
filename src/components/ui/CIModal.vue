<template>
  <div
    class="fixed backdrop-blur top-0 left-0 bg-[rgba(255,255,255,0.3)] w-screen h-screen flex justify-center items-center z-[100]"
  >
    <div
      class="bg-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] rounded-xl md:w-1/2 w-[90vw] max-w-[30rem] shrink-0 relative p-6 animate__animated animate__bounceIn"
    >
      <button
        class="absolute z-10 -right-5 -top-5 bg-black p-2 rounded-full border-4 border-white shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        @click="$emit('close')"
      >
        <img :src="getImageUrl('assets/close.svg')" alt="close" />
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/helpers/index.js";
defineEmits(["close"]);
</script>

<style scoped></style>
