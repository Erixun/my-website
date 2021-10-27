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
      <h2>My Powers <span class="flexes" emoji>💪</span></h2>
      <ul>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>ASP.NET</li>
      </ul>
    </section>
    <section class="currently">
      <h2>I am currently...</h2>
      <article class="currently-learning ltext">
        <h3><span class="flipped studies" emoji>🧐</span> Learning</h3>
        <ul class="padl">
          <li>Azure Functions</li>
          <li>React</li>
          <li>Clean Code</li>
        </ul>
      </article>
      <article class="currently-workingon ltext">
        <h3>
          Working on
          <span class="rotates" emoji="🛠️" title="hammer_and_wrench">🛠️</span>
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

[emoji] {
  display: inline-block;
}

.dark {
  color: var(--darkmode-default-text);
  background-color: var(--darkmode-default-bgc);

  .emoji-fade-in {
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: inherit;
  display: flex;
  flex-direction: column;
}
#app.dark {
  transition: color var(--fade-in-duration) ease-out;
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

.ltext {
  text-align: left;
}
.rtext {
  text-align: right;
}

.padl {
  padding-left: 1.6rem;
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

/* KEYFRAMES */
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
  animation: emoji-rotate 1.5s linear infinite;
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

*:hover > .studies:not(.emoji-fade-in) {
  --default: rotateY(180deg);
  --checkOut: rotateY(180deg) rotateZ(15deg);
  --oneDown: translateY(100%);
  --twoDown: translateY(200%);
  --threeDown: translateY(300%);
  $airtime: 1s;
  $squashtime: 0.2s;
  $gravity: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: $squashtime emoji-squash 0s ease-in normal,
    $airtime emoji-jump $squashtime $gravity normal,
    $airtime emoji-jump $airtime + $squashtime $gravity reverse,
    $squashtime emoji-squash 2 * $airtime + $squashtime ease-out reverse;
}
@keyframes emoji-squash {
  from {
    transform: scaleY(1) translateY(0%) var(--default);
  }
  33.33% {
    transform: scaleY(0.8) translateY(10%) var(--default);
  }
  66.67% {
    transform: scaleY(1) translateY(0%) var(--default);
  }
  to {
    transform: scaleY(1.2) translateY(-10%) var(--default);
  }
}
@keyframes emoji-jump {
  from {
    transform: translateY(-10%) var(--default) scaleY(1.2);
  }
  // 5% {
  //   transform: translateY(10%) var(--default) scaleY(0.8);
  // }
  // 10% {
  //   transform: translateY(-10%) var(--default) scaleY(1.2);
  // }
  to {
    transform: translateY(-200%) var(--default) scaleY(1);
  }
}

@keyframes emoji-studious {
  from {
    transform: translateY(0) var(--default);
  }
  5% {
    transform: translateY(0) var(--default) scaleY(0.9);
  }
  10% {
    transform: translateY(100%) var(--default) scaleY(0.9);
  }
  20% {
    transform: var(--oneDown) var(--checkOut);
  }
  30% {
    transform: var(--oneDown) var(--default);
  }
  40% {
    transform: translateY(200%) var(--default);
  }
  50% {
    transform: translateY(200%) var(--checkOut);
  }
  60% {
    transform: translateY(200%) var(--default);
  }
  70% {
    transform: translateY(300%) var(--default);
  }
  80% {
    transform: translateY(300%) var(--checkOut);
  }
  90% {
    transform: translateY(300%) var(--default);
  }
  to {
    transform: translateY(300%) var(--default);
  }
}
</style>
