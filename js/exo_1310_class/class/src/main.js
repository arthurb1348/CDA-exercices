import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'
import party from "party-js";


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
//-------------- Exo 1 --------------//

setupCounter(document.querySelector('#counter'))

class Bibliotheque {
  constructor(livres) {
    this.livres = livres;
  }
}

const maBibliotheque = new Bibliotheque([{
  titre: "Le Seigneur des Anneaux",
  dateSortie: 1954,
  auteur: "J.R.R. Tolkien",
  },{
  titre: "1984",
  dateSortie: 1949,
  auteur: "George Orwell",
  },{
  titre: "L'instinct de Mort",
  dateSortie: 1979,
  auteur: "Jacques Mesrine",
  }
]);

maBibliotheque.livres[0].volume = 1;
console.log(maBibliotheque.livres[1].titre);
console.log(maBibliotheque.livres[0].auteur);
maBibliotheque.livres.forEach(livre => {
  console.log(`${livre.titre} a volume ? ${livre.hasOwnProperty("volume")}`)
});

//-------------- localStorage - sessionStorage --------------//

localStorage.setItem("bouqins", JSON.stringify(maBibliotheque));

sessionStorage.setItem("bouqinsSession", JSON.stringify(maBibliotheque));

const bouquinsRecup = localStorage.getItem("bouqins");
const biblio = JSON.parse(bouquinsRecup);

const bouquinsRecupSession = sessionStorage.getItem("bouqinsSession");
const biblioSession = JSON.parse(bouquinsRecupSession);

console.log(biblio);
console.log(biblioSession);

//-------------- Exo 2 --------------//

class Animal {
  constructor(nom) {
    this.nom = nom;
  }
  parler() {
    return `${this.nom} fait un bruit.`;
  }
}
class Chien extends Animal {
  constructor(nom, race, poil, taille) {
    super(nom); // Appelle le constructeur de Animal
    this.race = race;
    this.poil = poil;
    this.taille = taille;
  }
  parler() {
    return `${this.nom} aboie !`; // Redéfinition de la méthode
  }
}
class Chat extends Animal {
  constructor(nom, age, poil, chasse) {
    super(nom); // Appelle le constructeur de Animal
    this.age = age;
    this.poil = poil;
    this.chasse = chasse;
  }
  parler() {
    return `${this.nom} miaule !`; // Redéfinition de la méthode
  }
}
class Piaf extends Animal {
  constructor(nom, espece, niche, migre) {
    super(nom); // Appelle le constructeur de Animal
    this.espece = espece;
    this.niche = niche;
    this.migre = migre;
  }
  parler() {
    return `${this.nom} piaille !`; // Redéfinition de la méthode
  }
}

const Ranger = new Chien('Ranger', 'Patou', 'longs et blanc', 'grand');
const Cookie = new Chat('Cookie', 2, 'cours', true);
const Poulette = new Piaf('Poulette', 'poule pondeuse', 'poulailler', false);

console.log(Ranger);
console.log(Ranger.parler());
console.log(Cookie);
console.log(Cookie.parler());
console.log(Poulette);
console.log(Poulette.parler());

//-------------- Party.js --------------//
const bouton = document.querySelector("#monBouton");
bouton.addEventListener("click", (e) => {
    party.confetti(e.target);
});
