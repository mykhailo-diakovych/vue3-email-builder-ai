import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { PROMPT } from "@/constants/index.js";

export const useMainStore = defineStore("use-main-store", () => {
  // state
  const selectedEmailType = ref(null);
  const currentStep = ref();
  const draft = ref(0);
  const navigationHistory = ref([]);

  // getters
  const getCurrentStep = computed(() => currentStep.value);
  const getNavigationHistory = computed(() => navigationHistory.value);

  // actions
  const setEmailType = (type) => (selectedEmailType.value = type);
  const setCurrentStep = (step) => {
    currentStep.value = step;
    !step && (selectedEmailType.value = null);
  };
  const increaseDraft = () => draft.value++;

  const addToNavigationHistory = (action) => {
    navigationHistory.value.push(action);
  };

  return {
    draft,
    getCurrentStep,
    selectedEmailType,
    getNavigationHistory,
    setEmailType,
    increaseDraft,
    setCurrentStep,
    addToNavigationHistory,
  };
});
