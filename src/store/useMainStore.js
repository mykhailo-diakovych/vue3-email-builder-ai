import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { PROMPT } from "@/constants/index.js";

export const useMainStore = defineStore("use-main-store", () => {
  // state
  const currentStep = ref(PROMPT.EMAIL_TYPES);
  const draft = ref(0);
  const navigationHistory = ref([]);

  // getters
  const getCurrentStep = computed(() => currentStep.value);
  const getNavigationHistory = computed(() => navigationHistory.value);

  // actions
  const setCurrentStep = (step) => {
    currentStep.value = step;
  };
  const increaseDraft = () => draft.value++;

  const addToNavigationHistory = (action) => {
    navigationHistory.value.push(action);
  };

  return {
    draft,
    getCurrentStep,
    getNavigationHistory,
    increaseDraft,
    setCurrentStep,
    addToNavigationHistory,
  };
});
