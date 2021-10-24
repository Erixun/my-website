<template>
  <main-view id="main-view" class="lights-off" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainView from "./views/Main.vue";

@Options({
  components: {
    MainView,
  },
})
export default class App extends Vue {}
</script>
