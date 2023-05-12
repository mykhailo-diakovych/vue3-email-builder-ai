import { onMounted, onUnmounted, ref } from "vue";

export const useScrollArea = (selector) => {
  const isVisible = ref(false);
  const innerWidth = window.innerWidth;
  const element = document.querySelector(selector);

  if (innerWidth > 768) {
    isVisible.value = true;
  } else {
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
