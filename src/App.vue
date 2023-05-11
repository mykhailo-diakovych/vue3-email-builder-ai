<template>
  <div class="h-screen w-screen flex flex-col">
    <Header />
    <EmailTypes v-if="!mainStore.getCurrentStep" />
    <EmailWrapper v-else />
  </div>
</template>
<script setup>
import Header from "@/components/general/Header.vue";
import EmailTypes from "@/components/email-builder/EmailTypes.vue";
import { useMainStore } from "@/store/useMainStore.js";
import EmailWrapper from "@/components/email-builder/prompt-window/EmailWrapper.vue";
const mainStore = useMainStore();
</script>
<style scoped></style>
