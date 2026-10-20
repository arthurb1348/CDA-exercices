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

setupCounter(document.querySelector('#counter'))//

//--------------Exercice 1----------------//
let a = "tortank";
let b = "dracaufeu";
console .log(a + " " + b);
let c = a;
a = b;
b = c;
console .log(a + " " + b);

//--------------Exercices 2----------------//
let Docteurs = [
  ["Docto Who", "extraterrestre"], 
  ["Docteur House", "misanthrope"], 
  ["Docteur Quinn", "femme médecin"]
];

console.log(Docteurs);
console.log(Docteurs[0] + " " + Docteurs[0][1]);

//--------------Exercices 3----------------//
let noteA = 12;
let noteB = 18;

function mean(a, b) {
  let result = (a + b) / 2;
  return result;
}

console.log(mean(noteA, noteB));

//--------------Exercices 4----------------//
let array = [
  ["Français", 15],
  ["Maths", 18],
  ["Philo", 14]
];

function mean2(arr) {
  if ((arr[0][1] + arr[1][1] + arr[2][1]) / 3 >= 15) {
    return "Très Bien";
  } else if ((arr[0][1] + arr[1][1] + arr[2][1]) / 3 >= 10) {
    return "Bien";
  } else {
    return "Refus";
  }
}

console.log(mean2(array));

//--------------Exercices 4----------------//
let bibliothèque = {
  livres: [
    { 
      titre: "Le Seigneur des Anneaux",
      dateSortie: 1954,
      auteur: "J.R.R. Tolkien",
      catégorie: "Fantasy",
    },
    {
      titre: "1984",
      dateSortie: 1949,
      auteur: "George Orwell",
      catégorie: "Science-fiction"
    },
    {
      titre: "L'instinct de Mort",
      dateSortie: 1979,
      auteur: "Jacques Mesrine",
      catégorie: "autobiographie"
    }
  ]
}

bibliothèque.livres[0].volume = 1;

console.log(bibliothèque.livres[1].titre);
console.log(bibliothèque.livres[0].auteur);
for (let i = 0; i < bibliothèque.livres.length; i++) {
  console.log(bibliothèque.livres[i].hasOwnProperty("volume"));
}

//--------------Exercices 5----------------//
/*const voiture = {
  marque: "Suzuki",
  modèle: "Grand Vitara",
  vitesse: 180,
  année: 2005
}

const { marque, modèle, vitesse, année } = voiture;
console.log(marque, modèle, vitesse);*/

//--------------Exercices 6----------------//
const voiture = {
  marque: "Suzuki",
  modèle: "Grand Vitara",
  vitesse: 180,
  année: 2005,
}

const { marque, modèle: prix, vitesse, année } = voiture;
console.log(marque, prix, vitesse, année);


//--------------Exercices 7----------------//
function melange(arr) {
  for(var i = 0 ; i < arr.length; i++) {
    const random = Math.floor(Math.random() * arr.length);
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}

array = melange([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(array);
const { 0: first, 1: second, 2: third} = array;
console.log(first, second, third);

// Sélectionner un élément du DOM par le nom de sa balise
const titre = document.body.getElementsByTagName("h1");

// Sélectionner un élément du DOM par son id
const titre2 = document.getElementById("titre");

// Sélectionner le premier élément par le nom de sa balise
const titre3 = document.querySelector("h1");

// Sélectionner le premier élément par son id
const titre4 = document.querySelector("#titre");

//Sélectionner tous les éléments possédant une classe Css nommée « maClasseSpeciale »
const liens = document.querySelectorAll(".maClasseSpeciale");

//--------------Exercices 8----------------//
const titre5 = document.getElementById("titre");
const txt =document.getElementsByTagName("p");

function ajoutTexte(pseudo, duTexte) {
  const newTxt = document.createElement("p");
  newTxt.innerHTML = `<strong>${pseudo}</strong> : ${duTexte}`;
  document.body.appendChild(newTxt);
}

ajoutTexte("JOSé", "AZERTYUIOP");
ajoutTexte("Sarah", "wxcvbn");
ajoutTexte("Michel",  "Super");
ajoutTexte("Lala", "POIUYTREZA");
ajoutTexte("Tom", "mlkjhgfdsq");

//--------------Exercices 8 bis----------------//
function ajoutTexte2(pseudo, duTexte) {
  const newTxt = document.createElement("p");
  newTxt.innerText = `<strong>${pseudo}</strong> : ${duTexte}`;
  document.body.appendChild(newTxt);
}

ajoutTexte2("JOSé", "AZERTYUIOP");
ajoutTexte2("Sarah", "wxcvbn");
ajoutTexte2("Michel",  "Super");
ajoutTexte2("Lala", "POIUYTREZA");
ajoutTexte2("Tom", "mlkjhgfdsq");

//--------------Exercices 8 ter----------------//
function ajoutTexte3(pseudo, duTexte) {
  const newTxt = document.createElement("p");
  newTxt.textContent = `<strong>${pseudo}</strong> : ${duTexte}`;
  document.body.appendChild(newTxt);
}

ajoutTexte3("JOSé", "AZERTYUIOP");
ajoutTexte3("Sarah", "wxcvbn");
ajoutTexte3("Michel",  "Super");
ajoutTexte3("Lala", "POIUYTREZA");
ajoutTexte3("Tom", "mlkjhgfdsq");