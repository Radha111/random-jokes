let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");

function joke() {
    let url = "https://apis.ccbp.in/jokes/random"
    let options = {
        method: "GET"
    }
    spinner.classList.toggle("d-none")
    jokeText.classList.toggle("d-none")
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let random = jsonData.value
            spinner.classList.toggle("d-none")
            jokeText.classList.toggle("d-none")
            jokeText.textContent = random
        })


}
jokeBtn.addEventListener("click", joke)