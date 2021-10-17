<template>
  <main-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainView from "./views/Main.vue";

@Options({
  components: {
    MainView
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
