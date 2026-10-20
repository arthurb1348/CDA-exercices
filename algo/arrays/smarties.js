// Le but de cet exercice est de répondre à quelques questions concernant mes derniers relevés de Smarties®.

// Dans une boîte de Smarties®, il y a des bonbons de 8 couleurs différentes : rose, rouge, orange, jaune, vert, bleu, violet, marron
// Dans ma première boîte, j'ai eu 3, 6, 7, 3, 6, 2, 2 et 1 bonbons de chaque couleur, respectivement
// Comment pourrais-je stocker cette information là en js ?
let couleurs = ["rose", "rouge", "orange", "jaune", "vert", "bleu", "violet", "marron"];
let boite1 = [3, 6, 7, 3, 6, 2, 2, 1];
// Comment pourrais-je stocker toutes les informations du fichier smarties.data ?

fetch("smarties.data")
  .then(response => response.text())
  .then(data => {
    let boites = data.trim().split("\n");
    let couleurs = boites[0]
      .split(",")
      .map(couleur => couleur.trim());
    let smarties = boites
      .slice(1)
      .map(ligne => ligne.split(",").map(Number));
    console.log(couleurs);
    console.log(smarties);
// Maintenant que j'ai ces données :
// Combien y a-t-il de Smarties® dans chaque boîte ?
  let count = [];
  for(let i = 0; i < smarties.length; i++) {
    let count1 = 0
    for(let j = 0; j < 8; j++) {
      count1 += smarties[i][j];
    }
    count[i] = count1;
  }
  console.log(count);
// Quel est le nombre minimum de Smarties® dans une boîte ?
  let min = count[0];
  for(let i = 0; i < count.length; i++) {
    if(count[i] < min) {
      min = count[i];
    }
  }
  console.log("min: "+ min);
// Et le nombre maximum ?
  let max = count[0];
  for(let i = 0; i < count.length; i++) {
    if(count[i] > max) {
      max = count[i];
    }
  }
  console.log("max: "+ max);
// Combien y a-t-il de Smarties® bleus en tout ?
  let blue = 0
  for(let i = 0; i < smarties.length; i++) {
    blue += smarties[i][5];
  }
  console.log("bleu: "+ blue);
// Pour chaque couleur, compter le nombre de Smarties® de cette couleur.
  let nb = [];
  for(let i = 0; i < 8; i++) {
    let n = 0;
    for(let j = 0; j < smarties.length; j++) {
      n += smarties[j][i];
    }
    nb[i] = n;
  }
  for(let i = 0; i < 8; i++) {
    console.log(couleurs[i] + ": " + nb[i]);
  }
// Quelle est la couleur la plus présente, en tout ?
  let colorMax = nb[0];
  for(let i = 0; i < nb.length; i++) {
    if(nb[i] > colorMax) {
      colorMax = nb[i];
    }
  }
  console.log("couleur la plus présente: "+ couleurs[nb.indexOf(colorMax)]);
// Quel est le nombre maximum de Smarties® d'une seule couleur, dans une boîte ?
  let maxAll = 0;
  for(let i = 0; i < smarties.length; i++) {
    let max1 = 0;
    for(let j = 0; j < 8; j++) {
      if(smarties[i][j] > max1) {
        max1 = smarties[i][j];
      }
    }
    if(max1 > maxAll) {
      maxAll = max1;
    }
  }
  console.log("le nombre maximum de Smarties® d'une seule couleur, dans une boîte est: " + maxAll);
// Dans combien de boîtes y' a-t-il 3 Smarties® bleues ?
  let count3blue = 0;
  for(let i = 0; i < smarties.length; i++) {
    if(smarties[i][5] == 3) {
      count3blue ++;
    }
  }
  console.log("Il y a " + count3blue + " boîtes avec 3 Smarties® bleues");
// Dans combien de boîte une couleur est absente ?
  let count0 = 0;
  for(let i = 0; i < smarties.length; i++) {
    abs = false;
    for(let j = 0; j < 8; j++) {
      if(smarties[i][j] == 0) {
        abs = true;
      }
    }
    if(abs) {
      count0++
    }
  }
  console.log("Il y a " + count0 + " boîtes avec une couleur absente");
// Dans combien de boîte les Smarties® oranges sont-ils les plus nombreux ?
  let countOrange = 0;
  for(let i = 0; i < smarties.length; i++) {
    let orangeMax = true;
    for(let j = 0; j < 8; j++) {
      if(smarties[i][j] > smarties[i][2]) {
        orangeMax = false;
      }
    }
    if(orangeMax) {
      countOrange++;
    }
  }
  console.log("Il y a " + countOrange + " boîtes ou les Smarties® oranges sont les plus nombreux");
  });