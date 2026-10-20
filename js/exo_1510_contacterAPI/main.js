const liste = document.querySelector("#taskList");

async function afficherTaches() {
    try {
        const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        if(!reponse.ok) {
            throw new Error("Impossible de récupérer la liste.");
        }
        const donnees = await reponse.json();
        console.log(donnees);
        for(const tache of donnees) {
            const li = document.createElement("li");
            li.textContent = tache.title;
            liste.append(li);
        }
    } catch (erreur) {
        console.error(erreur);
    }
}

afficherTaches();