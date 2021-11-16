
document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    fetch("https://api.giphy.com/v1/gifs/search?api_key=ZClm4bxlZZbX6aLHMLRss3N0LPd2UHoa&q=&limit=5&offset=0&rating=g&lang=en")
        .then(response => response.json())
        .then( user =>{
            document.querySelector(".output").src = user.avatar_url;
        })
        .catch(error => console.log(error));
})