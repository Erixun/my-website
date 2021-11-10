<template>
  <!-- MOBILE FIRST -->
  <the-darkness :class="goDark && 'total-darkness'"></the-darkness>
  <header class="primary">
    <div class="lg-container flx">
      <section class="logo ltext flx">
        <h1>erixun.me</h1>
        <TheLightBulb @powerOff="handleDarkness" />
      </section>
      <section class="mid">
        <!-- <nav>nav</nav> -->
      </section>
      <section class=""></section>
    </div>
  </header>
  <main>
    <section class="main-section presentation">
      <div class="lg-container">
        <aside tabindex="0" class="portrait flx-col flx-just-center">
          <div class="shadow-wrapper">
            <figure aria-label="Erik Sundberg">
              <div class="portrait-wrapper ib">
                <picture>
                  <img
                    src="img/portrait-180x180.jpg"
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
            <h2 class="brand ib">Welcome</h2>
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
            If you'd like to get in contact, use one of the options below. I'd
            be happy to hear from you. Feel free to look around too.
          </p>
        </article>
      </div>
    </section>
    <div class="separator">
      <div class="sm-container">
        <ul class="contact-options flx flx-just-center">
          <li>
            <a
              href="https://discord.gg/PF3MK6vM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord server"
            >
              <img
                src="https://www.svgrepo.com/show/341762/discord.svg"
                intrinsicsize="512 x 512"
                srcset="https://www.svgrepo.com/show/341762/discord.svg 4x"
                alt="Discord SVG Vector"
                title="Discord server"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erik-sundberg-76463787/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin profile"
              ><i class="devicon-linkedin-plain" title="Linkedin profile"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/erik.sundberg.9699"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
            >
              <i class="devicon-facebook-plain" title="Facebook profile"></i>
            </a>
          </li>
          <li class="circle">
            <a
              href="https://github.com/Erixun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github profile"
            >
              <i
                class="icon devicon-github-original"
                title="Github profile"
              ></i>
            </a>
          </li>
          <!-- <li><i class="devicon-twitter-original"></i></li> -->
        </ul>
      </div>
    </div>
    <section class="main-section powers stand-out">
      <div class="lg-container">
        <h2>Technical Experience</h2>
        <ul v-if="skills.length > 0" class="skill-cards">
          <BaseSkillCard
            v-for="(skill, index) in skills"
            :key="skill.id"
            :data="skill"
            v-show="index < SKILLS_MINIMUM || showMore"
          />
        </ul>
        <button class="btn-secondary skills-btn" @click="toggleShowState()">
          {{ showMore ? "Show Less.." : "Show More..." }}
        </button>
      </div>
    </section>
    <section class="hometown window">
      <!-- <h2>Stockholm</h2> -->
      <figure>
        <img
          src="http://3.bp.blogspot.com/-b5Oa2SgsU8c/U6JQ2JMzrMI/AAAAAAAAgJg/rIVnp45IWps/s1600/Stockholm-logo-2013.png"
          alt="Stockholm logo"
        />
      </figure>
      <h3>My Hometown</h3>
    </section>
    <section class="main-section currently">
      <div class="md-container flx">
        <h2>Currently...</h2>
        <article class="currently-learning ctext">
          <h3>
            <div class="shadow-wrapper">
              <span class="flipped studious" emoji title="monocle_face"
                >🧐</span
              >
            </div>
            Learning
          </h3>
          <ul class="padl">
            <li>Azure Functions</li>
            <li>Clean Code</li>
            <li>React</li>
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
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import TheLightBulb from "@/components/TheLightBulb.vue";
import TheDarkness from "@/components/TheDarkness.vue";
import Supplier from "@/data/Supplier";
import store from "@/data/store";
import origin from "@/data/constant/origin";
import BaseSkillCard from "@/components/BaseSkillCard.vue";

export default defineComponent({
  name: "MainView",
  components: { TheLightBulb, TheDarkness, BaseSkillCard },
  setup() {
    const lightStatus = reactive({ value: false });
    const handleDarkness = (noLight: boolean) => {
      lightStatus.value = noLight;
    };

    const supplier = new Supplier(store.skills, origin.skills);
    onMounted(() => {
      supplier.supply();
    });

    const showState = reactive({ isMore: false });
    const toggleShowState = () => {
      showState.isMore = !showState.isMore;
    };
    const SKILLS_MINIMUM = 6;

    return {
      handleDarkness,
      goDark: computed(() => lightStatus.value),
      SKILLS_MINIMUM,
      toggleShowState,
      showMore: computed(() => showState.isMore),
      skills: computed(() => store.skills.content),
    };
  },
});
</script>

