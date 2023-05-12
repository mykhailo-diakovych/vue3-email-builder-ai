<template>
  <div class="email-wrapper animate__animated animate__fadeIn">
    <keep-alive>
      <component
        :is="components[mainStore.getCurrentStep]"
        :show-result="showResult"
        :prompt-options="promptOptions"
        @question-1="onSelectEmail"
        @question-2="generateEmail"
        @question-3="onAdditionalOption"
        @question-4="onSelectLearning"
      />
    </keep-alive>
    <div
      class="email-wrapper__result result"
      :class="{ '!p-0 !w-0': !showResult }"
    >
      <ResultLoader v-if="EmailApi.loading.value" class="z-50" />
      <div v-if="EmailApi.hasResult.value" class="result__paper">
        <div>
          <p class="font-bold">Draft #{{ mainStore.draft }}</p>
          <p class="font-bold">Subject: Tardiness to class</p>
        </div>
        <p v-html="result" />
      </div>
      <CIButton
        v-if="EmailApi.hasResult.value"
        class="hidden md:flex items-center absolute bottom-10 right-10 !rounded-full md:outline md:outline-2 md:outline-white shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
        type="primary"
      >
        <img
          class="mr-2 w-6 h-6 md:w-7 md:h-7"
          :src="getImageUrl('assets/share.svg')"
          alt="share"
        />
        <span>SHARE</span>
      </CIButton>
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent, ref } from "vue";
import ResultLoader from "@/components/ui/ResultLoader.vue";
import EmailApi from "@/service/buildEmail.js";
import { useMainStore } from "@/store/useMainStore.js";
import { PROMPT } from "@/constants/index.js";
import CIButton from "@/components/ui/CIButton.vue";
import { getImageUrl } from "@/helpers/index.js";

const mainStore = useMainStore();
const showResult = ref(false);
const result = ref(null);
const promptOptions = ref({
  question_1: null,
  question_2: null,
  question_3: null,
  question_4: null,
});

const components = {
  [PROMPT.EMAIL_TYPES]: defineAsyncComponent(() =>
    import("@/components/email-builder/prompt-window/steps/EmailTypes.vue")
  ),
  [PROMPT.WRITE_PROMPT]: defineAsyncComponent(() =>
    import("@/components/email-builder/prompt-window/steps/WritePrompt.vue")
  ),
  [PROMPT.MORE_OPTION]: defineAsyncComponent(() =>
    import("@/components/email-builder/prompt-window/steps/MoreOptions.vue")
  ),
  [PROMPT.MULTIPLE_LEARNING]: defineAsyncComponent(() =>
    import(
      "@/components/email-builder/prompt-window/steps/MultipleLearning.vue"
    )
  ),
};
const onSelectEmail = (email) => {
  promptOptions.value.question_1 = email;
};
// TODO: refactor functions below
const generateEmail = async (prompt) => {
  showResult.value = true;
  result.value = await EmailApi.generateEmail(
    promptOptions.value.question_1?.value + prompt
  );
  mainStore.setCurrentStep(PROMPT.MORE_OPTION);
  mainStore.addToNavigationHistory(PROMPT.WRITE_PROMPT);
  mainStore.increaseDraft();
  promptOptions.value.question_2 = prompt;
};
const onAdditionalOption = async (option) => {
  const additionalOptionText = option?.value.length
    ? ` and type of email is ${option.value}`
    : "";
  result.value = await EmailApi.generateEmail(`
  ${promptOptions.value.question_1?.value} ${promptOptions.value.question_2} ${additionalOptionText}
`);
  mainStore.setCurrentStep(PROMPT.MULTIPLE_LEARNING);
  mainStore.addToNavigationHistory(PROMPT.MORE_OPTION);
  mainStore.increaseDraft();
  promptOptions.value.question_3 = option;
};

const onSelectLearning = async (learnings) => {
  const haveLearnings = learnings.length > 0;
  const textJoin = learnings.join(",");
  const learningText = haveLearnings
    ? `also add these learnings for generation email: ${textJoin}`
    : "";
  const additionalOptionText = promptOptions?.value.question_3?.value.length
    ? ` and type of email is ${promptOptions?.value.question_3?.value}`
    : "";
  result.value = await EmailApi.generateEmail(
    `${promptOptions.value.question_1?.value} ${promptOptions.value.question_2} ${additionalOptionText} ${learningText}`
  );
};
</script>

<style scoped lang="scss">
.email-wrapper {
  @apply flex h-full overflow-hidden;

  &__result {
    @apply w-full md:w-1/2 flex flex-col justify-center items-center bg-primary-700 transition-all duration-1000 relative overflow-hidden px-2 md:px-20 py-4;
  }

  .result {
    &__paper {
      @apply h-full w-full bg-[url('@/assets/bg-paper.png')] bg-[length:120%_120%] bg-local px-6 py-8 md:px-12 md:py-16 text-base font-normal leading-6 bg-center rounded-md text-gray-800 justify-self-center self-center overflow-auto;
    }
  }
}
</style>
