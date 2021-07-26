const toggleNavItems = (function() {
    let primaryButton = document.getElementById("primary-nav-button");

    let toggleItems = function() {
        let items = document.getElementsByClassName("nav-button");
        for (var i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.classList.contains("hidden")) {
                item.classList.remove("hidden");
                if (i == 0) {
                    primaryButton.childNodes[0].setAttribute("class", "fas fa-times");
                }
            } else {
                item.classList.add("hidden");
                if (i == 0) {
                    primaryButton.childNodes[0].setAttribute("class", "fas fa-plus");
                }
            }
        }
    }

    primaryButton.addEventListener("click", function() {
        toggleItems();
    });
});

export default toggleNavItems;