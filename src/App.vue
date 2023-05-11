<template>
  <div class="h-screen w-screen flex flex-col">
    <Header />
    <EmailTypes v-if="!mainStore.selectedEmailType" />
    <PromptWindow v-else />
    <!--    <EmailTypes v-if="0" />-->
    <!--    <PromptWindow v-else />-->
  </div>
</template>
<script setup>
import Header from "@/components/general/Header.vue";
import EmailTypes from "@/components/email-builder/EmailTypes.vue";
import PromptWindow from "@/components/email-builder/PromptWindow.vue";
import { useMainStore } from "@/store/useMainStore.js";
const mainStore = useMainStore();
</script>
<style scoped></style>
