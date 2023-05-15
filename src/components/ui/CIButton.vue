<template>
  <button
    v-if="Object.keys(useSlots()).length"
    class="font-bold rounded-lg text-xs p-2 sm:text-xs sm:p-3 md:text-base md:p-2 xl:text-base xl:p-3 disabled:pointer-events-none"
    :class="{
      'button-primary': type === 'primary',
      'button-secondary': type === 'secondary',
      'button-ghost': type === 'ghost',
      'button-ghost-gray': type === 'ghost-gray',
    }"
  >
    <slot />
  </button>
</template>
<script setup>
import { useSlots } from "vue";

defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<style scoped lang="scss">
.button-primary {
  @apply bg-primary text-white hover:bg-primary-600 active:bg-primary-700 disabled:opacity-40 focus:shadow-[0_0_0_4px_rgb(101,88,245)] focus:outline outline-2 outline-white;
}
.button-secondary {
  @apply bg-white text-primary border border-primary hover:bg-primary-100 active:text-primary-700 disabled:opacity-40 focus:shadow-[0_0_0_4px_rgb(101,88,245)] focus:outline outline-2 outline-white;
}
.button-ghost {
  @apply bg-transparent text-primary hover:bg-primary-100 hover:text-primary-600 active:text-primary-700 disabled:opacity-40 focus:outline focus:outline-2 focus:outline-primary;
}
.button-ghost-gray {
  @apply text-gray hover:text-black hover:bg-border-gray active:bg-gray disabled:opacity-40 focus:bg-transparent focus:outline focus:outline-2 focus:outline-primary;
}
</style>
