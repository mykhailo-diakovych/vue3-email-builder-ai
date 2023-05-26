import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { PROMPT } from "@/constants/index.js";

export const useMainStore = defineStore("use-main-store", () => {
  // state
  const currentStep = ref(PROMPT.EMAIL_TYPES);
  const draft = ref(0);
  const navigationHistory = ref([]);
  const showResult = ref(false);
  const isShareModalOpen = ref(false);
  const isStartOverModalOpen = ref(false);

  // getters
  const getCurrentStep = computed(() => currentStep.value);
  const getCountDraft = computed(() => draft.value);
  const getNavigationHistory = computed(() => navigationHistory.value);
  const isShowResult = computed(() => showResult.value);
  const getShareModalOpen = computed(() => isShareModalOpen.value);
  const getStartOverModalOpen = computed(() => isStartOverModalOpen.value);

  // actions
  const setShowResult = (value) => {
    showResult.value = value;
  };
  const setCurrentStep = (step) => {
    currentStep.value = step;
  };
  const increaseDraft = (countDraft = 0) => {
    countDraft !== 0 ? (draft.value = countDraft) : draft.value++;
  };

  const addToNavigationHistory = (action) => {
    navigationHistory.value.push(action);
  };

  const toggleShareModal = () => {
    isShareModalOpen.value = !isShareModalOpen.value;
  };
  const toggleStartOverModal = () => {
    isStartOverModalOpen.value = !isStartOverModalOpen.value;
  };

  const resetStore = () => {
    currentStep.value = PROMPT.EMAIL_TYPES;
    draft.value = 0;
    navigationHistory.value = [];
    showResult.value = false;
    isShareModalOpen.value = false;
    isStartOverModalOpen.value = false;
  };

  return {
    draft,
    isShowResult,
    getCountDraft,
    getCurrentStep,
    getShareModalOpen,
    getNavigationHistory,
    getStartOverModalOpen,
    resetStore,
    setShowResult,
    increaseDraft,
    setCurrentStep,
    toggleShareModal,
    addToNavigationHistory,
    toggleStartOverModal,
  };
});
