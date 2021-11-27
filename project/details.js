document.addEventListener("DOMContentLoaded", function (event) {
    const detailsObject = JSON.parse(localStorage.getItem("details"));
    console.log(detailsObject);
    document.querySelector("#title").innerHTML = detailsObject.strDrink;
    document.querySelector("#img").src =detailsObject.strDrinkThumb;
    document.querySelector("#ingr").innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1;
    img.style.width = '300px';
            img.style.height = '300px';
            
document.querySelector("#submit").addEventListener("click", (evt) => {
    evt.preventDefault();
    localStorage.setItem("favorites", JSON.stringify(detailsObject));
    document.location.href = "favorites.html";
            
})
});
