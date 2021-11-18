
document.querySelector('#button').addEventListener('click', (evt) => {
    evt.preventDefault();
   let search = document.querySelector("#Search").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=ZClm4bxlZZbX6aLHMLRss3N0LPd2UHoa&q=" + search + "&limit=5&offset=0&rating=g&lang=en")
        .then(response => response.json())
        .then( user =>{
            console.log(user);
        let cat=document.querySelector(".output");
        cat.innerHTML= " ";

        for (item of user.data) {
            let title = document.createElement("h1");
            title.innerHTML+=item.title;
            let img = document.createElement("img");
            img.src=item.images.original.url;
            cat.append(title, img);
        }
        })
        .catch(error => console.log(error));
})