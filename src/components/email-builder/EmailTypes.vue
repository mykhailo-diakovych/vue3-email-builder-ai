<template>
  <div class="h-auto bg-white animate__animated animate__fadeIn">
    <div
      class="h-[calc(100vh-4rem)] flex flex-col justify-center max-w-[35rem] mx-auto px-6"
    >
      <p class="text-black text-xl leading-7 text-center font-light">
        Help me write a sample email to my learner who has:
      </p>

      <div class="mt-5 flex flex-col gap-y-2">
        <CIButton
          v-for="(email, index) in typeEmails"
          :key="index"
          type="ghost"
          class="uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray"
          @click="mainStore.setEmailType(email)"
        >
          {{ email.label }}
        </CIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMainStore } from "@/store/useMainStore.js";
import { ref } from "vue";
import CIButton from "@/components/ui/CIButton.vue";

const mainStore = useMainStore();

const typeEmails = ref([
  {
    label: "missed assignments",
    value:
      "Generate template email for an email that is sent to your subscribers regularly to keep them informed about the latest news and updates about your product or brand",
  },
  {
    label: "been absent from class",
    value:
      "Generate template email for a type of email that is sent to a leader who has shown an interest in your product or service, but who has not yet made a purchase",
  },
  {
    label: "been late to class",
    value:
      "Generate template email for a type of email is a commercial broadcast that usually offers incentives to drive sales and revenue for a business. ",
  },
  {
    label: "a concerning grade",
    value:
      "Generate template email for a type of behavior-based email you might send to an existing customer",
  },
]);
</script>

<style lang="scss"></style>
