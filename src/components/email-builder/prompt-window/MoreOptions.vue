<template>
  <div v-if="isVisible" class="more-options" :class="{ '!w-1/2': showResult }">
    <div
      v-if="EmailApi.loading.value"
      class="w-full h-full absolute bg-white opacity-40 z-10"
    />
    <div class="more-options__content">
      <p class="more-options__title">How is this? Would you like it more:</p>
      <div class="more-options__actions">
        <CIButton
          v-for="(option, index) in emailOptions"
          :key="index"
          type="ghost"
          class="flex items-center uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
          @click="onMoreOptions(option)"
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
  </div>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { ref } from "vue";
import { getImageUrl } from "@/helpers/index.js";
import EmailApi from "@/service/buildEmail.js";
import { useScrollArea } from "@/composables/useScrollArea.js";

const emit = defineEmits(["additional-option", "additional-continue"]);
defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
});

const emailOptions = ref([
  {
    label: "Professional",
    icon: "professional",
  },
  {
    label: "Supportive",
    icon: "supportive",
  },
  {
    label: "Upbeat",
    icon: "upbeat",
  },
]);

const onMoreOptions = (option) => {
  emit("additional-option", option);
};
const { isVisible } = useScrollArea(".result__paper");
</script>
<style scoped lang="scss">
.more-options {
  @apply w-full px-4 flex flex-col justify-center items-center transition-all duration-1000 relative;

  &__content {
    @apply md:max-w-[35rem] w-full mx-auto;
  }
  &__title {
    @apply text-black text-xl leading-7 font-light;
  }
  &__actions {
    @apply md:flex flex-col gap-y-2 mt-4;
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
