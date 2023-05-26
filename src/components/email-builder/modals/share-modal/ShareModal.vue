<template>
  <CIModal @close="mainStore.toggleShareModal">
    <div v-if="!isSuccess">
      <p class="text-black text-xl font-medium">
        Share your drafts with yourself or others
      </p>
      <input
        v-model="email"
        type="text"
        placeholder="Enter your email address"
        class="w-full mt-4 outline outline-2 outline-primary outline-offset-2 p-2 border border-border-gray rounded-md placeholder:text-border-gray text-black"
      />
      <CIButton
        :disabled="!email"
        type="primary"
        class="uppercase mt-4 ml-auto block"
        @click="onShare"
      >
        Share drafts
      </CIButton>
    </div>
    <SuccessMessage v-else />
    <div
      v-if="loading"
      class="bg-[rgba(255,255,255,0.8)] absolute top-0 left-0 h-full w-full rounded-md"
    >
      <ResultLoader
        color="#6558F5"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </CIModal>
</template>
<script setup>
import CIModal from "@/components/ui/CIModal.vue";
import { ref } from "vue";
import CIButton from "@/components/ui/CIButton.vue";
import { useMainStore } from "@/store/useMainStore.js";
import SuccessMessage from "@/components/email-builder/modals/share-modal/SuccessMessage.vue";
import ResultLoader from "@/components/ui/ResultLoader.vue";
const email = ref();
const loading = ref(false);
const isSuccess = ref(false);

const mainStore = useMainStore();

const onShare = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isSuccess.value = true;
  }, 2000);
};
</script>
<style scoped lang="scss"></style>
