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
      <keep-alive>
        <component
          :is="components[mainStore.getCurrentStep]"
          @generate="generateEmail"
          @additional-option="onAdditionalOption"
          @additional-continue="onAdditionalContinue"
        />
      </keep-alive>
    </div>
    <div
      class="w-1/2 flex flex-col justify-center items-center bg-primary-700 transition-all duration-1000 relative overflow-hidden px-20 py-4"
      :class="{ '!p-0 !w-0': !showResult }"
    >
      <ResultLoader v-if="EmailApi.loading.value" class="z-50" />
      <div
        v-if="EmailApi.hasResult.value"
        class="h-full bg-[url('./assets/bg-paper.png')] bg-[length:120%_120%] bg-local px-12 py-16 text-base font-normal leading-6 bg-center rounded-md text-gray-800 justify-self-center self-center overflow-auto w-full"
      >
        <div>
          <p class="font-bold">Draft #{{ mainStore.draft }}</p>
          <p class="font-bold">Subject: Tardiness to class</p>
        </div>
        <p v-html="result" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent, ref } from "vue";
import ResultLoader from "@/components/ui/ResultLoader.vue";
import EmailApi from "@/service/buildEmail.js";
import { useMainStore } from "@/store/useMainStore.js";
import { PROMPT } from "@/constants/index.js";

const mainStore = useMainStore();
const showResult = ref(false);
const result = ref(null);
const currentInput = ref(null);

const components = {
  [PROMPT.WRITE_PROMPT]: defineAsyncComponent(() =>
    import("@/components/email-builder/prompt-window/WritePrompt.vue")
  ),
  [PROMPT.MORE_OPTION]: defineAsyncComponent(() =>
    import("@/components/email-builder/prompt-window/MoreOptions.vue")
  ),
};
const generateEmail = async (prompt) => {
  showResult.value = true;
  result.value = await EmailApi.generateEmail(
    mainStore.selectedEmailType?.value + prompt
  );
  mainStore.setCurrentStep(PROMPT.MORE_OPTION);
  mainStore.addToNavigationHistory(PROMPT.WRITE_PROMPT);
  mainStore.increaseDraft();
  currentInput.value = prompt;
};
const onAdditionalOption = async (option) => {
  result.value = await EmailApi.generateEmail(
    mainStore.selectedEmailType?.value +
      currentInput.value +
      `and type of email is ${option.value}`
  );
  mainStore.increaseDraft();
  mainStore.addToNavigationHistory(PROMPT.WRITE_PROMPT);
};

const onAdditionalContinue = () => {
  mainStore.addToNavigationHistory(PROMPT.WRITE_PROMPT);
};
</script>

<style scoped></style>
