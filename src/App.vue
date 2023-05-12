<template>
  <div class="h-screen w-screen flex flex-col">
    <Header />
    <EmailWrapper />
  </div>
</template>
<script setup>
import Header from "@/components/general/Header.vue";
import EmailWrapper from "@/components/email-builder/prompt-window/EmailWrapper.vue";
</script>
<style scoped></style>
