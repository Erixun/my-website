<template>
  <!-- MOBILE FIRST -->
  <div class="container">
    <header>
      <section class="my-title">
        <h1>erixun.me</h1>
      </section>
      <section class="navigation">
        <nav>nav</nav>
      </section>
      <section class="light-switch">
        <TheLightBulb />
      </section>
    </header>
    <main>
      <section class="presentation">
        <article>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            culpa nobis, placeat maiores rem, eos quod illum aspernatur amet
            quidem quae. Quisquam, nemo facere. Dolorem harum obcaecati odio
            nobis earum.
          </p>
        </article>
        <aside>
          <h2>A bit about me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, ex culpa facere natus voluptates ipsum voluptas,
            nostrum nobis deleniti cupiditate odit, a sunt et? Assumenda
            suscipit laboriosam expedita consequatur optio.
          </p>
        </aside>
      </section>
      <section class="powers">
        <h2>My Powers <span emoji>💪</span></h2>
        <ul>
          <li>Vue</li>
          <li>TypeScript</li>
          <li>ASP.NET</li>
        </ul>
      </section>
      <section class="currently">
        <h2>I am currently...</h2>
        <article class="currently-learning">
          <h3>Learning <span emoji>🧐</span></h3>
          <ul>
            <li>Azure Functions</li>
            <li>React</li>
            <li>Clean Code</li>
          </ul>
        </article>
        <article class="currently-workingon">
          <h3>Working on <span emoji>🛠️</span></h3>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLightBulb from '@/components/TheLightBulb.vue'

export default defineComponent({
  name: "main-view",
  components: { TheLightBulb },
  // setup() {
  // },
});
</script>

<style lang="scss">
:root {
  --darkmode-default-bgc: #131516;
  --darkmode-neutral-text: #d8d4cf;
  --darkmode-default-text: rgb(174, 194, 211);
  --darkmode-selection-background: #004daa;
  --darkmode-selection-text: #e8e6e3;
  --title-color: darkcyan;
  --emphatic-color: #590000;
  --fade-in-duration: 1.5s;
}

.lights-off {
  color: var(--darkmode-default-text);
  background-color: var(--darkmode-default-bgc);

  [emoji] {
    animation: emoji-fade-in var(--fade-in-duration) ease-out;
  }
}

/* GLOBAL STYLING */
body {
  margin: 0;
  min-height: 100vh;
  #app {
    min-height: inherit;
  }
}

.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: inherit;
  display: flex;
  flex-direction: column;
}
.container.lights-off {
  transition: color var(--fade-in-duration) ease-out;
}
.container:not(.lights-off) {
  color: unset;
  background-color: unset;
  h1 {
    color: var(--title-color)
  }
}

.container > * {
  border-bottom: 1px solid;
  box-sizing: border-box;
}

h1,
h2,
h3,
button {
  all: unset;
  text-transform: capitalize;
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
  justify-content: space-evenly;
  section {
    flex-grow: 1;
    h1 {
      font-size: 1.1rem;
      font-weight: bold;
      font-style: italic;
      text-transform: unset;
    }
  }
  .light-switch {
    text-align: right;
    .light-bulb {
      cursor: pointer;
      position: relative;
      font-size: 1rem;
      font-weight: bolder;
      padding: 0 1rem;
    }
    .light-bulb.off {
      color: transparent;
      text-shadow: 0 0 10px #fff;
      animation: bulb-fade-in var(--fade-in-duration) ease-out;
    }
    .light-bulb.off:focus {
      text-shadow: 0 0 1px #fff;
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
    .light-bulb:not(.off):focus {
      filter: brightness(105%);
    }
  }
}

/* MAIN STYLING */
main {
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  section {
    border-bottom: 1px solid;
    flex-grow: 1;
    display: flex;
  }
  .presentation {
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
  .powers {
    flex-direction: column;
    justify-content: center;
  }

  .currently {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1rem;
    h2 {
      width: 100%;
    }
  }
}
/*FOOTER STYLING */
footer {
  padding: 1rem;
}

/* MEDIA QUERIES */
@media screen and (min-width: 700px) {
  main .presentation article {
    order: 0;
  }
}

/* KEYFRAMES */
@keyframes emoji-fade-in {
  0% {
    color: transparent;
  }
  100% {
    color: inherit;
  }
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
