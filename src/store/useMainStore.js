import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("use-main-store", () => {
  const selectedEmailType = ref(null);

  const setEmailType = (type) => (selectedEmailType.value = type);
  return { selectedEmailType, setEmailType };
});
