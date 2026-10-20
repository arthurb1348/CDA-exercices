const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");

liens[0].addEventListener("click", function() {
    titre.classList.add("test");
});

liens[1].addEventListener("click", function() {
    titre.classList.remove("maCouleur");
});

liens[2].addEventListener("click", function() {
    titre.classList.toggle("maCouleur");
});

// Exo Afficher les lettres en console

window.addEventListener("keydown", function(e) {
    console.log(e.key);
})

// Exo Ajouter une image à l'endroit du clic
document.addEventListener("click", function(e) {
    // Récupére la zone ou je clique (en console)
    console.log(e.target);
    // Créer un élément image
    const image = document.createElement("img");
    image.src = "img1.webp";
    image.alt = "Petite image ajoutée";
    // Ajoute la classe CSS pour le positionnement absolu
    image.classList.add("image-clic");
    // Récupére les coordonnées du clic par rapport à la zone
    const x = e.clientX;
    const y = e.clientY;
    // Applique les coordonnées à l'image
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    
    document.body.appendChild(image);
});

// Exo scrollbar
const bar = document.querySelector(".bar");

addEventListener("scroll", function() {
    console.log(`
        Hauteur page : ${document.body.scrollHeight}
        Hauteur affichage : ${innerHeight}
        Scroll Position : ${pageYOffset}`);
})
