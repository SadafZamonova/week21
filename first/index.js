
document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    fetch("https://api.giphy.com/v1/gifs/search?api_key=WVWFB4UHkhAg5qfvQRkIw9FY5CnRMHkr&limit=5&offset=0&rating=g&lang=ru")
        .then(response => response.json())
        .then( user =>{
            document.querySelector(".output").src = user.avatar_url;
        })
        .catch(error => console.log(error));
})