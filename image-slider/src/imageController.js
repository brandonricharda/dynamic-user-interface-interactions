import findHashKeyByValue from "./findHashKeyByValue";

const imageController = (function() {
    let activeImage = document.getElementById("active-image")
    let previousButton = document.getElementById("previous-button");
    let nextButton = document.getElementById("next-button");

    let images = {
        1: "./images/golden-gate.jpeg",
        2: "./images/los-angeles.jpeg",
        3: "./images/new-york.jpeg"
    }

    let imageCount = Object.keys(images).length;

    previousButton.addEventListener("click", function() {
        let src = activeImage.getAttribute("src");
        let currentKey = findHashKeyByValue(images, src);
        if (currentKey == 1) {
            activeImage.setAttribute("src", images[imageCount]);
        } else {
            let newKey = parseInt(currentKey) - 1;
            activeImage.setAttribute("src", images[newKey]);
        }
    });

    nextButton.addEventListener("click", function() {
        let src = activeImage.getAttribute("src");
        let currentKey = findHashKeyByValue(images, src);
        if (currentKey == imageCount) {
            activeImage.setAttribute("src", images[1]);
        } else {
            let newKey = parseInt(currentKey) + 1;
            activeImage.setAttribute("src", images[newKey]);
        }
    });
});

export default imageController;