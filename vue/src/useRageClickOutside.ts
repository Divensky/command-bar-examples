import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";

type Options = {
  rageClickThreshold?: number;
};

export function useRageClickOutside(
  elementRef: Ref<HTMLElement | null>,
  options?: Options
) {
  const { rageClickThreshold = 900 } = options || {};
  const lastClickTime = ref(0);
  const clickCount = ref(1);

  const handleClickOutside = (evt: MouseEvent) => {
    const currentTime = Date.now();
    if (!elementRef.value) {
      return;
    }

    if (
      !elementRef.value?.contains(evt.target as Node) &&
      currentTime - lastClickTime.value < rageClickThreshold
    ) {
      ++clickCount.value;
      if (clickCount.value >= 3) {
        if (window.CommandBar.isOpen()) {
          window.CommandBar.close();
        } else {
          window.CommandBar.open();
          clickCount.value = 1;
        }
      }
    } else {
      clickCount.value = 1;
    }
    lastClickTime.value = currentTime;
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return handleClickOutside;
}