<style lang="scss">
/* VARIABLES */
:root {
  --accented-text-color: #a7453c;
  --accented-bgc: #f4fdff;
  --accented-border: 1px solid #a7453c21;
  --accented-bs: 0px 2px 4px 0px lightgray;
  --alt-section-bgc: #fcfaf0;
  --base-bgc: #fffcf2;
  --separate-color: #f9f6e9;
  --separate-border: 0.2em solid var(--brand-color);
  --section-linear-gradient: linear-gradient(
    to bottom,
    var(--base-bgc),
    95%,
    var(--separate-color)
  );
  --neutral-text: #474747;
  --footer-bgc: #f2efe6;
  --brand-color: #008a00;
  --border-color: #848484a3;
  --lighter-border-color: #7a82a291;
  --light-section-bgc: hsl(180, 9.1%, 97.8%);
  --default-border-color: #eaecf3;
  --btn-s-color: #646464;
  --fade-in-duration: 1.3s;
  --lg-width: 1500px;
  --md-width: 1200px;
  --sm-width: 900px;
}

/* GENERAL STYLING */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  box-sizing: border-box;
  font-size: calc(0.35842vw + 0.95296em);

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    font-size: 0.97em;
    color: var(--neutral-text);
    background-color: var(--base-bgc);
    position: relative;
    & > * {
      z-index: 1000;
    }
    .stand-out {
      background-color: var(--accented-bgc);
      color: var(--accented-text-color);
      border-top: var(--accented-border);
      border-bottom: var(--accented-border);
      z-index: 3000;
    }
    & > *:not(#overlay) {
      border-bottom: 1px solid var(--default-border-color);
    }

    [emoji] {
      display: inline-block;
    }
  }

  h1,
  h2,
  h3,
  h4,
  button {
    all: unset;
    display: inline-block;
    font-family: "Catamaran", sans-serif;
  }
  h2 {
    font-weight: bold;
    font-size: 1.6em;
    padding-bottom: 0.5em;
  }
  h3 {
    font-size: 1.3em;
    line-height: 1.4;
  }
  p {
    margin: 0;
    line-height: 1.4;
    padding: 0.5em 0;
    font-family: "Merriweather Sans", sans-serif;
  }

  ul,
  ol {
    list-style: none;
    margin: 0.8em 0;
    padding: 0;
  }

  .btn-secondary {
    background: linear-gradient(120deg, #e6efff, #cbdeff);
    padding: 0.3em 1em;
    color: var(--btn-s-color);
    border-radius: 5px;
    margin-top: 2em;
    cursor: pointer;
    font-size: 0.9;
  }
}

