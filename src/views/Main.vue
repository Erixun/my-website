<template>
  <!-- MOBILE FIRST -->
  <header class="primary">
    <div class="lg-container flx">
      <section class="logo ltext">
        <h1>erixun.me</h1>
        <TheLightBulb />
      </section>
      <section class="mid">
        <!-- <nav>nav</nav> -->
      </section>
      <section class=""></section>
    </div>
  </header>
  <main>
    <section class="presentation">
      <div class="lg-container">
        <aside class="portrait flx-col flx-just-center">
          <div class="shadow-wrapper">
            <figure>
              <div class="portrait-wrapper ib">
                <picture>
                  <img
                    src="../../public/img/MySquaredPhoto2.jpg"
                    alt="Erik Sundberg"
                    srcset=""
                  />
                </picture>
              </div>
            </figure>
          </div>
        </aside>
        <article class="flx-col flx-just-center">
          <header id="welcome-header" class="welcome-header">
            <h2 class="welcoming ib">Welcome</h2>
            <h3 class="ib">
              This is the homepage of Erik Sundberg, Swedish Web developer, or
              <em>Swebdev</em>
            </h3>
          </header>
          <p>
            I am a passionate front-end developer, an avid programmer, tester
            and wanna-be full-stack engineer! Also a nutritionist by
            education...
          </p>
          <p>
            If you'd like to get in contact with me for any reason you may use
            one of the options below. I'd be happy to hear from you. Feel free
            to look around too.
          </p>
          <div>[contact-link icons]</div>
        </article>
      </div>
    </section>
    <section class="powers stand-out">
      <div class="lg-container">
        <h2>
          My Powers
          <span class="flexes" emoji title="muscle">💪</span>
        </h2>
        <ul>
          <li>Vue</li>
          <li>TypeScript</li>
          <li>ASP.NET</li>
        </ul>
        [Show More... ]
      </div>
    </section>
    <section class="currently">
      <div class="md-container flx">
        <h2>Currently...</h2>
        <article class="currently-learning ctext">
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
        <article class="currently-workingon ctext">
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
      </div>
    </section>
  </main>
  <footer>
    <div class="lg-container grid">
      <section class="contact ltext">
        <h4>Contact</h4>
        <ul>
          <li>Email</li>
          <li>Phone</li>
          <li>Linkedin</li>
        </ul>
      </section>
      <section class="site-info ltext">
        <h4>Site info</h4>
        <ul>
          <li>Made with Vue.js</li>
          <li>Hosted on github pages</li>
          <li>Source code</li>
        </ul>
      </section>
      <section class="credits ltext">
        <h4>Credits</h4>
        <ul>
          <li>Made by Erik Sundberg</li>
          <li>Template by Erik Sundberg</li>
          <li>Inspired by Smashing magazine</li>
        </ul>
      </section>
      <section class="site-status ltext">
        <h4>Status</h4>
        <ul>
          <li>Version: 1.2.7</li>
          <li>Last updated: Oct 29, 2021</li>
        </ul>
      </section>
    </div>
  </footer>
  <div id="mask"></div>
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
  --darkmode-default-text: rgba(174, 194, 211, 0.84);
  --darkmode-default-text-86: rgba(174, 194, 211, 0.86);
  --darkmode-selection-background: #004daa;
  --darkmode-selection-text: #e8e6e3;
  --darkmode-emphatic-bgc: #3c0000;
  --darkmode-emphatic-text-color: #ffff009e;
  --darkmode-emphatic-border: 2px solid #82020299;
  --darkmode-a-section-bgc: rgb(40, 39, 27);
  --darkmode-border-color: #4d526691;
  --darkmode-footer-bgc: #222117;
  --darkmode-welcome-color: #009d00;
  --emphatic-text-color-a: #d33a2c;
  --emphatic-text-color-b: #a7453c;
  --emphatic-bgc: #e7fbff75; //#ffe7e775;
  --emphatic-border: 1px solid #a7453c21;
  --emphatic-bs: 0px 2px 4px 0px lightgray;
  --a-section-bgc: #fcfaf0;
  --section-linear-gradient: linear-gradient(
    to bottom,
    var(--base-bgc),
    95%,
    #f9f6e9
  );
  --base-bgc: #fffcf2;
  --neutral-text: #474747;
  --footer-bgc: #e8e7dd91; // #e8e7dd;
  --title-color: darkcyan;
  --welcome-color: #007100;
  --border-color: #848484a3;
  --light-section-bgc: hsl(180, 9.1%, 97.8%);
  --light-border-color: #eaecf3;
  --neutral-main-bgc: #ffffff;
  --fade-in-duration: 1.5s;
  --cont-max-width: 1500px;
}

