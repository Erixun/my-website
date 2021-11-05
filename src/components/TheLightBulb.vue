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
  emits: ["powerOff"],
  setup(_, { emit }) {
    const toggleLightMode = () => {
      switchLightBulb();
      switchLightMode();
    };

    const switchLightBulb = () => {
      const lb = document.getElementById("light-bulb");
      if (!lb) return;

      lb.classList.toggle("off");
      lb.blur();
      if (lb.classList.contains("off")) {
        emit("powerOff", true);
      } else {
        emit("powerOff", false);
      }
    };

    const switchLightMode = () => {
      const classList = document.body.classList;
      classList.toggle("dark");
      storeLightMode(classList);
    };

    const HAS_LIGHTS_OFF = "hasLightsOff";
    const storeLightMode = (classList: DOMTokenList) => {
      localStorage.setItem(HAS_LIGHTS_OFF, `${classList.contains("dark")}`);
    };
    //determines if the user has a set theme
    const detectColorScheme = () => {
      //local storage is used to override OS theme settings
      if (localStorage.getItem(HAS_LIGHTS_OFF) === "true") {
        return true;
      } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        return true;
      }
    };
    onMounted(() => {
      const prefersDark = detectColorScheme();
      if (prefersDark) {
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
  padding: 0 0.6rem 1px;
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
</style>
