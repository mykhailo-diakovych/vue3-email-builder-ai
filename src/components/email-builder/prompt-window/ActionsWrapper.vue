<template>
  <div
    v-if="isVisible"
    class="actions-wrapper"
    :class="{ '!w-1/2': showResult }"
  >
    <div
      v-if="EmailApi.loading.value"
      class="w-full h-full absolute bg-white opacity-40 z-10"
    />
    <CIButton
      v-if="EmailApi.hasResult.value"
      class="flex items-center absolute -top-16 right-2 !rounded-full md:outline md:outline-2 md:outline-white shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
      type="primary"
    >
      <img
        class="mr-2 w-6 h-6 md:w-7 md:h-7"
        :src="getImageUrl('assets/share.svg')"
        alt="share"
      />
      <span>SHARE</span>
    </CIButton>
    <div class="h-full w-full">
      <slot />
    </div>
  </div>
</template>
<script setup>
import CIButton from "@/components/ui/CIButton.vue";
import { getImageUrl } from "@/helpers/index.js";
import EmailApi from "@/service/buildEmail.js";
import { useScrollArea } from "@/composables/useScrollArea.js";

defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
});

const { isVisible } = useScrollArea(".result__paper");
</script>
<style scoped lang="scss">
.actions-wrapper {
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
