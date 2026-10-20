const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");

textarea.addEventListener("input", function() {
    btn.disabled = textarea.value.length > 5;
})