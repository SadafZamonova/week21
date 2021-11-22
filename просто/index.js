let parent = document.getElementById("content");
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => response.json())
    .then(search => {
        console.log(search);
        const drinks = search.drinks;

        for (let i = 0; i < drinks.length; i++) {
            let title = document.createElement("h1");
            let ingr = document.createElement("p");
            let img = document.createElement("img");
            let link = document.createElement("a");
            link.href = "details.html";

            title.innerHTML = drinks[i].strDrink;
            ingr.innerHTML = drinks[i].strMeasure1 + drinks[i].strIngredient1;
            img.src = drinks[i].strDrinkThumb;
            img.style.width = '300px';
            img.style.height = '300px';
            link.append(title, img);
            parent.append(ingr);
        }
    })
    .catch(error => console.log(error));