const images = document.querySelectorAll("img");
const tabImg = Array.from(images);

tabImg.map((images, i) => images.addEventListener("load", function() {
    console.log(`img Num : ${i} - OK`);
}))