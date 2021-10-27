<template>
  <!-- MOBILE FIRST -->
  <header>
    <section class="logo ltext">
      <h1>erixun.me</h1>
    </section>
    <section class="mid">
      <!-- <nav>nav</nav> -->
    </section>
    <section class="rtext">
      <TheLightBulb />
    </section>
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
    <section class="powers">
      <h2>
        My Powers
        <span class="flexes" emoji title="muscle">💪</span>
      </h2>
      <ul>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>ASP.NET</li>
      </ul>
    </section>
    <section class="currently">
      <h2>I am currently...</h2>
      <article class="currently-learning ltext">
        <h3>
          <div class="shadow-wrapper">
            <span class="flipped studies" emoji title="monocle_face">🧐</span>
          </div>
          Learning
        </h3>
        <ul class="padl">
          <li>Azure Functions</li>
          <li>React</li>
          <li>Clean Code</li>
        </ul>
      </article>
      <article class="currently-workingon ltext">
        <h3>
          Working on
          <span class="rotates" emoji title="hammer_and_wrench">🛠️</span>
        </h3>
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
import TheLightBulb from "@/components/TheLightBulb.vue";

export default defineComponent({
  name: "MainView",
  components: { TheLightBulb },
});
</script>

<style lang="scss">
/* VARIABLES */
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

/* GENERAL STYLING */
body {
  margin: 0;
  min-height: 100vh;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: inherit;
    display: flex;
    flex-direction: column;

    [emoji] {
      display: inline-block;
    }
  }
  #app.dark {
    transition: color var(--fade-in-duration) ease-out;
    color: var(--darkmode-default-text);
    background-color: var(--darkmode-default-bgc);

    .emoji-fade-in {
      animation: emoji-fade-in var(--fade-in-duration) ease-out;
    }
  }
  #app:not(.dark) {
    color: unset;
    background-color: unset;
    h1 {
      color: var(--title-color);
    }
  }

  #app > * {
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
}

/* HELPER CLASSES */
.ib {
  display: inline-block;
}
.ltext {
  text-align: left;
}
.rtext {
  text-align: right;
}
.padl {
  padding-left: 1.6rem;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.shadow-wrapper {
  display: inline-block;
  position: relative;
}
.shadow-wrapper::after {
  position: absolute;
  width: 70%;
  height: 12%;
  left: 12%;
  border-radius: 50%;
  z-index: -1;
  bottom: 25%;
  content: "";
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.34);
}

/* HEADER STYLING */
header {
  display: flex;
  padding: 0.5rem 1rem;
  align-items: baseline;
  justify-content: space-evenly;
  section {
    flex-grow: 1;
  }
  .logo {
    font-size: 1.1rem;
    font-weight: bold;
    font-style: italic;
    padding-left: 1vw;
    h1 {
      text-transform: unset;
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

/* ANIMATIONS */
@keyframes emoji-fade-in {
  0% {
    color: transparent;
  }
  100% {
    color: inherit;
  }
}

h2:hover [emoji].flexes:not(.emoji-fade-in) {
  animation: emoji-flex 500ms linear forwards,
    0.1s emoji-quiver 500ms linear infinite;
}
@keyframes emoji-flex {
  to {
    transform: rotate(30deg);
  }
}
@keyframes emoji-quiver {
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(30deg) translateY(-2%);
  }
  100% {
    transform: rotate(30deg) translateY(2%);
  }
}

.currently-workingon:hover [emoji].rotates:not(.emoji-fade-in) {
  animation: emoji-rotate 1.5s linear 3;
}

@keyframes emoji-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.flipped {
  transform: rotateY(180deg);
}
.currently-learning:hover {
  $airtime: 1s;
  $squashtime: 0.2s;
  $halftime: $airtime + $squashtime;
  $fulltime: 2 * $halftime;
  $gravity: cubic-bezier(0.165, 0.84, 0.44, 1);
  .studies:not(.emoji-fade-in) {
    --flipped: rotateY(180deg);
    animation: $squashtime emoji-squash 0s ease-in normal,
      $airtime emoji-jump $squashtime $gravity normal,
      $airtime emoji-jump $halftime $gravity reverse,
      $squashtime emoji-squash 2 * $airtime + $squashtime ease-out reverse;
  }
  .shadow-wrapper::after {
    animation: $airtime less-shadow $squashtime $gravity normal,
      $airtime less-shadow $halftime $gravity reverse;
  }
}
@keyframes less-shadow {
  from {
    width: 70%;
    left: 12%;
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.34);
  }
  to {
    width: 50%;
    left: 1vw;
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.04);
  }
}
@keyframes emoji-squash {
  from {
    transform: scaleY(1) translateY(0%) var(--flipped);
  }
  33.33% {
    transform: scaleY(0.8) translateY(10%) var(--flipped);
  }
  66.67% {
    transform: scaleY(1) translateY(0%) var(--flipped);
  }
  to {
    transform: scaleY(1.2) translateY(-10%) var(--flipped);
  }
}
@keyframes emoji-jump {
  from {
    transform: translateY(-10%) var(--flipped) scaleY(1.2);
  }
  to {
    transform: translateY(-200%) var(--flipped) scaleY(1);
  }
}
</style>