/* HELPER CLASSES */
body {
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
  .sm-container {
    width: clamp(100px, 96vw, var(--sm-width));
    padding: 0 2vw;
    margin: 0 auto;
  }
  .md-container {
    width: clamp(200px, 100%, var(--md-width));
    padding: 0 2vw;
    margin: 0 auto;
  }
  .lg-container {
    width: clamp(300px, 100%, var(--lg-width));
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
  .brand {
    color: var(--brand-color);
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
}

/* HEADER STYLING */
header.primary {
  padding: 0.5em 3vw;
  z-index: 2000;
  background: linear-gradient(to right, var(--base-bgc), #f9f4e7);
  box-shadow: 0 -8px 20px 0 #d3d3d3a3;
  section {
    flex-grow: 1;
  }
  .logo {
    font-size: 1.1em;
    font-weight: bold;
    font-style: italic;
    padding-left: 1vw;
    color: var(--brand-color);
  }
}

/* MAIN STYLING */
.app > main {
  flex-grow: 8;
  display: flex;
  flex-direction: column;
  & > * {
    z-index: 1000;
  }
  & > section {
    display: flex;
    padding: 4em 1em;
  }

  & > section:not(.stand-out):not(.window) {
    background: var(--section-linear-gradient);
  }

  --portrait-shadow: rgba(0, 0, 0, 0.3);
  --portrait-shadow-less: rgba(0, 0, 0, 0.15);
  .portrait .shadow-wrapper::after {
    box-shadow: -0.5vw 4.5vw 1vw var(--portrait-shadow);
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
    }
    aside.portrait {
      flex-basis: 250px;
      perspective: 500px;
      padding: 1.5em 1em;
      margin-right: 1vw;
      .shadow-wrapper {
        margin: 0 auto;
        transform: rotateY(-10deg);

        figure {
          margin: 0;
        }
      }
      .shadow-wrapper::after {
        width: 100%;
        height: 1.5vw;
        left: 1.5vw;
        bottom: 0%;
      }
      .portrait-wrapper {
        padding: 0.5em;
        background: var(--brand-color);
        border-right: 3px solid darkgreen;
        border-radius: 5px;
      }
      img {
        max-width: 180px;
        width: 14vw;
        min-width: 110px;
        border-radius: 2px;
        color: whitesmoke;
      }
    }
  }

  .separator {
    background: var(--separate-color);
    padding: 2vw 0 6em;
    .contact-options {
      // border-top: var(--separate-border);
      gap: 2em;
      height: 1em;
      li {
        display: flex;
        margin-top: -1.2em;
        border-radius: 10%;
        &:not(:focus-within, :hover) {
          background: var(--base-bgc);
        }
        &.circle {
          border-radius: 50%;
        }

        i {
          font-size: 2em;
          color: var(--neutral-text);
        }
        img {
          height: 2.2em;
          filter: invert(23%) sepia(0%) saturate(2407%) hue-rotate(140deg)
            brightness(105%) contrast(85%);
        }
      }
      a {
        height: 101%;
        text-decoration: none;
        box-sizing: content-box;
        border-bottom: 2px solid var(--alt-section-bgc);

        &:visited {
          border-bottom-color: var(--brand-color);
        }
        &:hover,
        &:focus {
          transform: scale(1.05);
          cursor: pointer;
        }
        &:active {
          filter: brightness(0);
        }
      }
      li:hover,
      li:focus-within {
        background: white;
      }
    }
  }

  .powers {
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 8em;

    h2 {
      padding-bottom: 1em;
    }
    .skill-cards {
      display: grid;
      gap: 2em;
      grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
      justify-content: center;
    }

    .skills-btn {
      border: var(--accented-border);
      background: var(--alt-section-bgc);
      box-shadow: 1px 1px 1px 1px #80808082;
    }
    .skills-btn:hover,
    .skills-btn:focus {
      color: inherit;
    }
    .skills-btn:active {
      outline: 1px solid var(--brand-color);
    }
  }

  .hometown {
    display: block;
    position: relative;
    min-height: 100vh;
    background-image: url("../assets/hometown-2048x1152.webp");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #707070;
    z-index: 0;
    border-top: 4px solid var(--brand-color);
    border-bottom: 2px solid var(--brand-color);

    h2 {
      position: fixed;
      color: var(--brand-color);
      width: Max(80%, 350px);
      top: 16%;
      left: 0;
      font-size: 3rem;
      text-shadow: 0px 0px 20px #f1f1f1;
    }
    figure {
      position: fixed;
      color: var(--brand-color);
      width: Max(70%, 350px);
      top: 10%;
      left: 0;
      margin: 0;

      img {
        width: Max(45%, 350px);
        padding: 0 5vw;
        filter: drop-shadow(0px 0px 16px white);
        color: transparent;
      }
      img::after {
        content: 'Stockholm';
        font-size: 3.5rem;
        font-weight: bold;
        color: var(--brand-color);
      }
    }
    h3 {
      position: fixed;
      color: whitesmoke;
      width: 100%;
      top: 92%;
      left: 0;
      font-size: 2.5rem;
    }
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
      line-height: 1.4;
    }

    [emoji].studious {
      z-index: 1;
      position: relative;
    }
  }
}

/*FOOTER STYLING */
.app > footer {
  background-color: var(--footer-bgc);
  padding: 3em 3em 2em;
  .lg-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 5vw;
    h4 {
      font-weight: bold;
    }
    ul {
      margin-top: 0.5em;
      line-height: 1.4;
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
.flip {
  animation: flip 1s linear;
}

@keyframes flip {
  0%,
  100% {
    transform: translateZ(0) rotateY(0);
  }
  49.99% {
    transform: translateZ(300px) rotateY(-90deg);
  }
  50% {
    transform: translateZ(300px) rotateY(90deg);
  }
}

.portrait:hover,
.portrait:focus {
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

.portrait:hover > .shadow-wrapper::after,
.portrait:focus > .shadow-wrapper::after {
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

.flipped {
  transform: rotateY(180deg);
}
.currently-learning:hover {
  $airtime: 1s;
  $squashtime: 0.2s;
  $halftime: $airtime + $squashtime;
  $fulltime: 2 * $halftime;
  $gravity: cubic-bezier(0.165, 0.84, 0.44, 1);
  .studious {
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
</style>
