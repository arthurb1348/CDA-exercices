const btn = document.querySelector("button");
const count = document.querySelector("#chrono");
let time = 0;
let interval = null;

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "#2da800";
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
        btn.textContent = "Reprendre";
        btn.style.backgroundColor = "#505050";
    } else {
        interval = setInterval(function () {
            time++;
            count.textContent = time;
        },1000)
        btn.textContent = "Pause";
        btn.style.backgroundColor = "#2da800";
    }
});