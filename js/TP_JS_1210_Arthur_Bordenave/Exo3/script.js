const form = document.querySelector("form");
const txt = document.querySelector("#tag");
const list = document.querySelector("#tags-list");
const erreur = document.querySelector("#erreur");
const resume = document.querySelector("#resume");

const tags = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const tag = txt.value.trim().toLowerCase();
    erreur.textContent = "";

    if(tag === "") {
        erreur.textContent = "Saisissez un mot-clé.";
        return;
    }

    if(tags.includes(tag)) {
        erreur.textContent = "Ce mot-clé existe déjà.";
        return;
    }

    tags.push(tag);

    const pastille = document.createElement("li");
    pastille.textContent = tag;
    list.append(pastille);

    resume.textContent = `Tags : ${tags.join(", ")}`

    txt.value = "";
    txt.focus();
})