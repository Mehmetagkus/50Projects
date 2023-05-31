let container = document.querySelector(".container")
let url = 'https://source.unsplash.com/random/'

for (let i = 0; i < 9; i++) {
    let img = document.createElement("img")
    img.src = `${url}${getRandomImages()}`
    container.append(img)
}

function randomNumber() {
    return Math.ceil(Math.random() * 20 + 300)
}

function getRandomImages() {
    return `${randomNumber()}x${randomNumber()}`
}
