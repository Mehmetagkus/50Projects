let loadingText = document.querySelector(".loading")
let bg = document.querySelector(".bg")

let counter = 0

let load = setInterval(() => {
    counter++
    if (counter <= 100) {
        loadingText.innerHTML = counter + "%"
        bg.style.filter = `blur(${scale(counter, 0, 100, 10, 0)}px)`
    }
    if (counter == 100) {
        loadingText.innerHTML = "Hoş Geldiniz :)"
    }
}, 30);

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}