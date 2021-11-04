<template>
  <div id="overlay"></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from "vue";

export default defineComponent({
  name: "the-darkness",
  setup() {
    const applyDarkness = () => {
      const overlay = document.getElementById("overlay");
      if (overlay && overlay.classList.contains('total-darkness')) {
        overlay.classList.add("fade");
        setTimeout(() => {
          overlay.classList.remove("total-darkness", "fade");
        }, 1500);
      } else if(!overlay) {
        console.error("Element with id 'overlay' not found");
      }
    };

    onUpdated(() => {
      applyDarkness();
    });
  },
});
</script>

<style lang="scss">
.dark {
  --base-bgc: #131516;
  --neutral-text: rgba(174, 194, 211, 0.84);
  --default-text-86: rgba(174, 194, 211, 0.86);
  --selection-background: #004daa;
  --selection-text: #e8e6e3;
  --accented-bgc: #3c0000;
  --accented-text-color: #b09b01;
  --accented-border: 2px solid #82020299;
  --alt-section-bgc: rgb(40, 39, 27);
  --border-color: #4d526691;
  --footer-bgc: #222117;
  --btn-s-color: var(--neutral-text);
  --contact-opt-bgc: var(--base-bgc);
  --separate-color: var(--base-bgc);
  --default-border-color: #4d526691;
  border: none;
}

#overlay {
  position: absolute;
}

.dark > .app {
  & > header {
    box-shadow: unset;
  }
  & > main {
    .main-section:not(.stand-out) {
      background: revert;
    }
    .separator {
      li {
        &:hover,
        &:focus-within {
          background: #660101;
        }
        a:active {
          filter: brightness(130%);
        }
        img {
          filter: invert(91%) sepia(3%) saturate(2233%) hue-rotate(177deg)
            brightness(73%) contrast(87%);
        }
      }
    }
    --portrait-shadow: grey;
    --portrait-shadow-less: rgba(128, 128, 128, 0.507);
    .portrait .shadow-wrapper::after {
      box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow);
    }
  }
  .total-darkness {
    width: 100%;
    min-height: inherit;
    background: black;
    z-index: 5000;
    opacity: 1;
    transition: opacity var(--fade-in-duration) linear;
  }
  .fade {
    opacity: 0;
  }
  .stand-out {
    .skill-card,
    .skills-btn {
      box-shadow: none;
      border-color: var(--lighter-border-color);
      border-width: 1px;
    }
  }
}
</style>
