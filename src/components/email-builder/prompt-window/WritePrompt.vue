<template>
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
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { ref } from "vue";
const emit = defineEmits(["generate"]);
const prompt = ref("");

const onWritePrompt = () => {
  prompt.value && emit("generate", prompt.value);
};
</script>

<style scoped></style>
