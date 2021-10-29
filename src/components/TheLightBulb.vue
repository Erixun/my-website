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

    const applyDarkness = () => {
      const mask = document.getElementById("mask");
      if (mask) {
        mask.classList.add("darkness", "fade");
        setTimeout(() => {
          mask.classList.remove("darkness", "fade");
        }, 1500);
      } else {
        console.error("Element with id mask not found")
      }
    };

    const switchLightBulb = () => {
      const lb = document.getElementById("light-bulb")!;
      lb.classList.toggle("off");
      lb.blur();
      if (lb.classList.contains("off")) {
        applyDarkness();
      }
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

<style lang="scss">
.light-bulb {
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  font-weight: bolder;
  font-style: normal;
  vertical-align: text-bottom;
  padding: 0 0.6rem;
}
.light-bulb.off {
  color: transparent;
  text-shadow: 0 0 10px #fff;
}
.light-bulb:focus,
.light-bulb:focus-visible,
.light-bulb:hover {
  animation: vibrate 0.1s linear infinite;
}

.light-bulb.off:focus,
.light-bulb.off:focus-visible {
  text-shadow: 0 0 1px #fff, 0 0 10px orange;
}
.light-bulb.off::before {
  content: attr(icon);
  position: absolute;
  text-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
}
.light-bulb:not(.off) {
  text-shadow: 0 0 10px orange;
  filter: blur(0.6px) opacity(0.6);
}
.light-bulb:not(.off):focus,
.light-bulb:not(.off):focus-visible {
  filter: brightness(105%);
  outline: none;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

@keyframes vibrate {
  0%,
  100% {
    transform: translate(0%, -1%);
  }
  25% {
    transform: translate(-1%, 0%);
  }
  50% {
    transform: translate(0%, 1%);
  }
  75% {
    transform: translate(1%, 0%);
  }
}

.lb-fade-in {
  animation: bulb-fade-in var(--fade-in-duration) ease-out;
}

@keyframes bulb-fade-in {
  0% {
    text-shadow: 0 0 0 transparent;
  }
  100% {
    text-shadow: 0 0 10px #fff;
  }
}
</style>