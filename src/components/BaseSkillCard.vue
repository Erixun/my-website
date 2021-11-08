<template>
  <li>
    <article class="skill-card" :id="id">
      <button class="flip-btn" @click="flipCard(id)">
        <img
          class="flip-indicator"
          src="img/icons/flip.svg"
          alt="Flip-indicator"
        />
      </button>
      <div class="content back" v-if="isFlipped">
        <h3>{{ label }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="content front" v-else>
        <i :class="`devicon devicon-${id}-${logotype}`"></i>
        <h3>{{ label }}</h3>
        <meter
          min="0"
          low="25"
          high="60"
          optimum="70"
          max="100"
          :value="proficiency"
          :title="`Proficiency: ${proficiency}%`"
        >
          Proficiency: {{ proficiency }}%
        </meter>
      </div>
    </article>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "BaseSkillCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const flipStatus = reactive({ value: false });
    const flipCard = (id: string) => {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle("flip");
        setTimeout(() => {
          flipStatus.value = !flipStatus.value;
        }, 500);
        setTimeout(() => {
          card.classList.toggle("flip");
        }, 1000);
      }
    };
    return {
      flipCard,
      isFlipped: computed(() => flipStatus.value),
      id: computed(() => props.data.id),
      logotype: computed(() => props.data.logotype || "plain"),
      label: computed(() => props.data.label),
      proficiency: computed(() => props.data.proficiency),
      description: computed(() => props.data.description),
    };
  },
});
</script>

<style lang="scss">
.skill-cards li {
  perspective: 1200px;
}

.skill-card > .content {
  height: 130px;
  padding: 1em;
  border-radius: 5px;
  background: var(--alt-section-bgc);
  border: var(--accented-border);
  text-align: left;
  box-shadow: 1px 1px 1px 1px #80808082;
  box-sizing: border-box;

  h3 {
    white-space: nowrap;
    align-self: end;
  }
}
.skill-card > .back {
  font-size: 0.7em;
  letter-spacing: 0.3px;
  padding: 0.7em 1em;
  h3 {
    font-size: clamp(12px, 2em, 16px);
  }
  p {
    padding: 0.5em 0;
    font-size: 12px;
    color: black;
    font-weight: normal;
    margin-top: 0;
    line-height: 1.4;
  }
}
.skill-card > .front {
  place-items: center start;
  position: relative;
  text-align: left;
  display: grid;
  padding: 1em;
  border-radius: 5px;
  background: var(--alt-section-bgc);
  border: var(--accented-border);
  grid-template-columns: max-content 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "logo h3 h3"
    "logo meter meter";
}
.devicon {
  grid-area: logo;
  font-size: 85px;
  margin-right: 1rem;
}
h3 {
  grid-area: h3;
  width: 100%;
  align-self: end;
}
meter {
  grid-area: meter;
  height: 0.5rem;
  margin-right: 1em;
  width: 95%;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
}
meter::-moz-meter-bar {
  border-radius: 10px 0 0 10px;
}
.flip-btn {
  position: absolute;
  line-height: 0;
  right: 0px;
  top: 0px;
  padding: 5px 5px 18px 10px;
  box-sizing: content-box;
  cursor: pointer;
  border-radius: 0 5px;
  z-index: 7574;
}
.flip-btn:hover {
  background: lightgrey;
}
.flip-indicator {
  width: 0.8em;
}
</style>