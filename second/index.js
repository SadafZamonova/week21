document.querySelector("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    let user = {
        name: document.querySelector("#disabledTextInput").value,
        surname: document.querySelector("#disabledTextInput1").value,
        username: document.querySelector("#disabledTextInput2").value,
        password: document.querySelector("#inputPassword5").value,
        passwordreplay: document.querySelector("#inputPassword4").value,
    }
    console.log(user);

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
})