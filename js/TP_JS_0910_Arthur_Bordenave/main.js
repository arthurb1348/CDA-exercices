const state = {
    color : "black",
    index : 1
};

const hairImage = document.querySelector("#hair");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

function render() {
    const { color, index } = state;
    const path = `asset/img/hair-${color}-${index}.png`;
    hairImage.src = path;

    const isFirst = index === 1;
    const isLast = index === 3;

    previousButton.disabled = isFirst;
    previousButton.classList.toggle("opacity50", isFirst);
    previousButton.classList.toggle("clickable", !isFirst);

    nextButton.disabled = isLast;
    nextButton.classList.toggle("opacity50", isLast);
    nextButton.classList.toggle("clickable", !isLast);
}

previousButton.addEventListener("click", () => {
    if (state.index > 1) {
        state.index -= 1;
        render();
    }
});

nextButton.addEventListener("click", () => {
    if (state.index < 3) {
        state.index += 1;
        render();
    }
});

const colorButtons = document.querySelectorAll(".color-button");

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        state.color = button.dataset.color;
        render();
    });
});

render();