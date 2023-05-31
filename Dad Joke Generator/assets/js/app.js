let btn = document.querySelector(".btn")
let joke = document.querySelector(".joke")

let config = {
    headers: {
        Accept: 'application/json'
    }
}

btn.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com/", config)
        .then(res => res.json())
        .then(data => joke.innerHTML = data.joke)
})

