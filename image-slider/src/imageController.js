import findHashKeyByValue from "./findHashKeyByValue";

const imageController = (function() {
    let activeImage = document.getElementById("active-image");
    let previousButton = document.getElementById("previous-button");
    let nextButton = document.getElementById("next-button");

    let navDotOne = document.getElementById("nav-dot-1");
    let navDotTwo = document.getElementById("nav-dot-2");
    let navDotThree = document.getElementById("nav-dot-3");

    let images = {
        1: "./images/golden-gate.jpeg",
        2: "./images/los-angeles.jpeg",
        3: "./images/new-york.jpeg"
    }

    let imageCount = Object.keys(images).length;

    let clearNavDots = function() {
        [navDotOne, navDotTwo, navDotThree].forEach(function(navDot) {
            navDot.classList.remove("active-nav-dot");
        });
    }

    let reverseSlide = function() {
        let src = activeImage.getAttribute("src");
        let currentKey = findHashKeyByValue(images, src);
        if (currentKey == 1) {
            clearNavDots();
            navDotThree.classList.add("active-nav-dot");
            activeImage.setAttribute("src", images[imageCount]);
        } else {
            clearNavDots();
            let newKey = parseInt(currentKey) - 1;
            [navDotOne, navDotTwo, navDotThree][newKey - 1].classList.add("active-nav-dot");
            activeImage.setAttribute("src", images[newKey]);
        }
    }

    let advanceSlide = function() {
        let src = activeImage.getAttribute("src");
        let currentKey = findHashKeyByValue(images, src);
        if (currentKey == imageCount) {
            clearNavDots();
            navDotOne.classList.add("active-nav-dot");
            activeImage.setAttribute("src", images[1]);
        } else {
            let newKey = parseInt(currentKey) + 1;
            clearNavDots();
            [navDotOne, navDotTwo, navDotThree][newKey - 1].classList.add("active-nav-dot");
            activeImage.setAttribute("src", images[newKey]);
        }
    }

    window.setInterval(function() {
        advanceSlide();
    }, 5000);

    navDotOne.addEventListener("click", function() {
        clearNavDots();
        activeImage.setAttribute("src", images[1]);
        navDotOne.classList.add("active-nav-dot");
    });

    navDotTwo.addEventListener("click", function() {
        clearNavDots();
        activeImage.setAttribute("src", images[2]);
        navDotTwo.classList.add("active-nav-dot");
    });

    navDotThree.addEventListener("click", function() {
        clearNavDots();
        activeImage.setAttribute("src", images[3]);
        navDotThree.classList.add("active-nav-dot");
    });

    previousButton.addEventListener("click", function() {
        reverseSlide();
    });

    nextButton.addEventListener("click", function() {
        advanceSlide();
    });
});

export default imageController;