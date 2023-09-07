
let i = 0;
let items = document.getElementsByClassName("item");
for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let detail = this.nextElementSibling;
        console.log(detail.style.display);
        if (detail.style.display === "block") {
            detail.style.display = "none";
        }
        else {
            detail.style.display = "block";

        }
    }
    )
}



function openCuisine(evt, cName) {
    let i, cuisine, items;
    items = document.getElementsByClassName("items");
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    cuisine = document.getElementsByClassName("cuisine");
    for (i = 0; i < cuisine.length; i++) {
        cuisine[i].className = cuisine[i].className.replace(" selected", "");
    }
    document.getElementById(cName).style.display = "block";
    evt.currentTarget.className += " selected";
}