/* GENERAL STYLING */
body {
  margin: 0;
  min-height: 100vh;
  box-sizing: border-box;
  font-size: calc(0.35842vw + 0.95296em);

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    font-size: 0.97em;

    [emoji] {
      display: inline-block;
    }
  }
  #app.dark {
    position: relative;
    color: var(--darkmode-default-text);
    background-color: var(--darkmode-default-bgc);
    .darkness {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 3000;
      opacity: 1;
      transition: opacity var(--fade-in-duration) linear;
    }
    .fade {
      opacity: 0;
    }
    .stand-out {
      background-color: var(--darkmode-emphatic-bgc);
      color: var(--darkmode-emphatic-text-color);
      border-top: var(--darkmode-emphatic-border);
      border-bottom: var(--darkmode-emphatic-border);
    }
  }
  #app:not(.dark) {
    color: unset;
    background-color: var(--base-bgc);
    h1 {
      color: var(--title-color);
    }
    .stand-out {
      background-color: var(--emphatic-bgc);
      color: var(--emphatic-text-color-b);
      border-top: var(--emphatic-border);
      border-bottom: var(--emphatic-border);
      z-index: 3000;
      // box-shadow: 0px 2px 10px -5px #80808066;
    }
  }

  #app:not(.dark) > * {
    border-bottom: 1px solid var(--light-border-color);
  }
  #app.dark > * {
    border-bottom: 1px solid var(--darkmode-border-color);
  }

  h1,
  h2,
  h3,
  button {
    all: unset;
  }
  h2 {
    font-size: 1.7em;
    padding-bottom: 0.5em;
  }
  h3 {
    font-size: 1.3em;
  }

  p {
    padding: 0.5em 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0.8em 0;
    li {
      line-height: 2;
    }
  }
}

/* HELPER CLASSES */
.ib {
  display: inline-block;
}
.cap {
  text-transform: capitalize;
}
.ltext {
  text-align: left;
}
.rtext {
  text-align: right;
}
.ctext {
  text-align: center;
}
.padl-05 {
  padding-left: 0.5em;
}
.padl-16 {
  padding-left: 1.6em;
}
.md-container {
  width: 100%;
  max-width: 1200px;
  padding: 0 2vw;
  margin: 0 auto;
}
.lg-container {
  width: 100%;
  max-width: var(--cont-max-width);
  padding: 0 2vw;
  margin: 0 auto;
}
.flx {
  display: flex;
}
.flx-col {
  display: flex;
  flex-direction: column;
}
.flx-center {
  justify-content: center;
  align-items: center;
}
.flx-just-center {
  justify-content: center;
}
.flx-alit-center {
  align-items: center;
}
.welcoming {
  color: var(--welcome-color);
  font-weight: bold;
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
  z-index: 0;
  bottom: 25%;
  content: "";
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.34);
}

/* HEADER STYLING */
header.primary {
  padding: 0.5em 3vw;
  z-index: 2000;
  section {
    flex-grow: 1;
  }
  .logo {
    font-size: 1.1em;
    font-weight: bold;
    font-style: italic;
    padding-left: 1vw;
    h1 {
      text-transform: unset;
    }
  }
}
#app:not(.dark) header.primary {
  background: inherit; //var(--base-bgc);
  box-shadow: 0 -8px 20px 0 #d3d3d3a3;
}

