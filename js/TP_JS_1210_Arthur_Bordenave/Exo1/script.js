const btn = document.querySelector("button");
const div = document.querySelector("div");
let txt;

btn.addEventListener("click", function() {
    clearTimeout(txt);
    div.textContent = "Vous aimez ce contenu";
    txt = setTimeout(function() {
        div.textContent = "";
    }, 3000)

});