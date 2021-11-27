document.addEventListener("DOMContentLoaded", function (event) {
    const detailsObject = JSON.parse(localStorage.getItem("details"));
    console.log(detailsObject);
    document.querySelector("#title").innerHTML = detailsObject.strDrink;
    document.querySelector("#img").src = detailsObject.strDrinkThumb;
    document.querySelector("#ingr").innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1;
    img.style.width = '300px';
    img.style.height = '300px';

    document.querySelector("#submit").addEventListener("click", (evt) => {
        evt.preventDefault();

        let favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
         console.log(favoritesFromStorage);
        if (!Array.isArray(favoritesFromStorage)) {
            favoritesFromStorage = [];
        }

        favoritesFromStorage.push(detailsObject);

        localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));

       // document.location.href = "favorites.html";

    })
});