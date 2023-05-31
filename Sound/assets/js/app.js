let sounds = document.querySelector(".sounds")

for (let index = 0; index < 20; index++) {
    let sound = document.createElement("i")
    sound.classList.add("i")
    sound.style.animationDelay = index / 6 + "s"
    sounds.append(sound)
    
}
