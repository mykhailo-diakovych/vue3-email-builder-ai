<template>
  <CIModal>
    <p class="text-black text-xl font-medium">
      Share your drafts with yourself or others
    </p>
    <p class="mt-2">
      You will lose all of the drafts you hve curently made. If you want, you
      can <span class="font-bold">share</span> your current drafts using the
      button on the bottom right before continuing on with a clean slate.
    </p>
    <div class="flex items-center gap-x-2 mt-6">
      <CIButton
        type="secondary"
        class="uppercase w-full"
        @click="$emit('close')"
        >Nevermind!</CIButton
      >
      <CIButton
        type="primary"
        class="uppercase w-full"
        @click="$emit('start-over')"
        >Start Over</CIButton
      >
    </div>
  </CIModal>
</template>
<script setup>
import CIModal from "@/components/ui/CIModal.vue";
import CIButton from "@/components/ui/CIButton.vue";
defineEmits(["close", "start-over"]);
</script>

<style scoped lang="scss"></style>
