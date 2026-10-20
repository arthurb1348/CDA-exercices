import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))

const teamData = [
  { firstName: "Thomas", role: "Back Node", avatar: "thomas.jpg" },
  { firstName: "Julie", role: "Back Java", avatar: "julie.jpg" },
  { firstName: "Mehdi", role: "DevOps", avatar: "mehdi.jpg" }
];
const app = document.querySelector('#app');

//-------------Etape 1--------------//
const [thomas, julie, mehdi] = teamData;
const boss = { firstName: "Vous", role: "Formateur", avatar: "boss.jpg" };
const fullTeam = [thomas, julie, mehdi, boss];

//-------------Etape 2--------------//
function createCard(member) {
  const card = document.createElement('div');

  const img = document.createElement('img');
  img.setAttribute('src', member.avatar);
  img.setAttribute('alt', `${member.firstName} avatar`);
  card.appendChild(img);

  const name = document.createElement('h2');
  name.textContent = member.firstName;
  card.appendChild(name);

  const role = document.createElement('p');
  role.textContent = member.role;
  card.appendChild(role);

  return card;
}

//-------------Etape 3--------------//
const cardElements = fullTeam.map(member => createCard(member));
app.append(...cardElements);

//-------------Etape 4--------------//
fullTeam[0].role = "Front Angular";

const newCard = createCard(fullTeam[0]);
const oldCard = app.firstElementChild;

app.replaceChild(newCard, oldCard);

const cardElements2 = fullTeam.map(member => createCard(member));
app.append(...cardElements2);
