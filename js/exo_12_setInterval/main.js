const titre = document.querySelector("h1");
let timer = 3;

titre.addEventListener("click", function() {

    const countDown = setInterval(function () {
        if (timer > 0) {
            titre.textContent = timer;
            console.log(timer);
            timer--;
        } else {
            titre.textContent= "GO GO GO";
            console.log(timer);
            clearInterval(countDown);
        }
        
    }, 2000);

})