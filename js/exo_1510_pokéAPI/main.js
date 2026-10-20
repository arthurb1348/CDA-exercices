const liste = document.querySelector("#liste-pokemon");

async function afficherPokemon() {
  try {
    // Récupérer la liste des 20 premiers Pokémon
    const reponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    );

    if (!reponse.ok) throw new Error("Impossible de récupérer la liste.");

    const donnees = await reponse.json();

    for (const pokemon of donnees.results) {
    // Récupérer les détails pour l'image
    const reponseDetails = await fetch(pokemon.url);

    if (!reponseDetails.ok) {
        
        throw new Error(`Impossible de récupérer ${pokemon.name}.`);
    }

    const details = await reponseDetails.json();

    // Consulter la fiche espèce pour les traductions
    const reponseEspece = await fetch(details.species.url);

    if (!reponseEspece.ok) {
        throw new Error(`Impossible de récupérer les traductions.`);
    }

    const espece = await reponseEspece.json();

    // Trouver l'entrée correspondant au français
    const traduction = espece.names.find(
        entree => entree.language.name === "fr"
    );

    // Garder le nom d'origine si la traduction est absente
    const nomFrancais = traduction ? traduction.name : pokemon.name;

    const ligne = document.createElement("li");
    ligne.textContent = nomFrancais;

    const image = document.createElement("img");
    image.src = details.sprites.front_default;
    image.alt = nomFrancais;
    image.width = 96;
    image.height = 96;

    ligne.append(image);
    liste.append(ligne);
    }
  } catch (erreur) {
    console.error(erreur);
  }
}

afficherPokemon();