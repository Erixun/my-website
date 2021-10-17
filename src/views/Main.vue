<template>
  <!-- MOBILE FIRST -->
  <header>
    <h1>erixun.dev</h1>
    <nav>nav?</nav>
  </header>
  <main>
    <section class="presentation">
      <!-- <h2>Presentation</h2> -->

      <article>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, culpa
          nobis, placeat maiores rem, eos quod illum aspernatur amet quidem
          quae. Quisquam, nemo facere. Dolorem harum obcaecati odio nobis earum.
        </p>
      </article>
      <aside>
        <h2>A bit about me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, ex culpa facere natus voluptates ipsum voluptas, nostrum
          nobis deleniti cupiditate odit, a sunt et? Assumenda suscipit
          laboriosam expedita consequatur optio.
        </p>
      </aside>
    </section>
    <section class="skills">
      My Powers
      <ul>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>ASP.NET</li>
      </ul>
    </section>
    <section class="currently">
      <h2>I am currently...</h2>
      <article class="currently-learning">learning</article>
      <article class="currently-workingon">working on</article>
    </section>
  </main>
  <footer>contact info, made with, made by, hosted at</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-view",
  // setup() {
  // },
});
</script>

<style lang="scss">
#app > * {
  border: 1px solid grey;
}

h1,
h2 {
  all: unset;
}

header {
  display: flex;
  h1 {
    flex-grow: 2;
  }
  nav {
    flex-grow: 8;
  }
}

main {
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  section {
    border-bottom: 1px solid grey;
  }
  .presentation {
    flex-grow: 8;
  }
}
</style>