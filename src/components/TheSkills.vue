<template>
  <h2>Technical Skills</h2>
  <ul v-if="content" class="skill-cards">
    <BaseSkillCard
      v-for="(skill, index) in content.skills"
      :key="skill.id"
      :data="skill"
      v-show="index < SKILLS_MINIMUM || showMore"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSkills",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const enum FilterOptions {
      FrameWork = "framework",
      Language = "language",
      SourceControl = "source-control",
      IDE = "ide",
      Other = "other",
    }
  },
});
</script>
