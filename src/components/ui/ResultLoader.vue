<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: "#fff",
  },
});
</script>

<style scoped lang="scss">
.lds-ring {
  @apply inline-block relative w-7 h-7;
}
.lds-ring div {
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: v-bind(color) transparent transparent transparent;
  @apply box-border block absolute w-[32px] h-[32px] m-2  rounded-full border-4;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
