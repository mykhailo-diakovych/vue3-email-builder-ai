<template>
  <ActionsWrapper :show-result="showResult">
    <div class="additional-drafts">
      <p class="additional-drafts__title">
        Here are
        <span class="text-primary font-bold">3 additional drafts.</span>
      </p>
      <div class="additional-drafts__items">
        <CIButton
          v-for="(draft, index) in drafts"
          :key="index"
          class="additional-drafts__action"
          :class="{ '!bg-primary-700 !text-white': draft.active }"
          type="ghost"
          @click="onSelectDraft(draft, index)"
          >draft #{{ draft.count }}</CIButton
        >
      </div>
      <CIButton type="primary" class="uppercase mt-4" @click="onFinish"
        >FINISH</CIButton
      >
    </div>
  </ActionsWrapper>
</template>
<script setup>
import ActionsWrapper from "@/components/email-builder/prompt-window/ActionsWrapper.vue";
import { onMounted, ref } from "vue";
import CIButton from "@/components/ui/CIButton.vue";
import { useMainStore } from "@/store/useMainStore.js";
const mainStore = useMainStore();
const props = defineProps({
  showResult: {
    type: Boolean,
    required: true,
  },
  promptOptions: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["select-draft", "finish"]);
const drafts = ref([]);

const generateDrafts = () => {
  let draftCounter = mainStore.getCountDraft;
  props.promptOptions.question_4?.drafts.forEach((draft, index) => {
    drafts.value.push({
      count: draftCounter++,
      draft: draft,
      active: index === 0,
    });
  });
  drafts.value[0].active = true;
};

const onSelectDraft = (draft, index) => {
  drafts.value = drafts.value.map((draft) => ({ ...draft, active: false }));
  drafts.value[index].active = true;
  mainStore.increaseDraft(draft.count);
  emit("select-draft", { draft, index });
};

const onFinish = () => {
  emit("finish");
};
onMounted(() => {
  generateDrafts();
  mainStore.setShowResult(true);
});
</script>

<style scoped lang="scss">
.additional-drafts {
  @apply md:max-w-[35rem] w-full h-full mx-auto flex flex-col justify-center;

  &__title {
    @apply text-black text-xl leading-7 font-light;
  }

  &__items {
    @apply grid grid-cols-3 gap-x-2 mt-4;
  }

  &__action {
    @apply uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-start md:text-center border border-border-gray active:text-white active:bg-primary-700 outline-0  #{!important};
  }
}
</style>
