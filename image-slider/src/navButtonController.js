const navButtonController = (function(){
    let previousButton = document.getElementById("previous-button");
    let nextButton = document.getElementById("next-button");

    previousButton.addEventListener("click", function() {
        console.log("Previous button clicked");
    });

    nextButton.addEventListener("click", function() {
        console.log("Next button clicked");
    });
});

export default navButtonController;