let deck = document.querySelector(".deck")

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach((sound) => {
    let btn = document.createElement("button")
    btn.innerHTML = sound
    deck.append(btn)

    btn.addEventListener("click", () => {
        soundPause()
        document.getElementById(sound).play()
    })
})

function soundPause() {
    sounds.forEach((sound) => {
        document.getElementById(sound).pause()
    })
}
