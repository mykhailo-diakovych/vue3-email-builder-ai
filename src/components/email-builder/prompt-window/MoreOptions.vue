<template>
  <ActionsWrapper :show-result="showResult">
    <div v-if="!selectedOption" class="more-options__content">
      <p class="more-options__title">How is this? Would you like it more:</p>
      <div class="more-options__actions">
        <CIButton
          v-for="(option, index) in emailOptions"
          :key="index"
          type="ghost"
          class="flex items-center uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
          @click="onSelectOption(option)"
        >
          <img
            :src="getImageUrl(`assets/more-options-email/${option.icon}.svg`)"
            :alt="option.label"
            class="mr-4"
          />
          <span class="text-base uppercase">{{ option.label }}</span>
        </CIButton>
        <CIButton
          type="ghost"
          class="flex items-center uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
          @click="$emit('continue')"
        >
          <img
            :src="getImageUrl(`assets/more-options-email/look-good.svg`)"
            alt="look-good"
            class="mr-4"
          />
          <span class="text-base uppercase">Looks GooD!</span>
        </CIButton>
      </div>
    </div>
    <div
      v-else
      class="h-full flex flex-col justify-center md:max-w-[35rem] mx-auto"
    >
      <p class="more-options__selected-title">
        The draft is now more
        <span class="more-options__selected-title--selected"
          >{{ selectedOption.icon }}.</span
        >
      </p>
      <CIButton
        type="primary"
        class="uppercase w-full mt-4"
        @click="onPersonalizeMore"
      >
        Next: Personalize MORE
      </CIButton>
      <CIButton
        type="secondary"
        class="uppercase mt-2 w-full"
        @click="selectedOption = null"
      >
        Choose a different tone
      </CIButton>
    </div>
  </ActionsWrapper>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { ref } from "vue";
import { getImageUrl } from "@/helpers/index.js";
import ActionsWrapper from "@/components/email-builder/prompt-window/ActionsWrapper.vue";

const emit = defineEmits(["question-3", "additional-continue"]);
defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
});
const selectedOption = ref(null);

const emailOptions = ref([
  {
    label: "Professional",
    icon: "professional",
    value: "professional",
  },
  {
    label: "Supportive",
    icon: "supportive",
    value: "supportive",
  },
  {
    label: "Upbeat",
    icon: "upbeat",
    value: "upbeat",
  },
]);

const onSelectOption = (option) => {
  selectedOption.value = option;
};
const onPersonalizeMore = () => {
  emit("question-3", selectedOption.value);
};
</script>

<style scoped lang="scss">
.more-options {
  &__content {
    @apply md:max-w-[35rem] w-full h-full mx-auto flex flex-col justify-center;
  }
  &__title {
    @apply text-black text-xl leading-7 font-light;
  }
  &__actions {
    @apply md:flex flex-col gap-y-2 mt-4;
  }

  &__selected-title {
    @apply text-black text-xl leading-7 font-light;
    &--selected {
      @apply text-primary font-bold;
    }
  }

  @media (max-width: 776px) {
    @apply absolute z-50 bottom-0 bg-white w-full p-4 #{!important};

    &__title {
      @apply text-xl;
    }

    &__actions {
      @apply grid grid-cols-2 gap-2;
      img {
        @apply w-6 h-6;
      }
      span {
        @apply text-xs #{!important};
      }
    }
  }
}
</style>
