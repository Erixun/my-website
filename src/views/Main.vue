<template>
  <!-- MOBILE FIRST -->
  <header>
    <h1>erixun.dev</h1>
    <nav>collapsible nav?</nav>
    <article class="light-switch" title="light-bulb" icon="💡">💡</article>
  </header>
  <main>
    <section class="presentation">
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
      <h2>My Powers 💪</h2>
      <ul>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>ASP.NET</li>
      </ul>
    </section>
    <section class="currently">
      <h2>I am currently...</h2>
      <article class="currently-learning">
        <h3>Learning 🧐</h3>
        <ul>
          <li>Azure Functions</li>
          <li>React</li>
          <li>Clean Code</li>
        </ul>
      </article>
      <article class="currently-workingon">
        <h3>Working on 🛠️</h3>
        <ul>
          <li>A KanBan app</li>
          <li>My own website</li>
          <li>An Investment app</li>
        </ul>
      </article>
    </section>
  </main>
  <footer>
    contact info, made with, made by, hosted at, git repo, last updated
  </footer>
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
/* GLOBAL STYLING */
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
  min-height: inherit;
  display: flex;
  flex-direction: column;
}

#app > * {
  border: 1px solid grey;
}

h1,
h2,
h3 {
  all: unset;
}

ul,
ol {
  list-style: none;
  padding-left: 0;
}

/* HEADER STYLING */
header {
  display: flex;
  padding: 1rem;
  align-items: baseline;
  h1,
  .light-switch {
    flex-grow: 1;
  }
  nav {
    flex-grow: 4;
  }
  .light-switch:not(.off) {
    text-shadow: 0 0 10px orange;
    position: relative;
    font-size: 1rem;
  }
}

/* MAIN STYLING */
main {
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  section {
    border-bottom: 1px solid grey;
  }
  .presentation {
    flex-grow: 8;
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;

    article {
      flex-basis: 500px;
      order: 2;
    }
    aside {
      flex-basis: 200px;
    }
  }

  .currently {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    h2 {
      width: 100%;
    }
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    .presentation article {
      order: 0;
    }
  }
}
</style>
