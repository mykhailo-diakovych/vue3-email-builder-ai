<template>
  <div class="write-prompt relative" :class="{ 'md:!w-1/2': showResult }">
    <div
      v-if="EmailApi.loading.value"
      class="w-full h-full absolute bg-white opacity-40 z-10"
    />
    <div class="max-w-[35rem] w-full mx-auto">
      <p class="text-black text-xl leading-7 font-light">
        Given their situation, what would you request the learner do next?
      </p>
      <textarea
        v-model.trim="prompt"
        rows="8"
        class="w-full text-black mt-4 p-4 text-xl rounded-lg resize-none border border-border-gray shadow-[0_0_0_4px_rgb(101,88,245)] outline outline-2 outline-white"
      ></textarea>
      <CIButton type="primary" class="w-full mt-4" @click="onWritePrompt">
        DRAFT EMAIL
      </CIButton>
    </div>
  </div>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { ref } from "vue";
import EmailApi from "@/service/buildEmail.js";
const emit = defineEmits(["generate"]);
defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
});
const prompt = ref("");

const onWritePrompt = () => {
  prompt.value && emit("generate", prompt.value);
};
</script>

<style scoped lang="scss">
.write-prompt {
  @apply w-full px-4 flex flex-col justify-center items-center transition-all duration-1000;

  @media (max-width: 776px) {
    @apply absolute z-50 bottom-0 bg-white h-full #{!important};
  }
}
</style>
