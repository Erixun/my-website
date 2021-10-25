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
      const app = document.getElementById("app");
      if (app) {
        const classList = app.classList;
        classList.toggle("dark");
        storeLightMode(classList);
      }
    };

    const hasLightsOff = "hasLightsOff";
    const storeLightMode = (classList: DOMTokenList) => {
      localStorage.setItem(hasLightsOff, `${classList.contains("dark")}`);
    };

    onMounted(() => {
      const prefersDark = localStorage.getItem(hasLightsOff);
      if (prefersDark === "true") {
        toggleLightMode();
      }
    });

    return { toggleLightMode };
  },
});
</script>