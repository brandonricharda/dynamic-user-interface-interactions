const showNavItems = (function() {
    let navSelectors = document.getElementsByClassName("nav-selector");

    let toggleItems = function(button, mode) {
        let className = `${button.id}-child`;
        let items = document.getElementsByClassName(className);
        for (var i = 0; i< items.length; i++) {
            let item = items[i];
            if (mode == "hide") {
                item.classList.add("hidden");
            } else if (mode == "show") {
                item.classList.remove("hidden");
            }
        }
    }

    for (var i = 0; i < navSelectors.length; i++) {
        let button = navSelectors[i];
        let container = button.parentElement;
        button.addEventListener("mouseenter", function() {
            toggleItems(button, "show");
        });
        container.addEventListener("mouseleave", function() {
            toggleItems(button, "hide");
        });
    }
});

export default showNavItems;