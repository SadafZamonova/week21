document.addEventListener("DOMContentLoaded", function (event) {
    const favoritesObject = JSON.parse(localStorage.getItem("favorites"));
    console.log(favoritesObject);
    document.querySelector("#title").innerHTML = favoritesObject.strDrink;
    document.querySelector("#img").src = favoritesObject.strDrinkThumb;
    document.querySelector("#ingr").innerHTML = favoritesObject.strMeasure1 + favoritesObject.strIngredient1;
    img.style.width = '300px';
    img.style.height = '300px';

    
})