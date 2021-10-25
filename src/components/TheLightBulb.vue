<template>
  <button
    class="light-bulb"
    id="light-bulb"
    title="light-bulb"
    @click="toggleLightMode()"
    icon="💡"
    role="button"
  >
    💡
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "TheLightBulb",
  setup() {
    const toggleLightMode = () => {
      switchLightBulb();
      switchLightMode();
    };

    const switchLightBulb = () => {
      const lightBulb = document.getElementById("light-bulb");
      lightBulb?.classList.toggle("off");
      lightBulb?.blur();
    };

    const switchLightMode = () => {
      const mainView = document.getElementById("main-view");
      if (mainView) {
        const classList = mainView.classList;
        classList.toggle("lights-off");
        storeLightMode(classList);
      }
    };

    const hasLightsOff = "hasLightsOff";
    const storeLightMode = (classList: DOMTokenList) => {
      localStorage.setItem(hasLightsOff, `${classList.contains("lights-off")}`);
    };

    onMounted(() => {
      const prefersDark = localStorage.getItem(hasLightsOff);
      if (prefersDark === "false") {
        toggleLightMode();
      }
    });

    return { toggleLightMode };
  },
});
</script>
