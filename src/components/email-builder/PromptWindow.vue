<template>
  <div class="flex h-full overflow-hidden animate__animated animate__fadeIn">
    <div
      class="w-full px-4 flex flex-col justify-center items-center transition-all duration-1000 relative"
      :class="{ '!w-1/2': showResult }"
    >
      <!-- overlay  -->
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
        <CIButton type="primary" class="w-full mt-4" @click="generateEmail">
          DRAFT EMAIL
        </CIButton>
      </div>
    </div>
    <div
      class="w-1/2 flex flex-col justify-center items-center bg-primary-700 transition-all duration-1000 relative overflow-hidden px-20 py-4"
      :class="{ '!p-0 !w-0': !showResult }"
    >
      <ResultLoader v-if="EmailApi.loading.value" class="z-50" />
      <div
        v-if="EmailApi.hasResult.value"
        class="h-full bg-[url('./assets/bg-paper.png')] bg-[length:120%_120%] bg-local px-12 py-16 text-base font-normal leading-6 bg-center rounded-md text-gray-800 justify-self-center self-center overflow-auto w-full"
        v-html="result"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ResultLoader from "@/components/ui/ResultLoader.vue";
import EmailApi from "@/service/buildEmail.js";
import { useMainStore } from "@/store/useMainStore.js";
import CIButton from "@/components/ui/CIButton.vue";

const prompt = ref("");
const showResult = ref(false);
const mainStore = useMainStore();
const result = ref(null);

const generateEmail = async () => {
  if (prompt.value) {
    showResult.value = true;
    result.value = await EmailApi.generateEmail(
      mainStore.selectedEmailType?.value + prompt.value
    );
  }
};
</script>

<style scoped></style>
