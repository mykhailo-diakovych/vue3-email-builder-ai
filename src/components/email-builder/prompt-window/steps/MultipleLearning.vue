<template>
  <ActionsWrapper :show-result="showResult">
    <div v-if="!isSelected" class="multiple-learning">
      <p class="multiple-learning__title">
        Want to personalize this further? Select any that apply to this Learner:
      </p>
      <div class="grid grid-cols-2 gap-2 mt-4">
        <CIButton
          v-for="(item, index) in promptOptions.question_3?.learning"
          :key="index"
          type="ghost"
          class="uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray active:!text-white active:!bg-primary-700 !outline-0 !shadow-0"
          :class="{ '!bg-primary-700 !text-white': checkIfSelected(item) }"
          @click="onSelectLearning(item)"
        >
          {{ item }}
        </CIButton>
      </div>
      <CIButton type="primary" class="uppercase mt-2" @click="isSelected = true"
        >Continue</CIButton
      >
    </div>
    <div
      v-else
      class="h-full flex flex-col justify-center md:max-w-[35rem] mx-auto"
    >
      <p class="text-black text-xl leading-7 font-light">
        The messaging has been updated for a
        <span class="text-primary text-xl leading-7 font-bold"
          >part-time working parent.</span
        >
      </p>
      <CIButton
        type="primary"
        class="uppercase w-full mt-4"
        @click="onContinue"
      >
        Next: Personalize MORE
      </CIButton>
      <CIButton
        type="secondary"
        class="uppercase mt-2 w-full"
        @click="isSelected = null"
      >
        Choose a different tone
      </CIButton>
    </div>
  </ActionsWrapper>
</template>
<script setup>
import ActionsWrapper from "@/components/email-builder/prompt-window/ActionsWrapper.vue";
import { ref } from "vue";
import CIButton from "@/components/ui/CIButton.vue";
const emit = defineEmits(["question-4"]);
defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
  promptOptions: {
    type: Object,
    default: () => {},
  },
});
const selectedLearning = ref([]);
const isSelected = ref(null);

const checkIfSelected = (item) => {
  return selectedLearning.value.indexOf(item) !== -1;
};
const onSelectLearning = (item) => {
  const indexOfItem = selectedLearning.value.indexOf(item);
  indexOfItem === -1
    ? selectedLearning.value.push(item)
    : selectedLearning.value.splice(indexOfItem, 1);
};

const onContinue = () => {
  emit("question-4", selectedLearning.value);
};
</script>

<style scoped lang="scss">
.multiple-learning {
  @apply md:max-w-[35rem] w-full h-full mx-auto flex flex-col justify-center;

  &__title {
    @apply text-black text-xl leading-7 font-light;
  }
}
</style>
