import { onMounted, onUnmounted, ref } from "vue";
import { checkIfHasScrollBar } from "@/helpers/index.ts";

export const useScrollArea = (selector) => {
  const isVisible = ref(false);
  const innerWidth = window.innerWidth;
  const element = document.querySelector(selector);

  if (innerWidth > 768) {
    isVisible.value = true;
  } else {
    isVisible.value = checkIfHasScrollBar(
      ".email-wrapper__text",
      ".result__paper"
    );
    const onScroll = (event) => {
      const scrolledArea = event.target.scrollTop + event.target.clientHeight;
      const totalArea = event.target.scrollHeight;
      return (isVisible.value = scrolledArea >= totalArea);
    };
    onMounted(() => element.addEventListener("scroll", onScroll));
    onUnmounted(() => element.addEventListener("scroll", onScroll));
  }

  return { isVisible };
};