/* MAIN STYLING */
#app:not(.dark) > main {
  // box-shadow: 0 -8px 20px 0 lightgrey;
  section:not(.stand-out) {
    background: var(--section-linear-gradient);
  }
  section:nth-child(even):not(.stand-out) {
    background-color: var(--a-section-bgc);
  }
  --portrait-shadow: rgba(0, 0, 0, 0.3);
  --portrait-shadow-less: rgba(0, 0, 0, 0.15);
  .portrait .shadow-wrapper::after {
    box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow);
  }
}
#app.dark > main {
  section:nth-child(even):not(.stand-out) {
    background-color: var(--darkmode-a-section-bgc);
  }
  .welcoming {
    filter: brightness(1.5);
  }
  --portrait-shadow: grey;
  --portrait-shadow-less: rgba(128, 128, 128, 0.507);
  .portrait .shadow-wrapper::after {
    box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow);
  }
}

main {
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  section {
    display: flex;
    padding: 4em 1em 5em;
  }
  .presentation > .lg-container {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
    column-gap: 3%;
    flex-flow: row-reverse wrap;

    article {
      flex-basis: 500px;
      text-align: left;
      padding: 1em 0;
      min-width: 40%;

      h2,
      h3 {
        width: 100%;
        padding-bottom: 0;
      }
      h2.welcoming {
        font-size: 1.6em;
      }
    }
    aside.portrait {
      flex-basis: 250px;
      perspective: 500px;
      padding: 1.5em 1em;
      margin-right: 1vw;
      .shadow-wrapper {
        margin: 0 auto;
        transform: rotateY(-10deg);
      }
      .shadow-wrapper::after {
        width: 100%;
        height: 1.5vw;
        left: 1.5vw;
        bottom: 0%;
      }
      .portrait-wrapper {
        padding: 0.5em;
        background: var(--welcome-color);
        border-right: 3px solid darkgreen;
        border-radius: 5px;
      }
      img {
        max-width: 180px;
        width: 14vw;
        min-width: 110px;
        border-radius: 2px;
      }
    }
  }
  .powers {
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
  }

  .currently > .md-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2.5em;
    text-align: center;
    h2 {
      width: 100%;
    }

    article {
      flex-basis: 200px;
    }
  }
}
/*FOOTER STYLING */
#app.dark > footer {
  background-color: var(--darkmode-footer-bgc);
}
#app:not(.dark) > footer {
  background-color: var(--footer-bgc);
}
footer {
  padding: 3em 3em 2em;
  .lg-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 5vw;

    // section {
    //   min-width: 240px;
    // }
    h4 {
      font-weight: bold;
    }
  }
}

/* MEDIA QUERIES */
@media screen and (min-width: 900px) {
  main .presentation {
    justify-content: unset;
  }
}

/* ANIMATIONS */
.portrait:hover {
  figure {
    animation: floating 2s ease-in-out alternate infinite;
  }
  .shadow-wrapper::after {
    --from-width: 100%;
    --from-left: 1.5vw;
    --to-width: 105%;
    --to-left: 1.8vw;
    animation: less-shadow 2s ease-in-out alternate infinite;
  }
}
#app.dark .portrait:hover .shadow-wrapper::after,
#app:not(.dark) .portrait:hover .shadow-wrapper::after {
  --from-box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow);
  --to-box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow-less);
  animation: less-shadow 2s ease-in-out alternate infinite;
}

@keyframes floating {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

h2:hover [emoji].flexes {
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

.currently-workingon:hover [emoji].rotates {
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
    --from-width: 70%;
    --from-left: 12%;
    --from-box-shadow: 0 5px 2px rgba(0, 0, 0, 0.34);
    --to-width: 50%;
    --to-left: 1vw;
    --to-box-shadow: 0 5px 2px rgba(0, 0, 0, 0.04);
    animation: $airtime less-shadow $squashtime $gravity normal,
      $airtime less-shadow $halftime $gravity reverse;
  }
}
@keyframes less-shadow {
  from {
    width: var(--from-width);
    left: var(--from-left);
    box-shadow: var(--from-box-shadow);
  }
  to {
    width: var(--to-width);
    left: var(--to-left);
    box-shadow: var(--to-box-shadow);
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
